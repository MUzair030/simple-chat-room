import {AuthPage, ChatRoomSelect} from "./index";
import {useContext} from "react";
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
