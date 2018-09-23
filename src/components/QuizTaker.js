import React, { Component } from 'react';
import '../App.css';
import Timer from 'react-countdown-now';

class QuizTaker extends Component {
  constructor(props) {
    super(props);

    if (!localStorage.getItem('LScount') && !localStorage.getItem('score')) {
      localStorage.setItem('LScount', 0);
      localStorage.setItem('score',0);
    }

    this.state = {
      count: Number(localStorage.getItem('LScount')),
      score: localStorage.getItem('score'),
      myanswer: '',
      result: false
    }

    this.handleRadioChange = this.handleRadioChange.bind(this)
  }

  incerementCount() {
    let { count } = this.state;
    const counter = Number(localStorage.getItem('LScount'))
    //const score = Number(localStorage.getItem('score'))
    //console.log(counter);
    Number(localStorage.setItem('LScount', counter + 1));
    this.setState({ count: ++count })
  }

  checkAnswer(myAns,corrAns) {
    const score = Number(localStorage.getItem('score'));
    if(myAns === corrAns) {
      console.log(corrAns);
      localStorage.setItem('score',score + 10);
      this.setState({ score: score + 10 })
    }
    else {
      return;
    }
  }

  handleRadioChange(event) {
    this.setState({
      myanswer: event.target.value
    });
  }


  render() {
    const { quizname } = this.props;
    const { result,myanswer,count,score } = this.state;
    //const count = Number(localStorage.getItem('LScount'));
    const finalRes = localStorage.getItem('percentage');
    return (
      finalRes ?
        <div className="App">
        <p>Result: {Number(localStorage.getItem('percentage')).toFixed(2)}%</p>
        <button onClick={this.props.backFromResult}>Back</button>
        </div>
        : <div className="App">
          <h2>{quizname[count].name}</h2>
          <Timer date={Date.now() + 100000}/>
          <h3>Question {count + 1} of {quizname.length}</h3>
          <h2>{quizname[count].question}</h2>
          {
            quizname[count].answers.map((item) =>
              <div>
                <label>
                  <input type="radio" name="Quiz" onChange={this.handleRadioChange} value={item}/>
                  {item}
                </label>
              </div>
            )
          }
          <button onClick={_ => {
            if (count === quizname.length - 1) {
              //debugger
              this.checkAnswer(myanswer,quizname[count].cr);
              localStorage.setItem('percentage', (score * 100/((quizname.length - 1) * 10)))
              this.setState({ result: true })
            } else {
              console.log('hello', count);
              this.checkAnswer(myanswer,quizname[count].cr);
              this.incerementCount()
            }
          }}>
            Next
          </button>

        </div>
    );
  }
}

export default QuizTaker;