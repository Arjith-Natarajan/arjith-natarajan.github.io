import React from 'react';
import PropTypes from 'prop-types';

// There are 2 methods to create a Component

// using a class to create a Component can have State
class App extends React.Component {

  // To have states we need to intialise a constructor
  // Used to setup initial States for components
  // --------
  constructor(){
    super(); // To get context for this
    this.state ={
      content : "Lorem ipsum dolores... (placeholder for centuries!)",
      currentEvent : "---",
      a : " "
    };
    this.update_state = this.update_state.bind(this);
  }


  // here we define a custom method to demo the working of states
  // create a function that takes e as parameter
  // --------
  update( e ){
    this.setState({content : e.target.value});
  }

  update_state( e ){
    this.setState({currentEvent: e.type});
  }

// Set and refer to separate instances using ref attritbutes
// ref returns the node that we are referencing: in this particular case its the input element
  update_text(){
    this.setState({
      a : this.a.refs.input.value,
      b : this.refs.b.value
     });
  }

  // must have method to render react components
  render() {
    // Using JSX -> Html like syntax to create custom components
    // ---------------------------------------------

    // To return adjacent elements in render wrap them using parent tag
    // ---------------------------------------------

    // Set the property name to be passed into particular component
    // or part of it
    // Syntax : this.props.your_property_identifier

    // Achieve same result of property id by creating alias
    let text = this.props.txt;

    return (
      <div>
        <h1> {text}  {this.props.cat} < /h1>
        <h5><em>"Every action has an equal and opp react-ion" </em> - Issac Newton</h5>
        <Title no={1} txt="Type to see Magic"/>
        <h5>{this.state.content} </h5>
        <Widget update={this.update.bind(this)}/>
        <Button>i <Hearts/> React</Button>
        <Title no={2} txt="Interact to Trigger synthetic Events"/>
        <textarea
          onFocus = {this.update_state}
          onBlur = {this.update_state}
          onDoubleClick = {this.update_state}
          onCopy = {this.update_state}
          onCut = {this.update_state}
          onPaste = {this.update_state}
          onKeyPress = {this.update_state}
          onTouchStart = {this.update_state}
          onTouchMove = {this.update_state}
          onTouchEnd = {this.update_state}
          cols="30"
          rows="10" />
        <h5>{this.state.currentEvent}</h5>
        <Title no={3} txt="Two Input Fields"/>
        <Input
          ref={component => this.a = component}
          update_text={this.update_text.bind(this)}/> {this.state.a}
        <hr/>
        <input
          ref="b"
          type="text"
          onChange={this.update_text.bind(this)}/> {this.state.b}


      </div>
    ) ;
    // Binding the input element with state of text
    // onChange is an eventhandler where we bind it to call update function

    // ---------------------------------------------
    // Javascript way of creating components
    // a function with 3 args
    // first one specifies name of the Component
    // if starting with Caps it means it is a custom React Component
    // else it is standard Html Component
    // next is null  : which is for props
    // last arg signifies  inner Html or inner Text content of Component
    // It can also be another Component
    // ---------------------------------------------
    // return React.createElement('h1',null,'Arjith Natarajan Rocks');
    // ---------------------------------------------
  }
}

// Datatype of properties can be specified as key-value pairs in this spl Obj
App.propTypes = {
  txt : PropTypes.string ,
  cat : PropTypes.number.isRequired
}

// default value of Proper to be passed in
App.defaultProps = {
  txt : "Sometimes default/fallback values can be defined in here",
  cat : 1
}

// Stateless way of defining a Component
// Simple function that returns JSX

// Use this to define Child components that can be used within other React Components
const Widget = (props) =>
  <input type="text" onChange={props.update}/>

// pass values through properties from component for changing state

const Button = (props) =>
  <button>{props.children}</button>
  // props.children is used to access the inner contents of a Component
  // It also returns nested Components

const Hearts = () =>
  <span>&hearts;</span>

// Custom Validation on Props types
const Title = (props) =>
  <h3>App{props.no}: {props.txt} </h3>

Title.propTypes ={
  txt(props, propName, component){
    // Custom written isRequired validation
    if(!(propName in props)){
      return new Error(`Required Attribute: ${propName} is missing`);
    }
    if(props[propName].length < 6){
      return new Error(`Insufficient Length: ${propName} is too small`);
    }
  }
}

class Input extends React.Component {
  render(){
    return <input ref="input" type="text" onChange={this.props.update_text}/>
  }
}

export default App
