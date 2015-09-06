/*
 * wsm.js
 * Web Studio Module
 *
 * Philip Del Vecchio
 * PennApps XII
 * 9/5/2015
 */

var WSM = function(ctx) {
  this.input = ctx.createGain();
  this.output = ctx.createGain();
  this.input.connect(this.output);
  this.params = {};
  this.chain = [];
}

WSM.prototype.addParam = function(name, label, value, min, max, type) {
  this.params[name] = {
    'label': label,
    'value': value,
    'min': min,
    'max': max,
    'type': type
  }
}

WSM.prototype.getParam = function(name) {
  return this.params[name].value;
}


/*
 * WSM.Script
 */

WSM.Script = function(ctx, processAudio) {
  WSM.call(this, ctx);
  var scriptProcessor = ctx.createScriptProcessor(4096, 1, 1);
  scriptProcessor.onaudioprocess = function(audioProcessingEvent) {
    var inputBuffer = audioProcessingEvent.inputBuffer;
    var outputBuffer = audioProcessingEvent.outputBuffer;
    processAudio(inputBuffer, outputBuffer);
  }
  this.input = this.output = scriptProcessor;
}
WSM.Script.prototype = Object.create(WSM.prototype)


/*
 * WSM.Sample
 */

WSM.Sample = function(ctx, url) {
  WSM.call(this, ctx);
  this.input = null;
  this.buffer = null;
  this.loadSound(url);
}
WSM.Sample.prototype = Object.create(WSM.prototype)
 
WSM.Sample.prototype.loadSound = function(url) { 
  console.log("Loading sound: " + url);
  var that = this;
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';
  request.onload = function() {
    var audioData = request.response;
    ctx.decodeAudioData(audioData, function(buffer) {
      that.buffer = buffer;
    }, WSM.audioFileError);
  }
  request.send();
}

WSM.Sample.prototype.play = function(ctx) {
  console.log("Playing sound");
  var source = ctx.createBufferSource();
  source.buffer = this.buffer;
  source.connect(this.output);
  console.log("playing");
  source.start();
}
