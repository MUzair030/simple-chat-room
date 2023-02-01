import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase-config"
import {useState} from "react";

const Signup = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleEmailPasswordSignUp = async (e) =>{
        e.preventDefault();
        try{
            const data = await createUserWithEmailAndPassword(auth, email, password)
            console.log(data)
        }
        catch (e) {
            console.error(e)
        }
    }

    return (
      <div>
          <form onSubmit={handleEmailPasswordSignUp}>
              <label>Enter Email:</label>
              <input onChange={(e)=>setEmail(e.target.value)}/>
              <label>Enter Password: </label>
              <input onChange={(e)=>setPassword(e.target.value)}/>
              <input type="submit"/>
          </form>
      </div>
    );
}

export default Signup;