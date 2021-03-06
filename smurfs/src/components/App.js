import React from "react";
import "./App.css";
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';
import SmurfForm from './SmurfForm';

const App = ({ getSmurfs, smurfDetails, isFetching, error}) => {

  if (isFetching) {
    return <h2>Finding The Smurfs</h2>
  }

  else if (error !== '') {
    return <h2>We Couldn't Find The Smurfs, Try Again?</h2>
  }

  return (
    <div>
      <button onClick={getSmurfs}>See The Smurfs</button>
      {smurfDetails.map(smurf => {
        return (
          <div>
            <h2>{smurf.name}</h2>
            <h2>Age: {smurf.age}</h2>
            <h2>Height: {smurf.height}</h2>
          </div>
        )
      })}
      <SmurfForm />
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

export default connect(mapStateToProps, { getSmurfs })(App);
