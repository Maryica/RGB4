import React from "react";
import ReactDOM  from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import {MessageList, Header, Layout, ChatList} from "./components";

 const theme=createTheme({});   

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Layout
      header={<Header/>}
      chats={<ChatList/>}
      messages={<MessageList/>}
      />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);