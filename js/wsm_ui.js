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

WSM_UI.prototype.addLabel = function(label, x, y, size, font) {
  var label_span = $(`<span class="wsm-label">${label}</span>`);
  label_span.css({
    top: y,
    left: x,
    fontSize: size,
    fontFamily: font,
  });
  this.container.append(label_span);
}

WSM_UI.prototype.addKnob = function(param, x, y, w, h) {
  var knob_container = $(`<div class="wsm-knob-container"></div>`);
  knob_container.css({
    top: y,
    left: x,
    width: w,
    height: h,
  });

  var input = $(`<input type="text" value="${param.value}" class="wsm-knob">`);
  knob_container.append(input);
  this.container.append(knob_container);

  input.knob({
    'min': param.min,
    'max': param.max,
    'width': w,
    'height': h,
    'change': function(v) { param.value = v }
  });
}
