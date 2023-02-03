import {Box, Button, Stack, InputLabel, MenuItem, FormControl, Select, Grid} from "@mui/material";
import {Input} from "@mui/joy";
import {useState} from "react";

const ChatRoomSelect = (props) => {
    const {handleSetChatRoom} = props;

    const [roomName, setRoomName] = useState(null);
    const [age, setAge] = useState('');

    const handleSetChatRoomName= (e) =>{
        e.preventDefault();
        handleSetChatRoom(roomName);
    };

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return(
        <div style={{width:"100%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        }}>
            <Box
                p={3}
                sx={{width:"300px", height:"360px", background:"white", borderRadius:"10px", margin:"auto"}}>
                <div style={{textAlign: "center"}}>
                    <h3>Select an existing Room</h3>
                </div>
                <FormControl sx={{ minWidth: 300 }} size="small">
                    <InputLabel id="demo-select-small">Rooms</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>gaming</MenuItem>
                        <MenuItem value={20}>intro</MenuItem>
                     </Select>
                </FormControl>


                <form>
                    <Stack
                        direction="column"
                        sx={{textAlign:"center"}}>
                        <br/>

                        <Grid container sx={{alignItems:"center"}}>
                            <Grid xs={5}>
                                <hr/>
                            </Grid>
                            <Grid xs={2}>
                                <p>or</p>
                            </Grid>
                            <Grid xs={5}>
                                <hr/>
                            </Grid>
                        </Grid>

                        <h3>Create a new Room</h3>
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