import React, { useState } from "react";
import { postSmurf } from '../actions/index';
import { connect } from "react-redux";

const SmurfForm = ({ postSmurf }) => {
    const [ smurf, setSmurf ] = useState({
        name: '',
        age: '',
        height: ''
      });

      const changeHandler = (e) => {
        setSmurf({ ...smurf, [e.target.name]: e.target.value });
      }

      const submitHandler = () => {
        console.log(smurf);
        postSmurf(smurf);
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

