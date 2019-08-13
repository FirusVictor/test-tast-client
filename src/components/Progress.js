import React, {Component} from "react";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

class Progress extends Component {
  render() {
    return (
      <Paper className='steps'>
        <Stepper activeStep={this.props.activeStep} alternativeLabel>
          {this.props.steps.map(step => (
            <Step key={step.title}>
              <StepLabel/>
            </Step>
          ))}
        </Stepper>
      </Paper>
    );
  }
}

export default Progress