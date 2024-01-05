import React from 'react';

function BouncingWords(props) {
    // var boxes = [];
    // var words = props.words;
    // var last = performance.now();

    // function draw(now) {
    //     context.clearRect(0, 0, canvas.width, canvas.height);
    //     for (let i = 0; i < boxes.length; i++) {
    //         var box = boxes[i];
            
    //         // Interpolate position:
    //         var x = box.x + box.dx * (now - last);
    //         var y = box.y + box.dy * (now - last);
    //         box.width = context.measureText(words[i]).width; 
            
    //         context.beginPath();
    //         context.fillStyle = "black";
    //         context.font = "normal 40px monospace";
    //         context.textBaseline = "hanging";
    //         context.fillText(words[i], x, y);
    //         context.closePath();
    //     }
    //     requestAnimationFrame(draw);
    // }

    // setInterval(function(time) {
    //     var now = performance.now();
    //     doPhysics(boxes, canvas.width, canvas.height, now - last);
    //     last = now;
    // }, 50);

    // function time() {
    //     var now = performance.now();
    //     doPhysics(boxes, canvas.width, canvas.height, now - last);
    //     last = now;
    // }

    // initializeBoxes(boxes, words);

    return (
        <script src="bouncing.js">
        </script>
    );
}

export default BouncingWords;
// props has height and width