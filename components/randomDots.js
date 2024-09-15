import Sketch from "react-p5";
import React, {Component} from 'react';
import styles from "../styles/poci.module.css";
import Button from "../components/Button";
import SaveButton from "../components/SaveButton";

export default class RandomDots extends Component {


    setup = (p5, parent) => {
      p5.createCanvas(250,  250).parent(parent)
      p5.strokeWeight(2)
      p5.frameRate(1)
      p5.noLoop();
    }

  
    rand = 0;
    i = 0;
    totalPts = 500;
    steps = this.totalPts + 1; 

    draw = p5 => {
        let h1 = p5.random(0, 255)
        let h2 = p5.random(0, 255)
        let h3 = p5.random(0, 255)
      p5.background(h1, h2, h3)
      for(this.i = 1;this.i<this.steps;this.i++){
        let h1 = p5.random(0, 255)
        let h2 = p5.random(0, 255)
        let h3 = p5.random(0, 255)
        p5.stroke(h1, h2, h3)
        p5.point((p5.width / this.steps) * this.i, ( p5.height / 2 + p5.random(-this.rand, this.rand) ));
        this.rand += p5.random(-10,10)
        this.i++;
    }
}
  
    render() {

      return <div className={styles.container}>
      <h1 className={styles.successText}> Thank you for spilling the tea with us 🤪</h1>
        <p> We generated a unique POCI just for you. 
        </p>
        <p> The POCI verifies your unique data contribution at a certain time and cannot be replaced </p>              
        <p> If you have an Ethereum wallet, you can digitally sign the POCI here </p>              
        <SaveButton/>
        <br/>
        <h2> Your Unique POCI </h2>
      <Sketch setup={this.setup} draw={this.draw} />

      <Button buttonText= "back to the teapot" link="/"/>

      </div>

    }
  }
  
  

