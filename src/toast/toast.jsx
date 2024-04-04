import { Snackbar } from "@mui/material";

export const Toast = () => {
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            onDurationChange={10000}
            message="Login Success"
            ContentProps={{
                sx: {
                    backgroundColor: 'success.main',
                },
            }}
        />

    );
};
