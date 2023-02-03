import './App.css';
import {ChatPage, ChatRoomSelect, HomePage} from "./pages";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Navbar} from "./components";
import {userLoginContext} from "./contexts/userLoginContext";
import {useState} from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function App() {

    const [isLogin, setIsLogin] = useState(cookies.get("auth-token"));

  return (
    <BrowserRouter>
        <userLoginContext.Provider value={{isLogin, setIsLogin}}>
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route path="/" exact element={<HomePage />} />
                    <Route path="/auth" exact element={<HomePage />} />
                    <Route path="/rooms" element={<ChatRoomSelect />} />
                    <Route path="/chat/:roomName" element={<ChatPage />} />
                </Routes>
            </div>
        </userLoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;
