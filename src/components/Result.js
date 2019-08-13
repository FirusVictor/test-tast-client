import React, {Component} from "react";
import {Card, CardContent, CardHeader} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme =>{

};
class Result extends Component{
    render() {
        return (
            <Card>
                <CardContent>
                    test
                </CardContent>
            </Card>
        );
    }
}
export default withStyles(styles)(Result);