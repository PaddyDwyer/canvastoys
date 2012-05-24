# Bundler Integration
# http://github.com/carlhuda/bundler/blob/master/lib/bundler/capistrano.rb
require 'bundler/capistrano'

# Application Settings
unless exists? :user
  set :user,        "p"
end
unless exists? :server_ip
  set :server_ip,   "server_ip"
end
unless exists? :port
  set :port,        0
end
set :application,   "canvas"
set :deploy_to,     "/home/#{user}/#{application}"
set :rails_env,     "production"
set :use_sudo,      false
set :keep_releases, 5

# Git Settings
set :scm,           :git
set :branch do
  default_tag = `git tag`.split("\n").last

  tag = Capistrano::CLI.ui.ask "Tag to deploy (make sure to push the tag first): [#{default_tag}] "
  tag = default_tag if tag.empty?
  tag
end
set :repository,    "git@github.com:kertap/canvastoys.git"
set :deploy_via,    :remote_cache

# Uses local instead of remote server keys, good for github ssh key deploy.
ssh_options[:forward_agent] = true
ssh_options[:keys] = [File.join(ENV["HOME"], ".ssh", "id_rsa")]
ssh_options[:port] = port

# Server Roles
role :web, "#{server_ip}"                     # Your HTTP server, Apache/etc
role :app, "#{server_ip}"                     # This may be the same as your `Web` server
role :db,  "#{server_ip}", :primary => true   # This is where Rails migrations will run

# Set default environment so we cap will use rbenv
set :default_environment, {
  'PATH' => "/home/#{user}/.rbenv/shims:/home/#{user}/.rbenv/bin:$PATH",
  'RAILS_RELATIVE_URL_ROOT' => "/canvas"
}

# Using Unicorn and Bundler binstubs and shit https://github.com/sstephenson/rbenv/issues/101
set :bundle_flags, "--deployment --binstubs --quiet --shebang ruby-local-exec"

# Unicorn deploy restart https://gist.github.com/393178
set :unicorn_binary, "#{current_path}/bin/unicorn_rails"
set :unicorn_config, "#{current_path}/config/unicorn.rb"
set :unicorn_pid, "#{current_path}/tmp/pids/unicorn.pid"
namespace :deploy do
  task :routes do
    run "cd #{current_path} && bundle exec rake routes"
  end
  task :start do
    run "cd #{current_path} && #{unicorn_binary} -c #{unicorn_config} -E #{rails_env} -D"
  end
  task :stop do
    if remote_file_exists?(unicorn_pid)
      run "kill `cat #{unicorn_pid}`"
    end
  end
  task :reload do
    if remote_file_exists?(unicorn_pid)
      run "kill -s USR2 `cat #{unicorn_pid}`"
    else
      start
    end
  end
  task :restart do
    stop
    start
  end
end

task :show_options do
  p "user is #{user}"
  p "deploy_to is #{deploy_to}"
  p "port is #{port}"
  p "server is #{server_ip}"
end

# In order for kill to work we need to know if the pid. If it doesn't exist it'll fail
def remote_file_exists?(full_path)
  'true' == capture("if [ -e #{full_path} ]; then echo 'true'; fi").strip
end
