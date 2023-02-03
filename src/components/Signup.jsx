import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase-config"
import {useState} from "react";
import {Box, Stack, Button} from "@mui/material";
import {Input} from '@mui/joy';
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Signup = (props) => {
    const {handleSignin, handleSetIsLogin} = props;

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    const handleEmailPasswordSignUp = async (e) =>{
        e.preventDefault();
        try{
            if(password === confirmPassword){
                const data = await createUserWithEmailAndPassword(auth, email, password)
                console.log(data)
                cookies.set("auth-token", data.user.refreshToken);
                handleSetIsLogin(true);
            }
            else alert("Password didn't match");
        }
        catch (e) {
            console.error(e)
        }
    }

    return (
      <Box
          p={3}
          sx={{border: "none", borderRadius:"10px",
              background:"white",
              width:"350px", height:"400px", margin:"auto", textAlign:"center"}}>
              <h3> Create a new Account</h3>
              <form
                  onSubmit={handleEmailPasswordSignUp}>
                  <Stack
                      direction="column">
                      <div
                          style={{textAlign:"left"}}>
                          <label>Email:</label>
                          <Input
                              onChange={(e)=>setEmail(e.target.value)}
                              placeholder="Type your Email"
                              required
                              sx={{ mb: 1 }}
                          />
                      </div>
                      <div
                          style={{textAlign:"left"}}>
                          <label>Password:</label>
                          <Input
                              onChange={(e)=>setPassword(e.target.value)}
                              placeholder="Type a Password"
                              required
                              sx={{ mb: 1 }} />
                      </div>
                      <div
                          style={{textAlign:"left"}}>
                          <label>Confirm Password:</label>
                          <Input
                              onChange={(e)=>setConfirmPassword(e.target.value)}
                              placeholder="Confirm Password"
                              required
                              sx={{ mb: 1 }} />
                      </div>

                  <Button type="submit"
                          sx={{color:"white", background:"blue", marginTop:"15px",
                              '&:hover':{color:"blue", background:"lightblue"}}}>
                      Create Account</Button>
                  {/*<br/>*/}
                  <span>Already have an account?
                  <Button onClick={handleSignin}>Signin</Button>
              </span>
              </Stack>
              </form>

      </Box>
    );
}

export default Signup;