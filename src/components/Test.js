import React, {Component} from "react";
import {Paper, TextField} from "@material-ui/core";
import {CartesianGrid, Label, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countUsers: 10,
            data: [],
            scale:1
        }
        this.handleChangeScale = this.handleChangeScale.bind(this);
    }

    componentDidMount() {
        fetch('http://test-task/server/test.php')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        data: result.data
                    });
                }
            )
    }
    handleChangeScale(event){
        this.setState({
            scale: event.target.value
        });
    }

    render() {
        return (
            <div>
                <Paper className='main-wrap'>
                    <p>Количество пользователей: {this.state.data.length}</p>
                    <p>
                        <TextField
                            label={'Масштаб:'}
                            variant='standard'
                            value={this.state.scale}
                            onChange={this.handleChangeScale}
                        />
                    </p>
                    <LineChart width={500} height={300} data={this.state.data}>
                        <XAxis dataKey="time"/>
                        <YAxis domain={[0,dataMax => (this.state.scale)]}/>
                        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                        <Line dot={false} type="monotone" dataKey="chance" stroke="#8884d8"/>
                        <Tooltip/>
                    </LineChart>
                </Paper>
            </div>
        );
    }
}

export default Test