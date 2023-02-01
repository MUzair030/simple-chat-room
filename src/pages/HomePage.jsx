// import './App.css';
import {AuthPage, ChatPage, ChatRoomSelect} from "./index";
import {Navbar} from "../components";
import {useEffect, useState} from "react";
import Cookies from "universal-cookie";
import {useNavigate} from "react-router-dom";

const cookies = new Cookies();

function HomePage() {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(cookies.get("auth-token"));

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
