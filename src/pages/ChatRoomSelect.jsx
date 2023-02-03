import {Box, Button, Stack, Grid} from "@mui/material";
import {Input} from "@mui/joy";
import {useState} from "react";

const ChatRoomSelect = (props) => {
    const {handleSetChatRoom} = props;

    const [roomName, setRoomName] = useState(null);

    const handleSetChatRoomName= (e) =>{
        e.preventDefault();
        handleSetChatRoom(roomName);
    }

    return(
        <div style={{width:"100%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        }}>
            <Box
                p={3}
                sx={{width:"300px", height:"180px", background:"white", borderRadius:"10px", margin:"auto"}}>
                <form>
                    <Stack
                        direction="column"
                        sx={{textAlign:"center"}}>
                        <h3>Enter Room Name</h3>
                        <Input required
                               onChange={(e)=>setRoomName(e.target.value)}
                               placeholder="eg. gaming"/>
                        <br/>
                        <div style={{textAlign:"center"}}>
                            <Button type="submit"
                                    onClick={handleSetChatRoomName}
                                    sx={{width:"50%",
                                        color:"white", background:"blue",
                                        '&:hover':{color:"blue", background:"lightblue"}}}>
                                Enter Room
                            </Button>
                        </div>
                    </Stack>
                </form>
            </Box>
        </div>
     );
}

export default ChatRoomSelect;