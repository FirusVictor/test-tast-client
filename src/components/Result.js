import React, {Component} from "react";
import {Card, CardContent, Typography} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import happy from '../images/happy.svg';
import sad from '../images/sad.svg';
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = () => ({
    success: {
        color: '#4CAF50'
    },
    fail: {
        color: '#f44336'
    }
});

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: false,
            loading: true
        };
    }

    componentDidMount() {
        fetch('http://test-task/server')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        loading: false,
                        result: result.result
                    });
                },
                (error) => {
                    this.setState({
                        loading: false,
                        error
                    });
                }
            )
    }

    render() {
        const {classes} = this.props;
        let result = this.state.result;
        let img = result ? happy : sad;
        let content = [];
        if(this.state.loading){
            content.push(<CircularProgress /> );
        }else{
            content.push(<Typography className={result ? classes.success : classes.fail} variant="h4" gutterBottom>
                {result ? 'Поздравляем!!!' : 'В следующий раз повезет...'}
            </Typography>);
            content.push(<img src={img} alt={img} className='emoji'/>);
        }
        return (
            <Card>
                <CardContent>
                    {content}
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(Result);