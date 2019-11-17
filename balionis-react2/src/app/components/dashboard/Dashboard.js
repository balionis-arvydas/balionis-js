import React from 'react';
import './Dashboard.css';
import Adder from './components/adder/Adder';
import Entry from './components/entry/Entry';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    };
    this.onAdd = this.onAdd.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  onAdd(entry) {
    const found = this.state.entries.some(x => x === entry);
    if (!found) {
      this.state.entries.push(entry);
      this.setState({
        entries: this.state.entries
      });    
    }
  }

  onRemove(entry) {
    const entries = this.state.entries.filter(x => x !== entry);
    this.setState({
      entries: entries
    });    
  }

  render() {

    const entries = this.state.entries.map((x, i) => {
      return (
        <Entry 
          key={i}
          value={x}
          onRemove={this.onRemove}
        />
      )
    });

    return (
      <div className="dashboard">        
        <div>
          <Adder onAdd={this.onAdd}/>
        </div>          
        <div>
          {entries}
        </div>          
      </div>
    );  
  }
}

export default Dashboard;
