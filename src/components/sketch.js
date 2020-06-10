export default function Sketch(p5) {
    let canvas;

    p5.setup = () => {
      canvas = p5.createCanvas(400, 400);
      p5.noStroke();
    };

    p5.draw = () => {
      let y = p5.color("coral");

      p5.fill(y);
      p5.circle(45, 45, 65);

      if (p5.mouseIsPressed) {
        p5.fill(p5.color("lightsalmon"));
      } else {
        p5.fill(p5.color("hsl(160, 100%, 50%)"));
      }
      p5.circle(p5.mouseX, p5.mouseY, 70, 70);
    };
  }