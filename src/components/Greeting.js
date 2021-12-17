import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

const GET_MESSAGES_REQUEST = 'GET_MESSAGES_REQUEST';
const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';

function getMessages() {
  console.log("Action!");
  return async dispatch => {
    dispatch({ type: GET_MESSAGES_REQUEST });
    try {
      const response = await fetch(`http://localhost:5000/api/v1/random_message`);
      const json = await response.json();
      console.log("JSON: " + json);
      return dispatch(getMessagesSuccess(json));
    } catch (error) {
      return console.log(error);
    }    
  };
}

export function getMessagesSuccess(json) {
  return {
    type: GET_MESSAGES_SUCCESS,
    json
  }
}

class Greeting extends React.Component{
  render() {

    const { messages } = this.props;
    console.log(messages);

    return (
      <div className="container">
        <h1>Greetings!</h1> 
        <div className="message">
          <p>{messages}</p>
        </div>
        <button className="btn" onClick={() => this.props.getMessages()} >Click me!</button>
       
      </div>
    );
  }
}

const structuredSelector = createStructuredSelector({
  messages: state => state.messages,
});

const mapDispatchToProps = { getMessages }

export default connect(structuredSelector, mapDispatchToProps)(Greeting);

