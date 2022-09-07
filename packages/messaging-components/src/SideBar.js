import { Avatar } from "@material-ui/core";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";

import styled from "styled-components";
import SidebarChat from "./SidebarChat";

import shallow from 'zustand/shallow'
import { useStore } from "./IMStore";

const SideContainer = styled.div`
  /* */
  width: ${props => props.width};
`;
const Form = styled(Sidebar)`
  .sidebar {
    flex: 0.35;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
    border-right: 1px solid lightgray;
  }

  .sidebar__header {
    display: flex;
    align-items: center;
    padding: 10px;
    height: 50px;
  }

  .sidebar__avatar {
    cursor: pointer;
    margin: 10px;
  }

  .sidebar__input {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background-color: #e1e1e1;
    color: gray;
    border-radius: 5px;
  }

  .sidebar__input > input {
    border: none;
    background: transparent;
    outline-width: 0;
  }

  .sidebar__chats {
    overflow: scroll;
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  .sidebar__chats::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .sidebar__chats {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

function Sidebar({ className }) {

  const { mode,currentUser,chats,chatInfo,initChat } = useStore(
    (state) => ({ mode:state.mode,currentUser: state.currentUser, chats: state.chats,chatInfo:state.chatInfo,initChat:state.initChat }),
    shallow
  )

  console.log("SIDEBAR ",chats,chatInfo);
/*
  const addChat = () => {
    const chatName = prompt("Please enter a chat name");
    
    // if (chatName) {
    //   db.collection("chats").add({
    //     chatName: chatName,
    //   });
    // }
    
  };
*/
  return (
    <SideContainer width={mode===1?"40%":"100%"}>
      <div className={className}>
        <div className="sidebar">
          <div className="sidebar__header">
            <Avatar src={currentUser?.image||""} className="sidebar__avatar" />
            <div className="sidebar__input">
              <SearchIcon />
              <input placeholder="Search" />
            </div>
            {/*    
          <IconButton variant="outlined" className="sidebar__inputButton">
            <RateReviewOutlinedIcon onClick={addChat} />
          </IconButton>
          */}
          </div>

          <div className="sidebar__chats">
            {chats.map(({ chatId, name }) => (
              <div key={chatId} onClick={async () => await initChat({ chatId,name })}>
              <SidebarChat
                id={chatId}
                info={chatInfo[chatId]||[]}
                chatName={name}
              />
              </div>
            ))}
          </div>
        </div>
      </div>
    </SideContainer>
  );
}

export default Form;
