import { FETCHING_SMURFS_START, FETCHING_SMURFS_SUCCESS, FETCHING_SMURFS_FAILURE } from '../actions/index';

const initialState = {
    smurfDetails: {},
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_SMURFS_START :
            return {
                ...state,
                isFetching: true
            }
        case FETCHING_SMURFS_SUCCESS : 
            return {
                ...state,
                smurfDetails: action.payload,
                isFetching: false
            }
        case FETCHING_SMURFS_FAILURE : 
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        default :
            return state;
    }
}