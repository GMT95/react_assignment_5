import React,{Component} from 'react';
import '../App.css';
import Proctoring from '../components/proctoring';
import swal from 'sweetalert';

class  QuizInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      proctoringComponent : false,
      Qindex: ''
    }
    
    this.proctoringFormHandler = this.proctoringFormHandler.bind(this);
    this.proctoringKeyHandler = this.proctoringKeyHandler.bind(this);
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

  renderProctor() {
    this.setState({proctoringComponent: true})
  }
  render() {
    const { obj, goBack, quiznum } = this.props;
    const { proctoringComponent,Qindex }  = this.state;
    return (
      <div className="App">
        { !proctoringComponent ? 
          <div>
          <h1 style={{color:'red'}}>{obj.name}</h1>
          
          {obj.quizzes.map((value,index) => {
            return (
              <div>
                <h2 style={{color: 'blue'}}>{value.name}</h2>
                <h3>Total Questions: {value.questions}</h3>
                { /* <button onClick={_ => {quiznum(obj.name,index+1)}}>Start Quiz</button> */ }
                <button onClick={_ => {this.renderProctor(),this.setState({Qindex: index})}}>Start Quiz</button>
              </div>
            )
          })}
          
          <br/><button onClick={goBack}>Back</button>
          </div>
        : <Proctoring proctoringSubmit={_ => {this.proctoringFormHandler; quiznum(obj.name,Qindex+1)}} proctoringKey={this.proctoringKeyHandler} />
        }
      </div>
  );
  }
}

export default QuizInfo;