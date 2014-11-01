source 'https://rubygems.org'
gem 'rake', '10.0.3'

gem 'rails', '4.1.7'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'

# Use unicorn as the web server
gem 'unicorn', '~> 4.8'

# Deploy with Capistrano
gem 'capistrano', '~> 3.2'

# remove database
#gem 'sqlite3'

gem 'haml-rails', '~> 0.5'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.2'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'

# Gems used only for assets and not required
# in production environments by default.
# REMOVING ASSETS FOR UPGRADE
# group :assets do
#   gem 'sass-rails',   '~> 3.2.3'
#   gem 'coffee-rails', '~> 3.2.1'
# 
#   # See https://github.com/sstephenson/execjs#readme for more supported runtimes
#   # gem 'therubyracer', :platform => :ruby
# 
#   gem 'uglifier', '>= 1.0.3'
# end

gem 'jquery-rails', '~> 3.1'
gem 'jquery-ui-rails', '~> 3.0.1'

# Going to use HTTParty for managing some server calls
gem 'httparty', '~> 0.13'

# To use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.0.0'

# To use Jbuilder templates for JSON
# gem 'jbuilder'

# Use unicorn as the app server
# gem 'unicorn'

# Deploy with Capistrano
# gem 'capistrano'

# To use debugger
# gem 'ruby-debug19', :require => 'ruby-debug'

# Bundle gems for the local environment. Make sure to
# put test-only gems in this group so their generators
# and rake tasks are available in development mode:
group :production do
  gem 'therubyracer', '~> 0.12'
end
group :test do
  # Enable perf testing
  #gem 'ruby-prof', :git => 'git://github.com/wycats/ruby-prof.git'

  gem 'test-unit', '~> 3.0'
end
group :development do
  gem 'spring', '~> 1.1'
end
