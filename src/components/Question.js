import React, {Component} from "react";
import {
  Card,
  CardContent,
  CardHeader,
  RadioGroup,
  Button,
  FormControlLabel,
  Radio,
  Slider,
  ButtonGroup,
  Snackbar,
  SnackbarContent
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  error: {
    backgroundColor: theme.palette.error.dark,
  }
});

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {errorIsOpen: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSlider = this.handleChangeSlider.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChange(event) {
    this.props.SetAnswer(event.target.value);
  }

  handleChangeSlider(event, value) {
    this.props.SetAnswer(value);
  }

  handleClose() {
    this.setState({errorIsOpen: false});
  }

  handleNext() {
    if (this.props.data.answer)
      this.props.NextQuestion();
    else
      this.setState({errorIsOpen: true});
  }

  render() {
    const {classes} = this.props;
    let content = [];
    switch (this.props.data.type) {
      case 'radio':
        let answers = this.props.data.answers.map(
          (answer) => <FormControlLabel key={answer} value={answer} control={<Radio color='primary'/>}
                                        label={answer}/>
        );
        content.push(
          <RadioGroup
            name="question"
            value={this.props.data.answer}
            onChange={this.handleChange}
          >
            {answers}
          </RadioGroup>
        );
        break;
      case 'slider':
        content.push(
          <Slider
            className='slider'
            defaultValue={this.props.data.answer}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            onChange={this.handleChangeSlider}
            step={1}
            marks
            min={0}
            max={24}
          />
        );
        break;
        default:
            break;
    }

    return (
      <div>
        <Card>
          <CardHeader title={this.props.data.title}/>
          <CardContent>
            <p>{this.props.data.text}</p>
            {content}
            <ButtonGroup color="primary" className='controls' variant="contained">
              <Button onClick={this.props.PrevQuestion} variant='contained' color='primary'>Назад</Button>
              <Button onClick={this.handleNext} variant='contained' color='primary'>Вперед</Button>
            </ButtonGroup>
          </CardContent>
        </Card>

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.errorIsOpen}
          autoHideDuration={3000}
          onClose={this.handleClose}
        >
          <SnackbarContent
            className={classes.error}
            message={
                <span id="client-snackbar">
                    Выберите вариант ответа
                </span>
            }/>
        </Snackbar>
      </div>

    );
  }
}

export default withStyles(styles)(Question)