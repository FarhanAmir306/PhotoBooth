import { PostContext } from "../context";
import {useReducer} from 'react'
import { initialState,PostReducer } from "../reducer/postReducer";

export default function PostProvider({children}){
    const [state,dispatch] = useReducer(PostReducer,initialState)
    
    return (
        <PostContext.Provider value={{state,dispatch}}>
            {children}
        </PostContext.Provider>
    );
}