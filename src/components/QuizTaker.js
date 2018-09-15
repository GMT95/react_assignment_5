import React, { Component } from 'react';
import '../App.css';

class QuizTaker extends Component {
  constructor(props) {
    super(props);

    if (!localStorage.getItem('LScount') && !localStorage.getItem('score')) {
      localStorage.setItem('LScount', 0);
      localStorage.setItem('score',0);
    }

    this.state = {
      count: localStorage.getItem('LScount'),
      score: localStorage.getItem('score'),
      myanswer: '',
      result: false
    }

    this.handleRadioChange = this.handleRadioChange.bind(this)
  }

  incerementCount() {
    let { count } = this.state;
    const counter = Number(localStorage.getItem('LScount'))
    //console.log(counter);
    Number(localStorage.setItem('LScount', counter + 1));
    
    this.setState({ count: ++count })
  }

  handleRadioChange(event) {
    this.setState({
      myanswer: event.target.value
    });
  }


  render() {
    const { quizname } = this.props;
    const { result } = this.state;
    const count = Number(localStorage.getItem('LScount'));

    return (
      result ?
        <div className="App">Result</div>
        : <div className="App">
          <h1>{quizname[count].name}</h1>
          <h3>Question {count + 1} of {quizname.length}</h3>
          <h2>{quizname[count].question}</h2>
          {
            quizname[count].answers.map((item) =>
              <div>
                <label>
                  <input type="radio" name="Quiz" onChange={this.handleRadioChange} value={item}/>
                  {item}</label>
              </div>
            )
          }
          <button onClick={_ => {
            if (count == quizname.length - 1) {
              //debugger
              this.setState({ result: true })
            } else {
              console.log('hello', count);
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