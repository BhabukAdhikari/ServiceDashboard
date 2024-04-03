import { Snackbar } from "@mui/material"
    
export default function Toast() {
    return (
        <Snackbar
            autoHideDuration={6000}
            message="Login Success"
            action={action}
            color="success"
        
        />
    )
}