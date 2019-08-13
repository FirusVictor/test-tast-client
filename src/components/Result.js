import React, {Component} from "react";
import {Card, CardContent, Typography} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import happy from '../images/happy.svg';
import sad from '../images/sad.svg';

const styles = () => ({
    success: {
        color: '#4CAF50'
    },
    fail: {
        color: '#f44336'
    }
});

class Result extends Component {
    render() {
        const {classes} = this.props;
        // let status = this.props.status;
        let status = true;
        let img = status ? happy : sad;
        return (
            <Card>
                <CardContent>
                    <Typography className={status ? classes.success : classes.fail} variant="h4" gutterBottom>
                        {status ? 'Поздравляем!!!' : 'В следующий раз повезет...'}
                    </Typography>
                    <img src={img} alt={img} className='emoji'/>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(Result);