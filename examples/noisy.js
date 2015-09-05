/*
 * Noisy - a Web Audio Plugin
 *
 * Philip Del Vecchio
 */

function Noisy(ctx) {
  WSM.call(this, ctx);
  var transform = new WSM.Script(ctx, this.transformer)
  this.input = this.output = transform;
}

Noisy.transformer = function(inputBuffer, outputBuffer) {
  var inputData = inputBuffer.getChannelData(channel);
  var outputData = outputBuffer.getChannelData(channel);
  for (var sample = 0; sample < inputBuffer.length; sample++) {
    var noise = ((Math.random() * 2) - 1) * 0.2;
    outputData[sample] = inputData[sample] + noise;
  }
}

Noisy.prototype = Object.create(WSM.prototype);
