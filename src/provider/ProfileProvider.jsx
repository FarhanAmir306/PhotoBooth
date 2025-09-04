
import { ProfileContext } from "../context";
import {useReducer} from 'react';
import { ProfileReducer,initialState } from "../reducer/ProfileReducer";



export default function ProfileProvider({children}){
    const [state,dispatch] = useReducer(ProfileReducer,initialState)

    return (
        <ProfileContext.Provider value={{state,dispatch}}>
            {children}
        </ProfileContext.Provider>
    );
}




