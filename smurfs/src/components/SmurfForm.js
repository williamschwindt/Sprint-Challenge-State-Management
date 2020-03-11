import React, { useState } from "react";
import { postSmurf } from '../actions/index';
import { connect } from "react-redux";

const SmurfForm = ({ postSmurf, isSetting, error }) => {
    const [ smurf, setSmurf ] = useState({
        name: '',
        age: '',
        height: ''
      });

      const changeHandler = (e) => {
        setSmurf({ ...smurf, [e.target.name]: e.target.value });
      }

      const submitHandler = () => {
        postSmurf(smurf);
      }

      if (isSetting) {
        return <h2>Setting Your Smurf</h2>
      }
    
      else if (error !== '') {
        return <h2>We Couldn't Set Your Smurf, Try Again?</h2>
      }

    return (
        <div>
            <input placeholder="name" name="name" value={smurf.name} onChange={changeHandler} />
            <input placeholder="age" name="age" value={smurf.age} onChange={changeHandler} />
            <input placeholder="height" name="height" value={smurf.height} onChange={changeHandler} />
            <button onClick={submitHandler} >Add Smurf</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { postSmurf })(SmurfForm);

