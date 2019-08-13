import React, {Component} from "react";
import {Card, CardContent, CardHeader, Button, withStyles, colors} from "@material-ui/core";

const styles = () => ({
  button: {
    backgroundColor: colors.indigo[500],
  }
});

class Welcome extends Component {

  render() {
    const {classes} = this.props;
    return (
      <Card>
        <CardHeader title={"Добро пожаловать!!!"}/>
        <CardContent>
          <Button className={classes.button} onClick={this.props.NextQuestion} variant='contained' color='primary'>
            Начать
          </Button>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Welcome);