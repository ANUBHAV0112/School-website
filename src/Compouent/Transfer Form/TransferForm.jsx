import React, { Component } from 'react';
import './TransferForm.css';

export default class TransferForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      studentId: '',
      studentClass: '',
      dob: '',
      presentSchool: '',
      emailAddress: '',
      mobileNo: '',
      reasonForTransfer: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(this.state);
  };

  render() {
    return (
      <>
      <div className='a1'></div>
      <div className="transfer-form-container">
        <h2>Transfer Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Student ID"
              name="studentId"
              value={this.state.studentId}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Student Class"
              name="studentClass"
              value={this.state.studentClass}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control"
              placeholder="Date of Birth"
              name="dob"
              value={this.state.dob}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Present School"
              name="presentSchool"
              value={this.state.presentSchool}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              name="emailAddress"
              value={this.state.emailAddress}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              className="form-control"
              placeholder="Mobile Number"
              name="mobileNo"
              value={this.state.mobileNo}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Reason for Transfer"
              name="reasonForTransfer"
              value={this.state.reasonForTransfer}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      
      </>
    );
  }
}
