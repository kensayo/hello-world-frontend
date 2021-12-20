import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

const GET_MESSAGES_REQUEST = 'GET_MESSAGES_REQUEST';
const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';

export function getMessagesSuccess(json) {
  return {
    type: GET_MESSAGES_SUCCESS,
    json,
  };
}

function getMessages() {
  return async (dispatch) => {
    dispatch({ type: GET_MESSAGES_REQUEST });
    try {
      const response = await fetch('http://localhost:5000/api/v1/random_message');
      const json = await response.json();
      return dispatch(getMessagesSuccess(json));
    } catch (error) {
      return console.log(error);
    }
  };
}

// eslint-disable-next-line react/prefer-stateless-function
class Greeting extends React.Component {
  render() {
    const { messages, getMessages } = this.props;

    return (
      <div className="container">
        <h1>Greetings!</h1>
        <div className="message">
          <p>{messages}</p>
        </div>
        <button type="button" className="btn" onClick={() => getMessages()}>Click me!</button>

      </div>
    );
  }
}

const structuredSelector = createStructuredSelector({
  messages: (state) => state.messages,
});

const mapDispatchToProps = { getMessages };

Greeting.propTypes = {
  messages: PropTypes.arrayOf.isRequired,
  getMessages: PropTypes.func.isRequired,
};

export default connect(structuredSelector, mapDispatchToProps)(Greeting);
