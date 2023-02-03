import {darkScrollbar, Stack} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import {collection, getDocs, query, limit, orderBy, onSnapshot} from "firebase/firestore";
import {db, auth} from "../firebase-config";


const MessageFeed = (props) => {
    const {roomName} = props;
    const bottomRef = useRef(null);
    const [messages, setMesages] = useState([]);

    const otherUserMsg = {
        margin: "0",
        marginRight: "auto",
        marginLeft: "0",
    };
    const currentUserMsg = {
        margin: "0",
        marginRight: "0",
        marginLeft: "auto",

    };
    const currentUserFormat = {
        margin: "5px",
        maxWidth:"400px",
        wordWrap: "break-word",
        textAlign:"left",
        borderRadius: "10px 0px 10px 10px",
        backgroundColor:"#27BEF4",
        padding: "2px 10px 2px 10px"
    };
    const otherUserFormat = {
        margin: "5px",
        maxWidth:"400px",
        wordWrap: "break-word",
        textAlign:"left",
        borderRadius: "0px 10px 10px 10px",
        backgroundColor:"gray",
        color:"white",
        padding: "2px 10px 2px 10px"
    };


    const q = query(collection(db, roomName), orderBy("createdAt", "asc"), limit(50))

    const getRoomMessages = async ()=>{
        let msgs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            msgs.push(doc.data());
        });
        return msgs;
    }

    const observer = () => onSnapshot(q, (snapshot)=>{
        let msgs = [];
        snapshot.forEach(
            (s)=> {
                msgs.push(s.data());
            }
        );
        if(JSON.stringify(msgs) !== JSON.stringify(messages)){
            console.log("heree i am")
            setMesages(msgs);
        }

    });

    observer();

    useEffect(()=>{
        bottomRef.current?.scrollIntoView({behavior: 'smooth'});
    },[messages]);

    useEffect(()=>{
        getRoomMessages().then(
            (res)=>{
                setMesages(res);
            }
        )
    }, [roomName]);

    return (


            <Stack

                m={2}
                sx={{height:"380px", border:"none", overflow: "auto"}}>

                {
                    messages.map((msg, index)=> (
                            msg?.user === auth.currentUser.email ?
                            <div key={index} style={currentUserMsg}>
                                <p style={currentUserFormat}>{msg.text}</p>
                            </div>
                        :
                                <div key={index} style={otherUserMsg}>
                                    <p style={otherUserFormat}>{msg.text}</p>
                                </div>
                        )
                    )
                }

                <div ref={bottomRef} />

            </Stack>
    );
}

export default MessageFeed;