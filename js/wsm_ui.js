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
  return label_span;
}

WSM_UI.prototype.addButton = function(label, x, y, w, h, handler) {
  var button_div = $(`<div class="wsm-button">${label}</div>`);
  button_div.css({
    top: y,
    left: x,
    width: w,
    height: h,
  });
  button_div.click(handler);
  this.container.append(button_div);
  return button_div;
}

WSM_UI.prototype.addTextInput = function(placeholder, x, y, w, h) {
  var text_input = $(`<input type="text" value="" class="wsm-text-input" placeholder="${placeholder}" />`);
  text_input.css({
    top: y,
    left: x,
    width: w,
    height: h,
  });
  this.container.append(text_input);
  return text_input;
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
  return knob_container;
}
