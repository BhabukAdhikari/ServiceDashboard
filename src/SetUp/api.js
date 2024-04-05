import { Axios } from "axios";

export const api= Axios.create({
    Headers: {
        "Content-Type": "application/json" , 
         
    }
})