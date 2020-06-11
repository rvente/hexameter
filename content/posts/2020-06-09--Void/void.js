import Loadable from "@loadable/component";
import React, { Component } from "react";
const P5Wrapper = Loadable(() => import("react-p5-wrapper"));

/*
 * @author Blake Vente
 * @reference https://p5js.org/examples/simulate-particle-system.html
 */

function Sketch(p5) {
  // particle system singleton
  let system;
  let canvas;
  let gAlpha = 256;
  let fadeOut = false;
  p5.setup = () => {
    p5.ellipseMode(p5.CENTER);
    p5.rectMode(p5.CENTER);
    canvas = p5.createCanvas(400, 400);
    canvas.mouseClicked(fadeToBlack);
    p5.background(0);
    p5.noStroke();
    p5.colorMode(p5.RGB, 100);
    system = new ParticleSystem(p5.createVector(200, 200), .01);
  };

  let fadeToBlack = () => {
    fadeOut = true;
  }

  p5.draw = () => {
    let black = p5.color("black");
    let white = p5.color("white");
    let spanC = p5.color(100,p5.random(gAlpha));
    p5.background(black);
    p5.fill(white);
    system.run();
    if (fadeOut){
      gAlpha = Math.max(0,gAlpha-1);
      fadeOut = gAlpha
      if (!fadeOut) {
        system.particles = [];
      }
    } else {
      fadeOut = false;
      gAlpha = Math.min(100,gAlpha+10);
      if (gAlpha >=100 && p5.random() > .75){
      system.addParticle(0.013, spanC);
      }
    } 
      p5.fill(p5.color(0,gAlpha));
      p5.circle(200,200,70);
  };


  // Particle to be contained in particle system
  class Particle {
    constructor(position, accel, c) {
      this.acceleration = p5.createVector(
        p5.random(-accel, accel), p5.random(-accel, accel)
        );
      this.velocity = p5.createVector(
        p5.random(0.01, 0.05), p5.random(0.01, 0.05)
        );
      this.position = position.copy();
      this.lifespan = 100;
      this.color = c;
    }
    run() {
      this.update();
      this.display();
    }
    // Method to update position
    update() {
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.color.setAlpha(this.lifespan * gAlpha/100);
      this.lifespan -= p5.random(1);
    }
    // Method to display
    display() {
      p5.push();
      p5.stroke(p5.color(100, this.lifespan * gAlpha/100)) ;
      p5.strokeWeight(2);
      p5.fill(this.color);
      p5.rect(this.position.x, this.position.y, 24, 24);
      p5.pop();
    }
    isDead() {
      return this.lifespan < 0;
    }
  }


  class ParticleSystem {
    constructor(position) {
      this.origin = position.copy();
      this.particles = [];
    }
    addParticle(accel, c) {
      this.particles.push(new Particle(this.origin, accel, c));
    }
    run() {
      for (let i = this.particles.length-1; i >= 0; i--) {
        let p = this.particles[i];
        p.run();
        if (p.isDead()) {
          this.particles.splice(i, 1);
        }
      }
    }
  }


}

export default class App extends Component {
  render() {
    const dropShadow={
      boxShadow: "0px 0px 15px black",
      width: "400px",
      height: "400px",
      margin: "auto"
    }
    return (
      <div style={dropShadow}>
       <P5Wrapper sketch={Sketch} />
      </div>
    )
  }
}
