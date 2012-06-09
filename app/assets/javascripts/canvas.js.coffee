# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/
class Highlighter
  constructor: (@img) ->
    img = $(@img)
    img.each (index, elem) ->
      pos = $(elem).position()
      overlay = $("<div id='img_overlay'></div>")
        .css("position", "absolute")
        .css("left", pos.left)
        .css("top", pos.top)
        .css("width", elem.width())
        .css("height", elem.height())
      elem.parent().append(overlay)
      overlay.mousemove( this.mmhandler )
      overlay.mouseout( this.mohandler )

  mmhandler: (event) ->
    pos = this.offset()
    x = event.pageX - pos.left
    y = event.pageY - pos.top
    bgWebKit       = "-webkit-gradient(radial, #{x} #{y}, 0px, #{x} #{y}, 100%, color-stop(0%,rgba(0,0,0,0)),  color-stop(50%,rgba(0,0,0,0.8)))" #/* Chrome,Safari4+ */
    bgWebKitRadial = "-webkit-radial-gradient(#{x}px #{y}px, ellipse cover,  rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 50%)" #/* Chrome10+,Safari5.1+ */
    bgMoz          = "-moz-radial-gradient(#{x}px #{y}px, ellipse cover,  rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 50%)" #/* FF3.6+ */
    bgO            = "-o-radial-gradient(#{x}px #{y}px, ellipse cover,  rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 50%)" #/* Opera 12+ */
    bgMS           = "-ms-radial-gradient(#{x}px #{y}px, ellipse cover,  rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 50%)" #/* IE10+ */
    bg             = "radial-gradient(#{x}px #{y}px, ellipse cover,  rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 50%)" #/* W3C */
    this
      .css({background: bgWebKit})
      .css({background: bgWebKitRadial})
      .css({background: bgMoz})
      .css({background: bgO})
      .css({background: bgMS})
      .css({background: bg})

  mohandler: (event) ->
    this.css {background: "none"}

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

      grad = @ctx.createLinearGradient 76, 0, 96, 0
      grad.addColorStop 0, "hsl(60, 100%, 78%)"
      grad.addColorStop 0.5, "hsl(60, 100%, 98%)"
      grad.addColorStop 1, "hsl(60, 100%, 78%)"
      @ctx.fillStyle = grad
      @ctx.fillRect 76, 0, 20, 400

      grad = @ctx.createLinearGradient 0, 76, 0, 96
      grad.addColorStop 0, "hsl(174, 100%, 78%)"
      grad.addColorStop 0.5, "hsl(174, 100%, 98%)"
      grad.addColorStop 1, "hsl(174, 100%, 78%)"
      @ctx.fillStyle = grad
      @ctx.fillRect 0, 76, 400, 20

class HslSelector
  constructor: () ->
    hcan = $("canvas#hcan")[0]
    if hcan.getContext
      @hctx = hcan.getContext '2d'
      @sctx = $("canvas#scan")[0].getContext '2d'
      @lctx = $("canvas#lcan")[0].getContext '2d'
      this.draw()

    $("input").bind 'change', (event) =>
      target = $(event.target)
      alt = $("#" + target.data("alt"))
      alt.val(target.val())
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
  if $("div#highlighter").length != 0
    new Highlighter("img")
