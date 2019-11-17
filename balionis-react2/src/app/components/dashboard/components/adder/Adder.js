import React from 'react';
import './Adder.css';

class Adder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', disabled: true};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const disabled = value && value.length < 3;
    this.setState({
      value,
      disabled
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAdd(this.state.value);
    this.setState({
      value: '',
      ...this.state
    });    
  }
  
  render() {
    return (
      <div className="adder">
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleSubmit} disabled={this.state.disabled}>Add</button>
      </div>
    );  
  }
}

export default Adder;
