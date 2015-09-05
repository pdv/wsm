/*
 * wsm_host.js
 * Web Studio Module Host
 *
 * Philip Del Vecchio
 */

var ctx = new AudioContext();
var sampler = new WSM.Sample(ctx, 'sounds/drums.ogg');

sampler.output.connect(ctx.destination);

document.getElementById('play').onclick = function() {
  sampler.play();
}
