import React, {Component} from "react";
import Welcome from './Welcome'
import Question from './Question'
import Result from './Result'
import dataQuestion from '../questions';
import Progress from "./Progress";

export default class Lottery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestion: 0,
            questions: dataQuestion,
            answers: Array(dataQuestion.length)
        };
        this.NextQuestion = this.NextQuestion.bind(this);
        this.PrevQuestion = this.PrevQuestion.bind(this);
        this.SetAnswer = this.SetAnswer.bind(this);
    }

    NextQuestion() {
        this.setState({
            currentQuestion: this.state.currentQuestion + 1
        })
    }
    PrevQuestion() {
        this.setState({currentQuestion: this.state.currentQuestion - 1})
    }

    SetAnswer(answer) {
        let answers = this.state.answers;
        answers[this.state.currentQuestion - 1] = answer;
        this.setState({answers: answers})
    }

    render() {
        //выбов компонентов для рендера в зависимости от текущего вопроса
        let render =[
            <Progress
            steps={this.state.questions}
            activeStep={this.state.currentQuestion-1}
            />
            ,<Question
            NextQuestion={this.NextQuestion}
            PrevQuestion={this.PrevQuestion}
            data={{
                ...this.state.questions[this.state.currentQuestion - 1],
                answer: this.state  .answers[this.state.currentQuestion - 1]
            }}
            SetAnswer={this.SetAnswer}
        />];
        if (this.state.currentQuestion <= 0)
            render = <Welcome NextQuestion={this.NextQuestion}/>;
        if (this.state.currentQuestion > this.state.questions.length)
            render = <Result/>;

        return (
            <div className='main-wrap'>
                {render}
            </div>
        );
    }
}