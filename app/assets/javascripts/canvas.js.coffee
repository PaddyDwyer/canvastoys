# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

class Tron
  constructor: () ->
    canvas = $("canvas#tron")[0]
    if canvas.getContext
      @ctx = canvas.getContext '2d'

      @ctx.fillRect 0, 0, 400, 400

      @ctx.fillStyle = "hsl(241, 100%, 95%)"
      @ctx.fillRect 76, 0, 20, 400


$( document ).ready () ->
  if $("canvas#tron").length != 0
    new Tron()
