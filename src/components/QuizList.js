import React, { Component } from 'react';
import '../App.css';

class QuizList extends Component {

    render() {
        const { qlist,enterQuiz } = this.props;
        return (
            <div>
                <ul>
                    {qlist.map((value,index) => <li>
                        {value.name}
                        <button onClick={_ => enterQuiz(index)} className="btn btn-warning" style={{margin: 10}}>Enter the Quiz</button>
                    </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default QuizList;
