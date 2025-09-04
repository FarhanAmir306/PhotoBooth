import { actions } from "../actions";



const initialState = {
    user:null,
    posts:[],
    loading:false,
    error:null

}

const ProfileReducer=(state,action)=>{
     switch (action.type) {

        case actions.profile.PROFILE_FETCHING: {
            return {
                ...state,
                loading:true,
            }
        }

        case actions.profile.PROFILE_FETCHED:{
            return {
                ...state,
                loading:false,
                user:action.data.user,
                posts:action.data.posts,
            }
        }
            
        default:
            return state;
     }
}

export {ProfileReducer,initialState}