import React from 'react';
import '../App.css';

function QuizInfo(props) {
  const { obj, goBack, quiznum } = props
  return (
    <div className="App">
      <h1 style={{color:'red'}}>{obj.name}</h1>
      {
        obj.quizzes.map((value,index) => {
          return (
            <div>
              <h2 style={{color: 'blue'}}>{value.name}</h2>
              <h3>Total Questions: {value.questions}</h3>
              <button onClick={_ => {quiznum(obj.name,index+1)}}>Start Quiz</button>
            </div>
          )
        })
      }
      <br/><button onClick={goBack}>Back</button>
    </div>
  );
}

export default QuizInfo;