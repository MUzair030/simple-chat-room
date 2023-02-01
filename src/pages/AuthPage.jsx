import {Signin, Signup} from "../components";
import {Box} from "@mui/material";
import {useState} from "react";

const AuthPage = (props) => {
    const {handleSetIsLogin} = props;
    const [signinPage, setSigninPage] = useState(true);

    const handleSignup = () =>{
        setSigninPage(false);
    }
    const handleSignin = () =>{
        setSigninPage(true);
    }

    return(
        <div style={{width:"100%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        }}>
            {
                signinPage ?
                    <Signin handleSetIsLogin={handleSetIsLogin} handleSignup={handleSignup}/> :
                    <Signup handleSetIsLogin={handleSetIsLogin} handleSignin={handleSignin} />
            }
        </div>

    );
}

export default AuthPage;