import React from 'react';
// import PropTypes from 'prop-types';


class App extends React.Component {


  render() {
    let text = this.props.txt;

    return (
      <div>
        <h1> {text} < /h1>
        <h5><em>"Every action has an equal and opp react-ion" </em> - Issac Newton</h5>
      </div>
    ) ;

  }
}


export default App
