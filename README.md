# wsm
Web Studio Module - an interface for flexible, portable, easy-to-code instruments and effects on the web

### Usage (module name "Rocketship")
```
function RocketShip(ctx, args) {
  WSM.call(this, ctx);
  // your code here
}
RocketShip.prototype = Object.create(WSM.prototype)
```

### Pre-built Modules

- `WSM.Script(ctx, audioProcessingFn);`
- `WSM.Sample(ctx, url);`

