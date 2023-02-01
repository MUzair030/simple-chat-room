import {Box, Button, Stack, IconButton} from "@mui/material";
import {Textarea} from "@mui/joy";
import {Firestore} from "firebase/firestore";
import SendIcon from '@mui/icons-material/Send';
import {useParams} from "react-router-dom";

const ChatPage = (props) => {

    const {roomName} = useParams();


    return(
        <Box
            sx={{borderRadius:"10px", width:"900px", height:"600px",
                textAlign:"center", margin:"auto", background:"white"}}>
            <Stack
                direction="column">
                <h2>#{roomName}</h2>
                <Stack
                    direction="row">
                    <Textarea
                        sx={{borderRadius:"50px", width:"800px"}}
                        placeholder="Type Something..."/>
                    <IconButton
                        type="success"
                        sx={{borderRadius:"30px"}}>
                        <SendIcon />
                    </IconButton>
                </Stack>

            </Stack>
        </Box>
    );
}

export default ChatPage;