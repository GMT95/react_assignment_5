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
  				<div class="form-group">
						<input type="email" class="form-control" onChange={emailChange} placeholder="Enter email"/>
					</div>
					<div class="form-group">
						<input type="password" class="form-control" onChange={passChange} placeholder="Password"/>
					</div>
  				<button type="submit" class="btn btn-primary">Submit</button>
				</form>
			</div>
		);
	}
}

export default Login;