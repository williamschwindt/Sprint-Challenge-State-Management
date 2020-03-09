import axios from 'axios';

export const FETCHING_SMURFS_START = 'FETCHING_SMURFS_START';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE';
export const SETTING_SMURFS_START = 'SETTING_SMURFS_START';

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCHING_SMURFS_START });

    axios
    .get("http://localhost:3333/smurfs")
    .then(res=> {
        console.log(res);
        dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: FETCHING_SMURFS_FAILURE, payload: err});
    })
}

export const postSmurf = (smurf) => dispatch => {
    dispatch({ type: SETTING_SMURFS_START });

    axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res=> {
        console.log(res);
        dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: FETCHING_SMURFS_FAILURE, payload: err});
    })
}
