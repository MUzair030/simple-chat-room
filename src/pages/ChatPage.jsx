import {Box, Button, Stack, IconButton} from "@mui/material";
import {Textarea} from "@mui/joy";
import SendIcon from '@mui/icons-material/Send';
import {useParams} from "react-router-dom";
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import {useState, useContext, useEffect} from "react";
import {addDoc, collection, serverTimestamp} from "firebase/firestore";
import {app, db, auth} from "../firebase-config";
import {MessageFeed} from "../components";
import {userLoginContext} from "../contexts/userLoginContext";
import {useNavigate} from "react-router-dom";

const ChatPage = (props) => {

    const {roomName} = useParams();
    const navigate = useNavigate();
    let messageRef = collection(db, roomName);

    const [newMsg, setNewMsg] = useState("");
    const {isLogin} = useContext(userLoginContext);

    useEffect(()=>{
        if(!isLogin){
            navigate(`/auth`);
        }
    }, [isLogin]);
    const handleSendMessage = async (e) => {
        try{
            // if(newMsg !== "" && newMsg !== '\n' && newMsg !== '\n\n' && newMsg !== " " && newMsg !== null){
            if(newMsg !== ""){
                await addDoc(messageRef, {
                    text: newMsg,
                    user: auth.currentUser.email,
                    createdAt: new Date()
                });
            }
            setNewMsg("");
        }
        catch (e) {
            console.error(e)
        }
    }

    return(
        <div style={{
            width:"100%",
            position:"absolute",
            top:"50%",
            left:"50%",
            transform:"translate(-50%, -50%)"

        }}>
            <Box
                sx={{borderRadius:"10px", width:"900px", height:"600px",
                    textAlign:"center", margin:"auto", background:"white"}}>
                <Stack
                    direction="column">
                    <h2>#{roomName}</h2>
                    <div>
                        <hr/>
                    </div>

                    {/*messages area*/}
                    <MessageFeed roomName={roomName} />

                    {/*type new message area*/}
                    <Stack
                        p={2}
                        direction="row">
                        <IconButton>
                            <EmojiEmotionsOutlinedIcon />
                        </IconButton>

                        <Textarea
                            sx={{borderRadius:"50px", width:"800px"}}
                            placeholder="Type Something..."
                            onChange={(e)=>setNewMsg(e.target.value)}
                            value={newMsg}
                            />
                        <IconButton
                            onClick={handleSendMessage} >
                            <SendIcon />
                        </IconButton>
                    </Stack>

                </Stack>
            </Box>
        </div>
    );
}

export default ChatPage;