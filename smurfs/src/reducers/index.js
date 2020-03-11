import { FETCHING_SMURFS_START, FETCHING_SMURFS_SUCCESS, FETCHING_SMURFS_FAILURE, SETTING_SMURFS_START } from '../actions/index';

const initialState = {
    smurfDetails: [],
    isFetching: false,
    isSetting: false,
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
        case SETTING_SMURFS_START :
            return {
                ...state,
                isSetting: true
            }
        default :
            return state;
    }
}