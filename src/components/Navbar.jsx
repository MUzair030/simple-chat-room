import {Button, Box} from "@mui/material";
import Grid from '@mui/joy/Grid';
import {useContext} from 'react';
import {userLoginContext} from "../contexts/userLoginContext";
import {signOut} from "firebase/auth";
import Cookies from "universal-cookie";
import {useNavigate} from "react-router-dom";
import {auth} from "../firebase-config";

const cookies = new Cookies();


const Navbar = () => {

    const {isLogin, setIsLogin} = useContext(userLoginContext);
    const navigate = useNavigate();

    const handleSignout = async ()=>{
        await signOut(auth);
        cookies.remove("auth-token");
        setIsLogin(false);
        navigate('/auth');
    }

    return(
        <Box
            sx={{border:"none",
                // background: "linear-gradient(236deg, rgba(170,255,227,1) 0%, rgba(25,183,245,1) 100%)"
                background: "#27BEF4"
            }}>
            <Grid container  sx={{alignItems:"center"}}>
                <Grid xs={3}>

                </Grid>
                <Grid xs={6}
                      sx={{textAlign:"center", color:"white"}}>
                    <h2>Simple ChatRoom App</h2>
                </Grid>
                {   isLogin &&
                    <Grid xs={3}
                          pr={5}
                          sx={{textAlign:"right"}}>
                        {/*<Button>Login</Button>*/}
                        <Button onClick={handleSignout}>LogOut</Button>
                    </Grid>
                }

            </Grid>
        </Box>
    );
}

export default Navbar;