import toHex from './toHex';

export default function imageToConsole(w,h) {

    var promise = new Promise(function(resolve,reject){

        var img = document.createElement('img');
        img.src = 'vangogh.jpg';
        img.onload = function(){

            var s = '';
            var cols = [];
            var w = w || 40;
            var h = h || 40;

            var c = document.createElement('canvas');
                c.width  = w;
                c.height = h;

            var ctx = c.getContext('2d');
            ctx.fillStyle = 'black';
            ctx.fillRect(0,0,w,h);

            ctx.drawImage(img,1,1,w-2,h-2);

            for (var y = 0; y < h; y++) {
                if (y > 0) { s += '\n'; }
                for (var x = 0; x < w; x++) {
                    s += '%c  ';
                    var col = ctx.getImageData(x, y, 1, 1).data;
                    var hex = "#" + ("000000" + toHex(col[0], col[1], col[2])).slice(-6);
                    cols.push('background-color:'+hex+';');
                }
            }

            cols.unshift(s);

            resolve(cols);

        }

    });

    return promise;

}
