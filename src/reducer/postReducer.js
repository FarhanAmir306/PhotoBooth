import { actions } from "../actions";



const initialState = {
    post:[
        {
            name:'farhan',
            email:'fa@gmail.com'
        },{
            name:'amir',
            email:'amir@gmail.com'
        }
    ],
    loading:false,
    error:null,
}

const PostReducer = (state,action) => {
    
    switch (action.type) {

        case actions.post.POST_FETCHING:{
            return {
                ...state,
                loading:true,
            }
        }
        
        case action.post.POST_FETCHED:{
            return {
                ...state,
                loading:false,
                post:action.data,

            }
        }
        
        case actions.post.POST_ERROR:{
            return {
                ...state,
                loading:false,
                error:action.error
            }
        }
            
        
    
        default:
            break;
    }
}

export {initialState,PostReducer}