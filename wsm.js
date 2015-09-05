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
  input.connect(output);
  this.params = {}
  this.chain = [];
}


/*
 * WSM.Script
 */

function WSM.Script(ctx, processAudio) {
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

function WSM.Sample(ctx, url) {  
  WSM.call(this, ctx);
  this.input = null;
  this.loadSound(url);
}
WSM.Sample.prototype = Object.create(WSM.prototype)
 
WSM.Sample.loadSound = function(url) { 
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

WSM.Sample.play = function(ctx) {
  var source = ctx.createBufferSource();
  source.buffer = this.buffer;
  source.connect(this.output);
  console.log("playing");
  source.start();
}
