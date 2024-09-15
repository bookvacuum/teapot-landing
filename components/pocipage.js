import Sketch from "react-p5";
import React, {Component} from 'react';


export default class PociPage extends Component {
    x = 50
    y = 50
    t =0 
    i = 0
  
    setup = (p5, parent) => {
      p5.createCanvas(720, 500).parent(parent)
    }

    mouseClicked = () => {
        console.log("clicked")
    }
    draw = p5 => {
      p5.background(255,204,255)
      p5.translate(p5.width/2,p5.height/2);

      p5.ellipse(this.x, this.y, 70, 70)
      p5.ellipse(this.x, this.y, 70, 70)
      p5.stroke(51, 255,255)
      p5.strokeWeight(1.5)
    
      function x1(t){
        return p5.sin(t/10)*125+p5.sin(t/20)*125+p5.sin(t/30)*125;
      }
      function y1(t){
        return p5.cos(t/10)*125+p5.cos(t/20)*125+p5.cos(t/30)*125;
      }

      function x2(t){
        return p5.sin(t/15)*125+p5.sin(t/25)*125+p5.sin(t/35)*125;
      }

      function y2(t){
        return p5.cos(t/15)*125+p5.cos(t/25)*125+p5.cos(t/35)*125;
      }

     
      for(this.i = 0;this.i<100;this.i++){
        p5.line(x1(this.t+this.i),y1(this.t+this.i),x2(this.t+this.i)+20,y2(this.t+this.i)+20);
      }
      this.t+=0.15;
    
      this.x++
      this.y++
    }
  
    render() {
      return <>
      <h1> Thank you for your contribution to Teapot. </h1>

        <h2> Click here to stop the animation. Your screenshot will be a POCI. </h2>
      <Sketch setup={this.setup} draw={this.draw} />
      </>

    }
  }
  
  
  