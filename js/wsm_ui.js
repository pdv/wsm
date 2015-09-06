/*
 * wsm_ui.js
 *
 * Philip Del Vecchio
 */

var WSM_UI = function(container, w, h) {
  this.container = container;
  this.container.css({
    width: w,
    height: h,
  });
}

WSM_UI.prototype.addKnob = function(param, x, y) {
  var input = $(`<input type="text" value="${param.value}" class="wsm-knob">`);
  this.div.append(input);
  input.knob({
    'min': param.min,
    'max': param.max,
    'release': function(v) { param.value = v }
  });
}

$(document).ready(function() {
  $(".wsm-knob").knob({
    

});
