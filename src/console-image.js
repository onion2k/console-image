import toHex from './toHex';

export default function imageToConsole(img, w, h) {

    let promise = new Promise(function(resolve,reject){

        let s = '';
        let cols = [];

        let c = document.createElement('canvas');
            c.width  = w;
            c.height = h;

        let ctx = c.getContext('2d');
            ctx.fillStyle = 'black';
            ctx.fillRect(0,0,w,h);
            ctx.drawImage(img,1,1,w-2,h-2);

        for (let y = 0; y < h; y++) {
            if (y > 0) { s += '\n'; }
            for (let x = 0; x < w; x++) {
                s += '%c  ';
                let col = ctx.getImageData(x, y, 1, 1).data;
                let hex = "#" + ("000000" + toHex(col[0], col[1], col[2])).slice(-6);
                cols.push('background-color:'+hex+';');
            }
        }

        cols.unshift(s);
        resolve(cols);

    });

    return promise;

}