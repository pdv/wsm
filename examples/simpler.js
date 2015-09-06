/*
 * Simpler - a Web Studio Module
 *
 * Philip Del Vecchio
 */

function Simpler(ctx) {
  WSM.call(this, ctx);
  this.ctx = ctx;
}
Simpler.prototype = Object.create(WSM.prototype);

Simpler.prototype.draw = function(container) {
  var ui = new WSM_UI(container, 150, 250);
  var that = this;
  ui.addLabel('simpler', 25, 30, '24pt', 'Helvetica Neue');
  url_input = ui.addTextInput('Sound URL', 10, 90, 130, 30);
  ui.addButton('Load Sound', 10, 135, 130, 30, function() {
    var s = new WSM.Sample(that.ctx, url_input.val());
    s.output.connect(that.output);
    that.sample = s;
  });
  ui.addButton('Play Sound', 10, 150, 130, 30, function() {
    that.sample.play(that.ctx);
  });
}
