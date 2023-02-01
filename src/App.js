import './App.css';
import {ChatPage, ChatRoomSelect, HomePage} from "./pages";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Navbar} from "./components";

function App() {

  return (
    <BrowserRouter>
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/auth" exact element={<HomePage />} />
                <Route path="/rooms" element={<ChatRoomSelect />} />
                <Route path="/chat/:roomName" element={<ChatPage />} />
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
