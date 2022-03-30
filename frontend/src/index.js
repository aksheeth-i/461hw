import React from 'react';
import ReactDOM from 'react-dom';

class SendRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', lastName: ''};
  }
  handleChange = event => {
    this.setState({value: event.target.value});
    fetch("/name/" + event.target.value)
      .then(response => response.json()) //utilize the response.json interface to produce a js object
          .then(data => {
              this.setState({lastName: data.lastName}); console.log(this.state.lastName);
          })
          .catch(error => {
              this.setState({lastName: 'User Not Found'}); console.log(this.state.lastName);
          })
  };
  render() {
    return (
      <div>
        <p>Enter first name.</p>
        <input
          type = "text"
          name = "username"
          value = {this.state.value}
          onChange={this.handleChange}
        />
        <p>{this.state.lastName}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <SendRequest />,
  document.getElementById('root')
);
