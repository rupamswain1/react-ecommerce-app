import UserActionType from './user.type'

const INITIAL_STATE={
    currentUser:null,
}

const userReducer=(state=INITIAL_STATE,action)=>{
        switch(action.type){
            case UserActionType.SIGNIN_SUCCESS:
                return{
                    ...state,
                    currentUser:action.payload,
                    error:null
                };
            case UserActionType.SIGNIN_FAIL:
            case UserActionType.SIGNOUT_FAIL:
                return{
                    ...state,
                    error: action.payload
                };
            case UserActionType.SIGNOUT_SUCCESS:
                return{
                    ...state,
                    currentUser:null,
                    error:null,
                }
            // case UserActionType.SET_CURRENT_USER:
            //     return {
            //         ...state,
            //         currentUser:action.payload
            //     };
            default:
                return state;
        }


};

export default userReducer;