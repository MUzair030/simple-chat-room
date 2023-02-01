import {Button, Box} from "@mui/material";
import Grid from '@mui/joy/Grid';

const Navbar = () => {


    return(
        <Box
            sx={{border:"none",
                background: "linear-gradient(0deg, rgba(34,195,142,1) 0%, rgba(253,187,45,1) 100%)"}}>
            <Grid container  sx={{alignItems:"center"}}>
                <Grid xs={3}>

                </Grid>
                <Grid xs={6}
                      sx={{textAlign:"center", color:"white"}}>
                    <h2>Simple ChatRoom App</h2>
                </Grid>
                {/*<Grid xs={3}*/}
                {/*      pr={5}*/}
                {/*      sx={{textAlign:"right"}}>*/}
                {/*    <Button>Login</Button>*/}
                {/*    <Button>Signup</Button>*/}
                {/*</Grid>*/}

            </Grid>
        </Box>
    );
}

export default Navbar;