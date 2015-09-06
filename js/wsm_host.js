/*
 * wsm_host.js
 * Web Studio Module Host
 *
 * Philip Del Vecchio
 */

console.log('here');
var ctx = new AudioContext();

//var sampler = new WSM.Sample(ctx, 'sounds/drums.ogg');

var simpler = new Simpler(ctx);
var fuzz = new Noisy(ctx);
simpler.output.connect(fuzz.input);
fuzz.output.connect(ctx.destination);

simpler.draw($('.simpler'));
fuzz.draw($('.noisy'));

