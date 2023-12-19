// DonutAnimation.js
import React, {useEffect, useRef} from "react";
import './DonutAnimation.css';
const DonutAnimation = () => {
  const canvasRef = useRef(null);
  const preRef = useRef(null);
  useEffect(() => {
    let tmr1 = undefined;
    let tmr2 = undefined;
    let A = 1;
    let B = 1;
    const R1 = 1;
    const R2 = 2;
    const K1 = 150;
    const K2 = 5;

    const asciiframe = () => {
      const preTag = preRef.current;
      if (!preTag) return;
      var b = [];
      var z = [];
      A += 0.07;
      B += 0.03;
      let cA = Math.cos(A);
      let sA = Math.sin(A);
      let cB = Math.cos(B);
      let sB = Math.sin(B);
      for (var k = 0; k < 1760; k++) {
        b[k] = k % 80 == 79 ? "\n" : " ";
        z[k] = 0;
      }
      for (var j = 0; j < 6.28; j += 0.07) {
        let ct = Math.cos(j);
        let st = Math.sin(j);
        for (let i = 0; i < 6.28; i += 0.02) {
          let sp = Math.sin(i);
          let cp = Math.cos(i);
          let h = ct + 2;
          let D = 1 / (sp * h * sA + st * cA + 5);
          let t = sp * h * cA - st * sA;

          var x = 0 | (40 + 30 * D * (cp * h * cB - t * sB));
          let y = 0 | (12 + 15 * D * (cp * h * sB + t * cB));
          let o = x + 80 * y;
          let N = 0 | (8 * ((st * sA - sp * ct * cA) * cB - sp * ct * sA - st * cA - cp * ct * sB));
          if (y < 22 && y >= 0 && x >= 0 && x < 79 && D > z[o]) {
            z[o] = D;
            b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
          }
        }
      }
      preTag.innerHTML = b.join("");
    };

    const canvasframe = () => {
  
      const canvasTag = canvasRef.current;
      if (!canvasTag) return;
      var ctx = canvasTag.getContext("2d");
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      if (tmr1 === undefined) {
        A += 0.07;
        B += 0.03;
      }

      var cA = Math.cos(A);
      let sA = Math.sin(A);
      let cB = Math.cos(B);
      let sB = Math.sin(B);
      for (var j = 0; j < 6.28; j += 0.3) {
        var ct = Math.cos(j);
        let st = Math.sin(j);
        for (let i = 0; i < 6.28; i += 0.1) {
          var sp = Math.sin(i);
          let cp = Math.cos(i);
          var ox = R2 + R1 * ct;
          let oy = R1 * st;

          var x = ox * (cB * cp + sA * sB * sp) - oy * cA * sB;
          var y = ox * (sB * cp - sA * cB * sp) + oy * cA * cB;
          var ooz = 1 / (K2 + cA * ox * sp + sA * oy);
          var xp = 150 + K1 * ooz * x;
          var yp = 120 - K1 * ooz * y;

          var L = 0.7 * (cp * ct * sB - cA * ct * sp - sA * st + cB * (cA * st - ct * sA * sp));
          if (L > 0) {
            ctx.fillStyle = "rgba(255,255,255," + L + ")";
            ctx.fillRect(xp, yp, 1.5, 1.5);
          }
        }
      }
    };
    tmr1 = setInterval(asciiframe, 50);
    tmr2 = setInterval(canvasframe, 50);

    return () => {
      clearInterval(tmr1);
      clearInterval(tmr2);
    };
  }, []);

  return (
    <div>
      <pre ref={preRef}></pre>
      {/* <canvas ref={canvasRef}></canvas> */}
    </div>
  );
};

export default DonutAnimation;
