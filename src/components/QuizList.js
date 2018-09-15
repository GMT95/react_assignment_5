import React, { Component } from 'react';
import '../App.css';

class QuizList extends Component {

    render() {
        const { qlist,enterQuiz } = this.props;
        return (
            <ul>
                {qlist.map((value,index) => <li>
                    {value.name}
                    <button onClick={_ => enterQuiz(index)}>Enter the Quiz</button>
                </li>
                )}
            </ul>
        );
    }
}

export default QuizList;
