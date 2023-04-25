import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
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
height:100;

  .sidebar {
    flex: 0.35;
    /* height: 100vh; */
    height:100%;
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

  const { mode, currentUser, chats, chatInfo, initChat, notifySidebar } = useStore(
    (state) => ({ notifySidebar: state.notifySidebar, mode: state.mode, currentUser: state.currentUser, chats: state.chats, chatInfo: state.chatInfo, initChat: state.initChat }),
    shallow
  )

  const [info, setInfo] = useState(chatInfo);
  const [chatCnt, setChatCnt] = useState(0);

  notifySidebar((payload) => {

    // console.log("SIDEBAR ", payload);
    // console.log("SIDEBAR CHATINFO ", chatInfo);
    if (payload?.getUnreadMsgs !== undefined) {
      const msgs = info;
      payload.getUnreadMsgs.forEach(m => {
        const mBody = m.body.substring(0, 40);
        const msg = {
          message: mBody,
          timestamp: m.createdAt,
          id: m.messageId,
        }

        if (msgs?.[m.sender] !== undefined) {
          const mIdx = msgs[m.sender].findIndex(mm => mm.id === m.messageId);

          if (mIdx === -1) {

            msgs[m.sender].unshift(msg);
          }


        } else {
          msgs[m.sender] = [msg];
        }
      });
      console.log("NEW SIDEBAR CHATS ", msgs);
      setInfo(msgs);
      setChatCnt(prev => prev + 1);

    }

  });


  console.log("SIDEBAR 1", chats, chatInfo);
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
    <SideContainer width={mode === 1 ? "40%" : "100%"}>
      <div className={className} style={{ "height": "100%" }}>
        <div className="sidebar">
          <div className="sidebar__header">
            <Avatar src={currentUser?.image || ""} className="sidebar__avatar" />
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

          <div className="sidebar__chats" chat-idx={chatCnt}>
            {chats.map(({ chatId, name }, i) => (
              <div key={chatId + "-" + i} onClick={async () => await initChat({ chatId, name })}>
                <SidebarChat
                  key={"chat-id-" + chatId + '-' + i}
                  id={chatId}
                  info={info[chatId] || []}
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
