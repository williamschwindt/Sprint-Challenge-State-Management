import React, { useState } from "react";
import "./App.css";
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';
import { Smurfs } from '../components/Smurfs';

const app = ({ getSmurfs, smurfDetails, isFetching, error}) => {
  const [ smurf, setSmurf ] = useState({
    name: '',
    age: null,
    height: ''
  });

  if (isFetching) {
    return <h2>Finding The Smurfs</h2>
  }

  else if (error !== '') {
    return <h2>We Couldn't Find The Smurfs, Try Again?</h2>
  }

  return (
    <div>
      <Smurfs />
      <button onClick={getSmurfs}>See The Smurfs</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    smurfDetails: state.smurfDetails,
    isFetching: state.isFetching,
    error: state.error
  }

}

export default App;
