/*
 * Noisy - a Web Audio Plugin
 *
 * Philip Del Vecchio
 */

function Noisy(ctx) {
  WSM.call(this, ctx);
  this.addParam('amount', 'Amount', 10, 0, 100);
  var that = this;
  var transform = new WSM.Script(ctx, function(inputBuffer, outputBuffer) {
    for (var channel = 0; channel < outputBuffer.numberOfChannels; channel++) {
      var inputData = inputBuffer.getChannelData(channel);
      var outputData = outputBuffer.getChannelData(channel);
      for (var sample = 0; sample < inputBuffer.length; sample++) {
        if (inputData[sample]) {
          var noise = ((Math.random() * 2) - 1) * (that.getParam('amount') / 1000.0);
          outputData[sample] = inputData[sample] + noise;
        }
      }
    }
  });
  this.input = this.output = transform.output;
}
Noisy.prototype = Object.create(WSM.prototype);

Noisy.prototype.draw = function(container) {
  var ui = new WSM_UI(container, 150, 250);
  ui.addLabel('noisy', 40, 30, '24pt', 'Helvetica Neue');
  ui.addKnob(this.params.amount, 30, 100, 100, 100);
}
