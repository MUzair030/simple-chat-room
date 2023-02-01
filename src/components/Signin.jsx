import {auth, googleProvider} from "../firebase-config";
import {signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import {useState} from "react";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const Signin = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleGoogleSignIn = async () =>{
        try{
            const result = await signInWithPopup(auth, googleProvider);
            cookies.set("auth-token", result.user.refreshToken);
        }
        catch (e) {
            console.error(e)
        }
    }

    const handleEmailPasswordSignIn = async (e) => {
        e.preventDefault();
        try{
            const result = await signInWithEmailAndPassword(auth, email, password);
            cookies.set("auth-token", result.user.refreshToken);
        }
        catch (e) {
            console.error(e)
        }
    }

    return(
      <div>
          <form onSubmit={handleEmailPasswordSignIn}>
              <label>Enter Email:</label>
              <input onChange={(e)=>setEmail(e.target.value)}/>
              <label>Enter Password: </label>
              <input onChange={(e)=>setPassword(e.target.value)}/>
              <input type="submit"/>
          </form>
          <button onClick={handleGoogleSignIn}>
              Signin with Google
          </button>
      </div>
    );
}

export default Signin;