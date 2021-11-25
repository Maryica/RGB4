import {list} from "@mui/material";
import { useState } from "react";
/*import {Chat} from "./components/";*/



export const ChatList=()=>{
    const [chats]=useState([{id:1, name:"room1"}, {id:2, name:"room2"}, {id:3, name:"room3"}]);
    const [selectedIndex, setSelectedIndex]=useState(0);

    return (
        <list component="nav">
            {chats.map((chat, index)=>(
                <Chat
                key={chat}
                title={chat}
                selected={selectedIndex===index}
                handleListItemClick={()=> setSelectedIndex(index)}
                />
            ))}
        </list>
    );
};