import {auth, googleProvider} from "../firebase-config";
import {signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import {useState} from "react";
import Cookies from 'universal-cookie';
import {Box, Stack, Button} from "@mui/material";
import {Input} from '@mui/joy';

const cookies = new Cookies();

const Signin = (props) => {

    const {handleSignup, handleSetIsLogin} = props;
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleGoogleSignIn = async () =>{
        try{
            const result = await signInWithPopup(auth, googleProvider);
            handleSetIsLogin(true);
            cookies.set("auth-token", result.user.refreshToken);
        }
        catch (e) {
            console.error(e);
        }
    }

    const handleEmailPasswordSignIn = async (e) => {
        e.preventDefault();
        try{
            const result = await signInWithEmailAndPassword(auth, email, password);
            cookies.set("auth-token", result.user.refreshToken);
            handleSetIsLogin(true);
        }
        catch (e) {
            console.error(e)
        }
    }



    return(
        <Box
            p={3}
            sx={{border: "none", borderRadius:"10px",
                backgroundColor:"white", verticalAlign:"middle",
                width:"350px", height:"400px", margin:"auto", textAlign:"center"}}>

            <h3>Sign in your Account</h3>
            <form
                onSubmit={handleEmailPasswordSignIn}>
                <Stack
                    direction="column">
                    <div
                        style={{textAlign:"left"}}>
                        <label>Email:</label>
                        <Input
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder="Your Email"
                            required
                            sx={{ mb: 1 }}
                        />
                    </div>
                    <div
                        style={{textAlign:"left"}}>
                        <label>Password:</label>
                        <Input
                            onChange={(e)=>setPassword(e.target.value)}
                            placeholder="Your Password"
                            required
                            sx={{ mb: 1 }} />
                    </div>
                    <Button type="submit"
                            sx={{color:"white", background:"blue", '&:hover':{color:"blue", background:"lightblue"}}}>
                        Login</Button>
                </Stack>
            </form>
              <Button onClick={handleGoogleSignIn}
              sx={{width:"100%",
                  marginTop:"5px",
                  color:"white", background:"red",
                  '&:hover':{color:"red", background:"light-red"}}}>
                  Signin with Google
              </Button>

            <br/>
            <span>
                Don't have an account?
                <Button onClick={handleSignup}>
                    Create Account
                </Button>
            </span>
      </Box>
    );
}

export default Signin;