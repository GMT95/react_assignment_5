import React, { Component } from 'react';
import QuizList from './components/QuizList'
import QuizInfo from './components/QuizInfo'
import QuizTaker from './components/QuizTaker'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
              {
              name: "Angular JS",
              quizzes: [{name: "Quiz 1",questions: 30},{name: "Quiz 2",questions: 20},{name: "Quiz 3",questions: 15}]
              },
              {name: "React JS",
              quizzes: [{name: "Quiz 1",questions: 30},{name: "Quiz 2",questions: 20},{name: "Quiz 3",questions: 15}]
              },
              {name: "Vue JS",
              quizzes: [{name: "Quiz 1",questions: 30},{name: "Quiz 2",questions: 20},{name: "Quiz 3",questions: 15}]
              }
            ],
      quiz: null,
      qs: [
        {name: "Quiz 1",question: "What is React?",answers: ["It is a framework","It is a view Library","It is a backend framework"],cr:"It is a view Library"},
        {name: "Quiz 1",question: "What is PReact?",answers: ["It is a library","It is a view Library","It is a backend framework"],cr: "It is a view Library"},
      ]
    }

    this.passListToQuizInfo = this.passListToQuizInfo.bind(this)
  }

  passListToQuizInfo(index) {
    const { list } = this.state 
    this.setState({quiz: list[index]})  
  }

  goBackToQuiz() {
    this.setState({quiz: null})
  }
  
  render() {
    const { list,quiz,qs } = this.state;
    return (
      <div className="App">
        {/* {!quiz ? 
        <QuizList qlist={list} enterQuiz={this.passListToQuizInfo} />
        :<QuizInfo obj={quiz} goBack={_ => this.goBackToQuiz()}/>  
        } */}
        <QuizTaker quizname={qs} />
      </div>
    );
  }
}

export default App;
