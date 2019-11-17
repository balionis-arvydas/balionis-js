import React from 'react';
import './Entry.css';

class Entry extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(event) {
    event.preventDefault();
    this.props.onRemove(this.props.value);
  }

  render() {
    return (
      <div className="entry" onClick={this.handleRemove}>
          {this.props.value}
      </div>
    );  
  }
}

export default Entry;
