import Counters from './components/counters';
import './App.css';
import NavBar from './components/navBar';
import React, { Component } from 'react';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({counters});
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  }
  totalNo = () =>{
    let count = 0;
    const totalNo = this.state.counters.map(c => {count += c.value});
    return count;
}
  
  render() {
  return (
   <>
   <NavBar 
    totolCounters = {this.state.counters.filter(c => c.value  > 0).length}
    totalNo = {this.totalNo()}
   />
   <main className='container'>
    <Counters 
    onReset = {this.handleReset}
    onIncrement = {this.handleIncrement}
    onDelete = {this.handleDelete}
    counters = {this.state.counters}
    />
   </main>
    </>
  );
  }
}

export default App;
