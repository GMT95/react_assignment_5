import React, { Component } from 'react';
import QuizList from './components/QuizList'
import QuizInfo from './components/QuizInfo'
import QuizTaker from './components/QuizTaker'
import Login from './components/login'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
              {
              name: "AngularJS",
              quizzes: [{name: "Quiz 1",questions: 30},{name: "Quiz 2",questions: 20},{name: "Quiz 3",questions: 15}]
              },
              {name: "ReactJS",
              quizzes: [{name: "Quiz 1",questions: 30},{name: "Quiz 2",questions: 20},{name: "Quiz 3",questions: 15}]
              },
              {name: "VueJS",
              quizzes: [{name: "Quiz 1",questions: 30},{name: "Quiz 2",questions: 20},{name: "Quiz 3",questions: 15}]
              }
            ],
      quiz: null,
      AngularJS1: [
        {name: "Quiz 1",question: "What is React?",answers: ["It is a framework","It is a view Library","It is a backend framework"],cr:"It is a view Library"},
        {name: "Quiz 1",question: "What is PReact?",answers: ["It is a library","It is a view Library","It is a backend framework"],cr: "It is a view Library"},
        {name: "Quiz 1",question: "What is PReact?",answers: ["It is a library","It is a view Library","It is a backend framework"],cr: "It is a view Library"},
      ],
      AngularJS2: [
        {name: "Quiz 1",question: "What is React?",answers: ["It is a framework","It is a view Library","It is a backend framework"],cr:"It is a view Library"},
        {name: "Quiz 1",question: "What is PReact?",answers: ["It is a library","It is a view Library","It is a backend framework"],cr: "It is a view Library"},
        {name: "Quiz 1",question: "What is PReact?",answers: ["It is a library","It is a view Library","It is a backend framework"],cr: "It is a view Library"},
      ],
      AngularJS3: [
        {name: "Quiz 1",question: "What is React?",answers: ["It is a framework","It is a view Library","It is a backend framework"],cr:"It is a view Library"},
        {name: "Quiz 1",question: "What is PReact?",answers: ["It is a library","It is a view Library","It is a backend framework"],cr: "It is a view Library"},
        {name: "Quiz 1",question: "What is PReact?",answers: ["It is a library","It is a view Library","It is a backend framework"],cr: "It is a view Library"},
      ],
      ReactJS1: [
        {name: "Quiz 1",question: "What is React?",answers: ["It is a framework","It is a view Library","It is a backend framework"],cr:"It is a view Library"},
        {name: "Quiz 1",question: "What is PReact?",answers: ["It is a library","It is a view Library","It is a backend framework"],cr: "It is a view Library"},
        {name: "Quiz 1",question: "What is PReact?",answers: ["It is a library","It is a view Library","It is a backend framework"],cr: "It is a view Library"},
      ],
      ReactJS2: [
        {name: "Quiz 1",question: "What is React?",answers: ["It is a framework","It is a view Library","It is a backend framework"],cr:"It is a view Library"},
        {name: "Quiz 1",question: "What is PReact?",answers: ["It is a library","It is a view Library","It is a backend framework"],cr: "It is a view Library"},
        {name: "Quiz 1",question: "What is PReact?",answers: ["It is a library","It is a view Library","It is a backend framework"],cr: "It is a view Library"},
      ],
      ReactJS3: [
        {name: "Quiz 1",question: "What is React?",answers: ["It is a framework","It is a view Library","It is a backend framework"],cr:"It is a view Library"},
        {name: "Quiz 1",question: "What is PReact?",answers: ["It is a library","It is a view Library","It is a backend framework"],cr: "It is a view Library"},
        {name: "Quiz 1",question: "What is PReact?",answers: ["It is a library","It is a view Library","It is a backend framework"],cr: "It is a view Library"},
      ],
      VueJS1: [
        {name: "Quiz 1",question: "What is React?",answers: ["It is a framework","It is a view Library","It is a backend framework"],cr:"It is a view Library"},
        {name: "Quiz 1",question: "What is PReact?",answers: ["It is a library","It is a view Library","It is a backend framework"],cr: "It is a view Library"},
        {name: "Quiz 1",question: "What is PReact?",answers: ["It is a library","It is a view Library","It is a backend framework"],cr: "It is a view Library"},
      ],
      VueJS2: [
        {name: "Quiz 1",question: "What is React?",answers: ["It is a framework","It is a view Library","It is a backend framework"],cr:"It is a view Library"},
        {name: "Quiz 1",question: "What is PReact?",answers: ["It is a library","It is a view Library","It is a backend framework"],cr: "It is a view Library"},
        {name: "Quiz 1",question: "What is PReact?",answers: ["It is a library","It is a view Library","It is a backend framework"],cr: "It is a view Library"},
      ],
      VueJS3: [
        {name: "Quiz 1",question: "What is React?",answers: ["It is a framework","It is a view Library","It is a backend framework"],cr:"It is a view Library"},
        {name: "Quiz 1",question: "What is PReact?",answers: ["It is a library","It is a view Library","It is a backend framework"],cr: "It is a view Library"},
        {name: "Quiz 1",question: "What is PReact?",answers: ["It is a library","It is a view Library","It is a backend framework"],cr: "It is a view Library"},
      ],

      takingQuiz: false,
      currentQuizName: ''
    }

    this.passListToQuizInfo = this.passListToQuizInfo.bind(this)
    this.quizNum = this.quizNum.bind(this);
  }

  passListToQuizInfo(index) {
    const { list } = this.state 
    this.setState({quiz: list[index]})  
  }

  goBackToQuiz() {
    this.setState({quiz: null})
  }

  quizNum(name,quizname) {
    console.log('Quiz Name',name,quizname);
    this.setState({takingQuiz: true,currentQuizName: name+quizname})
  }

    
  render() {
    const { list,quiz,takingQuiz,currentQuizName } = this.state;
    console.log(this.state[currentQuizName])
    return (
      <div className="App">
      {/* { !takingQuiz ? 
        !quiz ? 
        <QuizList qlist={list} enterQuiz={this.passListToQuizInfo} />
        :<QuizInfo obj={quiz} goBack={_ => this.goBackToQuiz()} quiznum={this.quizNum}/>  
        :<QuizTaker quizname={this.state[currentQuizName]} />
      } */}
      <Login />

      </div>
    );
  }
}

export default App;
