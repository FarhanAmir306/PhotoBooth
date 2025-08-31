

import { PostContext } from "../context"
import {useContext} from 'react'


export const usePost = () => {
    return useContext(PostContext)
}