# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/
class Hsl
  constructor: (@h, @s, @l) ->

  rep: () ->
    h = if typeof @h is "function"
      @h()
    else
      @h
    s = if typeof @s is "function"
      @s()
    else
      @s
    l = if typeof @l is "function"
      @l()
    else
      @l
    "hsl(#{h}, #{s}%, #{l}%)"

class Tron
  constructor: () ->
    canvas = $("canvas#tron")[0]
    if canvas.getContext
      @ctx = canvas.getContext '2d'

      @ctx.fillRect 0, 0, 400, 400

      @ctx.fillStyle = "hsl(241, 100%, 95%)"
      @ctx.fillRect 76, 0, 20, 400

class HslSelector
  constructor: () ->
    hcan = $("canvas#hcan")[0]
    if hcan.getContext
      @hctx = hcan.getContext '2d'
      @sctx = $("canvas#scan")[0].getContext '2d'
      @lctx = $("canvas#lcan")[0].getContext '2d'
      this.draw()

    $("input").bind 'change', (event) =>
      this.draw()

  draw: () ->
    @hctx.lineWidth = 2
    for x in [0...200] by 2
      @hctx.beginPath()
      h = Math.floor(x * (360/200))
      @hctx.strokeStyle = new Hsl(h, this.getS, this.getL).rep()
      @hctx.moveTo x, 0
      @hctx.lineTo x, 35
      @hctx.closePath()
      @hctx.stroke()
    for x in [0...200] by 2
      @sctx.beginPath()
      s = Math.floor(x / 2)
      @sctx.strokeStyle = new Hsl(this.getH, s, this.getL).rep()
      @sctx.moveTo x, 0
      @sctx.lineTo x, 35
      @sctx.closePath()
      @sctx.stroke()
    for x in [0...200] by 2
      @lctx.beginPath()
      l = Math.floor(x / 2)
      @lctx.strokeStyle = new Hsl(this.getH, this.getS, l).rep()
      @lctx.moveTo x, 0
      @lctx.lineTo x, 35
      @lctx.closePath()
      @lctx.stroke()
    colorVal = new Hsl(this.getH(), this.getS(), this.getL()).rep()
    $("#color").css("background-color", colorVal)
    $("#stringval").html(colorVal)

  getH: () ->
    $("#hi").val()

  getS: () ->
    $("#si").val()

  getL: () ->
    $("#li").val()

$( document ).ready () ->
  if $("canvas#tron").length != 0
    new Tron()
  if $("div#hsl").length != 0
    new HslSelector()
