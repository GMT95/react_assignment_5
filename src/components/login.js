import React, { Component } from 'react';
import '../App.css';

class Login extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { formSubmit, emailChange, passChange } = this.props
		return (
			<div style={{marginLeft: 'auto',marginRight: 'auto', width: '20%'}}>
				<h1>Quiz App</h1>
				<form onSubmit={formSubmit}>
  				<div className="form-group">
						<input type="email" className="form-control" onChange={emailChange} placeholder="johndoe@w3.com"/>
					</div>
					<div class="form-group">
						<input type="password" className="form-control" onChange={passChange} placeholder="12345"/>
					</div>
  				<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		);
	}
}

export default Login;