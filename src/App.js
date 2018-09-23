import React, { Component } from 'react';
import QuizList from './components/QuizList'
import QuizInfo from './components/QuizInfo'
import QuizTaker from './components/QuizTaker'
import Login from './components/login'
//import Proctoring from './components/proctoring'
import swal from 'sweetalert'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    if(!localStorage.getItem('user'))
    {localStorage.setItem('user',false);}
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
        {library:"AngularJS",name: "Quiz 1",question: "What is Angular?",answers: ["It is a framework","It is a view Library","It is a backend framework"],cr:"It is a framework"},
        {library:"AngularJS",name: "Quiz 1",question: "What data binding Angular uses?",answers: ["One Way data binding","Three Way data binding","Two Way data binding"],cr: "Two Way data binding"},
        {library:"AngularJS",name: "Quiz 1",question: "Angular is created by?",answers: ["Airbnb","Google","Facebook"],cr: "Google"},
      ],
      AngularJS2: [
        {library:"AngularJS",name: "Quiz 2",question: "What is Angular?",answers: ["It is a framework","It is a view Library","It is a backend framework"],cr:"It is a framework"},
        {library:"AngularJS",name: "Quiz 2",question: "What data binding Angular uses?",answers: ["One Way data binding","Three Way data binding","Two Way data binding"],cr: "Two Way data binding"},
        {library:"AngularJS",name: "Quiz 2",question: "Angular is created by?",answers: ["Airbnb","Google","Facebook"],cr: "Google"},
     ],
      AngularJS3: [
        {library:"AngularJS",name: "Quiz 3",question: "What is Angular?",answers: ["It is a framework","It is a view Library","It is a backend framework"],cr:"It is a framework"},
        {library:"AngularJS",name: "Quiz 3",question: "What data binding Angular uses?",answers: ["One Way data binding","Three Way data binding","Two Way data binding"],cr: "Two Way data binding"},
        {library:"AngularJS",name: "Quiz 3",question: "Angular is created by?",answers: ["Airbnb","Google","Facebook"],cr: "Google"},
      ],
      ReactJS1: [
        {library:"ReactJS",name: "Quiz 1",question: "What is React?",answers: ["It is a framework","It is a view Library","It is a backend framework"],cr:"It is a view Library"},
        {library:"ReactJS",name: "Quiz 1",question: "What data binding React uses?",answers: ["One Way data binding","Three Way data binding","Two Way data binding"],cr: "One Way data binding"},
        {library:"ReactJS",name: "Quiz 1",question: "Check true Statement?",answers: ["Stateful components have local state","Stateless components have local state","Stateful and Stateless components both have local states"],cr: "Stateful components have local state"},
      ],
      ReactJS2: [
        {library:"ReactJS",name: "Quiz 2",question: "What is React?",answers: ["It is a framework","It is a view Library","It is a backend framework"],cr:"It is a view Library"},
        {library:"ReactJS",name: "Quiz 2",question: "What data binding React uses?",answers: ["One Way data binding","Three Way data binding","Two Way data binding"],cr: "One Way data binding"},
        {library:"ReactJS",name: "Quiz 2",question: "Check true Statement?",answers: ["Stateful components have local state","Stateless components have local state","Stateful and Stateless components both have local states"],cr: "Stateful components have local state"},
      ],
      ReactJS3: [
        {library:"ReactJS",name: "Quiz 3",question: "What is React?",answers: ["It is a framework","It is a view Library","It is a backend framework"],cr:"It is a view Library"},
        {library:"ReactJS",name: "Quiz 3",question: "What data binding React uses?",answers: ["One Way data binding","Three Way data binding","Two Way data binding"],cr: "One Way data binding"},
        {library:"ReactJS",name: "Quiz 3",question: "Check true Statement?",answers: ["Stateful components have local state","Stateless components have local state","Stateful and Stateless components both have local states"],cr: "Stateful components have local state"},
      ],
      VueJS1: [
        {library:"VueJS",name: "Quiz 1",question: "VueJs is developed by?",answers: ["‎Jordan Walke","Adam Abrons","Evan You"],cr:"Evan You"},
        {library:"VueJS",name: "Quiz 1",question: "VueJs has which data binding?",answers: ["One Way data binding","Two Way Data Binding","Both one way and two way data binding"],cr: "Both one way and two way data binding"},
        {library:"VueJS",name: "Quiz 1",question: "In VueJs v-model directive is used for?",answers: ["One Way data binding","Three Way data binding","Two Way data binding"],cr: "Two Way data binding"},
      ],
      VueJS2: [
        {library:"VueJS",name: "Quiz 1",question: "VueJs is developed by?",answers: ["‎Jordan Walke","Adam Abrons","Evan You"],cr:"Evan You"},
        {library:"VueJS",name: "Quiz 1",question: "VueJs has which data binding?",answers: ["One Way data binding","Two Way Data Binding","Both one way and two way data binding"],cr: "Both one way and two way data binding"},
        {library:"VueJS",name: "Quiz 1",question: "In VueJs v-model directive is used for?",answers: ["One Way data binding","Three Way data binding","Two Way data binding"],cr: "Two Way data binding"},
      ],
      VueJS3: [
        {library:"VueJS",name: "Quiz 1",question: "VueJs is developed by?",answers: ["‎Jordan Walke","Adam Abrons","Evan You"],cr:"Evan You"},
        {library:"VueJS",name: "Quiz 1",question: "VueJs has which data binding?",answers: ["One Way data binding","Two Way Data Binding","Both one way and two way data binding"],cr: "Both one way and two way data binding"},
        {library:"VueJS",name: "Quiz 1",question: "In VueJs v-model directive is used for?",answers: ["One Way data binding","Three Way data binding","Two Way data binding"],cr: "Two Way data binding"},
      ],

      takingQuiz: false,
      currentQuizName: '',
      email: '',
      pass: '',
      user: JSON.parse(localStorage.getItem('user')),
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
      localStorage.setItem('user',true)
      this.setState({user: JSON.parse(localStorage.getItem('user'))})

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
      {user && <button onClick={_ => this.setState({user: false})} className="btn btn-dark" style={{marginLeft: '90%',marginTop: 10}}>Logout</button>}
      { user ? 
        !takingQuiz ? 
        !quiz ? 
        <QuizList qlist={list} enterQuiz={this.passListToQuizInfo} />
        :<QuizInfo obj={quiz} goBack={_ => this.goBackToQuiz()} quiznum={this.quizNum}/>  
        :<QuizTaker quizname={this.state[currentQuizName]} backFromResult={_ => this.setState({takingQuiz: false})}/>
        :<Login emailChange={this.emailHandler} passChange={this.passHandler} formSubmit={this.formHandler} />
      }
      {/* <Proctoring proctoringSubmit={this.proctoringFormHandler} proctoringKey={this.proctoringKeyHandler} /> */}
      </div>
    );
  }
}

export default App;
