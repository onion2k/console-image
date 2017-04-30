# console-image
A hack image-to-console.log toy.

## Installing console-image

Clone the repo and navigate to it's directory, then run `npm install && npm run build` to fetch the dependencies and build dist/console-image.es6.js. You can then use it in your pages.

## Using console-image.es6.js

Add the script to your page using `<script src="../dist/console.es6.js"></script>`, then you can simply pass an image element to the imageToConsole() function. Eg;

```javascript
var image = document.querySelector('#myimage');
image.addEventListener('load', function(e){
    imageToConsole(image).then(function(consoleImage){
        console.log.apply(console, consoleImage);
    });
});
```

See ./examples/simple.html for an example.