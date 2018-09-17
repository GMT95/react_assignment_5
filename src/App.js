import React, { Component } from 'react';
import QuizList from './components/QuizList'
import QuizInfo from './components/QuizInfo'
import QuizTaker from './components/QuizTaker'
import Login from './components/login'
import Proctoring from './components/proctoring'
import swal from 'sweetalert'
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
      currentQuizName: '',
      email: '',
      pass: '',
      user: false,
      proctoringKeyValue: ''
    }

    this.passListToQuizInfo = this.passListToQuizInfo.bind(this)
    this.quizNum = this.quizNum.bind(this);
    this.formHandler = this.formHandler.bind(this);
    this.emailHandler = this.emailHandler.bind(this);
    this.passHandler = this.passHandler.bind(this);
    this.proctoringFormHandler = this.proctoringFormHandler.bind(this);
    this.proctoringKeyHandler = this.proctoringKeyHandler.bind(this);

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

  emailHandler(e) {
    this.setState({email: e.target.value})
  }

  passHandler(e) {
    this.setState({pass: e.target.value})
  }

  formHandler(e) {
    e.preventDefault()
    const {email,pass} = this.state;
    if(email === "johndoe@w3.com" && pass === "12345") {
      swal('Success')
      this.setState({user: true})
    }
    else {
      swal('Please fill all fields correctly')
    }
  }

  proctoringKeyHandler(e) {
    this.setState({proctoringKey: e.target.value})
  }

  proctoringFormHandler(e) {
    const {proctoringKey} = this.state;
    e.preventDefault();
    if(proctoringKey === '54321')
    {
      swal('Proctoring Submitted');
    }
    else {
      swal('Incorrect Key');
    }
  }

    
  render() {
    const { list,quiz,takingQuiz,currentQuizName,user } = this.state;
    console.log(this.state[currentQuizName])
    return (
      <div className="App">
      { user ? 
        !takingQuiz ? 
        !quiz ? 
        <QuizList qlist={list} enterQuiz={this.passListToQuizInfo} />
        :<QuizInfo obj={quiz} goBack={_ => this.goBackToQuiz()} quiznum={this.quizNum}/>  
        :<QuizTaker quizname={this.state[currentQuizName]} />
        :<Login emailChange={this.emailHandler} passChange={this.passHandler} formSubmit={this.formHandler} />
      }
      {/* <Proctoring proctoringSubmit={this.proctoringFormHandler} proctoringKey={this.proctoringKeyHandler} /> */}
      </div>
    );
  }
}

export default App;
