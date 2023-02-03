// import './App.css';
import {AuthPage, ChatPage, ChatRoomSelect} from "./index";
// import {Navbar} from "../components";
import {useEffect, useContext} from "react";
import Cookies from "universal-cookie";
import {useNavigate} from "react-router-dom";
import {userLoginContext} from "../contexts/userLoginContext";

function HomePage() {
    const navigate = useNavigate();
    const {isLogin, setIsLogin} = useContext(userLoginContext);

    const handleSetIsLogin = (val)=>{
        setIsLogin(val);
    }
    const handleSetChatRoom = (roomName) => {
        console.log(roomName)
        navigate(`/chat/${roomName}`);
    }


  return (
    <div>
        {
            isLogin?
                <ChatRoomSelect handleSetChatRoom={handleSetChatRoom} />
            :
                <AuthPage handleSetIsLogin={handleSetIsLogin} />
        }

    </div>
  );
}

export default HomePage;
