import './App.css';
import {AuthPage, ChatPage, ChatRoomSelect} from "./pages";
import {Navbar} from "./components";
import {useEffect, useState} from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function App() {
    const [isLogin, setIsLogin] = useState(cookies.get("auth-token"));
    const [selectedRoom, setSelectedRoom] = useState(null);

    const handleSetIsLogin = (val)=>{
        setIsLogin(val);
    }
    const handleSetChatRoom = (roomName) => {
        setSelectedRoom(roomName);
    }


  return (
    <div className="App">
        <Navbar />
        {
            isLogin?
                    selectedRoom? <ChatPage selectedRoom={selectedRoom} />
                    :
                        <ChatRoomSelect handleSetChatRoom={handleSetChatRoom} />
            :
                <AuthPage handleSetIsLogin={handleSetIsLogin} />
        }

    </div>
  );
}

export default App;
