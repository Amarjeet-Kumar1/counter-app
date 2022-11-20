import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value
  //   tags: ["tag1", "tag2", "tag3"]
  // };
  // constructor(){
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // renderTag() {
  //   if (this.props.counter.tags.length === 0) return <p>There are no tags!</p>;

  //   return (
  //     <>
  //     <ul>{this.props.counter.tags.map((tag) => (<li key={tag}>{tag}</li>))}</ul>
  //     </>

  //   );
  // }

  // handleIncrement = () =>{
    
  //   this.setState({value: this.props.counter.value + 1});
  // }

  render() {
    
    return( 
    <div>
        <span className={this.getBadgeClasses()}>{this.formatvalue()}</span>
        <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
        <button onClick={ () => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
         {/* {this.props.counter.tags.length === 0 && 'Please Create a new tag!'}
        {this.renderTag()}  */}
    </div>);
  }

  getBadgeClasses(){
    let classes = 'badge m-2 bg-';
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatvalue(){
    const {value} = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
