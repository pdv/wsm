/*
 * wsm_host.js
 * Web Studio Module Host
 *
 * Philip Del Vecchio
 */

console.log('here');
var ctx = new AudioContext();

var sampler = new WSM.Sample(ctx, 'sounds/drums.ogg');
var fuzz = new Noisy(ctx);
sampler.output.connect(fuzz.input);
fuzz.output.connect(ctx.destination);

fuzz.draw($('.noisy'));

document.getElementById('play').onclick = function() {
  console.log("clicked");
  sampler.play(ctx);
}
