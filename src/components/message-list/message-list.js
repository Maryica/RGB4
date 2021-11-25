import React, {useEffect, useRef, useState} from "react";
import { Input, InputAdornment} from "@mui/material";
import { Send } from "@mui/icons-material";
import { Message } from "./message";
import { useStyles } from "./styles-list";



export const MessageList=()=>{
    const styles=useStyles()
  const[messageList, setMessageList]=useState ([]);
  const[value, setValue]=useState("");

 const ref = useRef(null);



  useEffect(()=>{
    const lastMessages=messageList[messageList.length-1];
    let timerId=null
    if (messageList.length && lastMessages.author!=="Bot"){
      timerId=setTimeout(()=>{
        setMessageList([...messageList, {author: "Bot", Text: "I am bot", id: new Date()}]);
    }, 1500);
  }
   return() =>clearInterval(timerId);
  },[messageList]);

  useEffect(()=> {
    ref.current?.focus()
  }, []);

  const sendMessage=()=>{
    setMessageList([...messageList, {author: "User", Text: value}]);
      setValue("");
  };

const hendlePressInput=({code})=>{
  if (code === "Enter") {
  sendMessage();
}
};

  return (
  <div>
    {messageList.map((Text, index)=>(
    <div>{Text.Text} key={index} </div>
    ))}

    <Input 
    className={styles.input}
    ref={ref}
    placeholder= "enter message..." 
    value={value} 
    onChange={(e)=>setValue(e.target.value)}
    onKeyPress={hendlePressInput}
    endAdornment={
        <InputAdornment position="end">
        <Send className={styles.icon} onClick={sendMessage}/>
        </InputAdornment>
    }
    />
    </div> 
   /*<Button 
    onClick={sendMessage}>send message</Button>
   */
  );
    };
