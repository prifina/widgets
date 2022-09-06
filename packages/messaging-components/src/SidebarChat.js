import { Avatar } from "@material-ui/core";
import React from "react";
import * as timeago from "timeago.js";
import styled from "styled-components";
const Form = styled(SidebarChat)`
  .sidebarChat {
    display: flex;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid lightgray;
    cursor: pointer;
  }

  .sidebarChat:hover {
    background-color: #3e93fd;
    color: white;
  }

  .sidebarChat__info {
    margin-left: 15px;
    position: relative;
    width: 100%;
  }

  .sidebarChat__info > small {
    position: absolute;
    top: 5px;
    right: 0;
  }
`;

function SidebarChat({ id, chatName, info, className }) {
/*
  const { currentUser,chats,chatInfo } = useStore(
    (state) => ({ currentUser: state.currentUser, chats: state.chats,chatInfo:state.chatInfo }),
    shallow
  )

  const { appID, API, receiver, initChat, newMessage } = useAppContext();
  //console.log("RECEIVER ", receiver);
  const [chatInfo, setChatInfo] = useState([]);
*/
  /*
      if (id !== "") {
       
        const filter = {
          ["chatId"]: {
            [Op.eq]: id,
          },
        };
        
        //const filter = {};
        const unreadMsgs = await API[appID].Messaging.queryGetUnreadMessages({
          filter: filter,
        });
        setChatInfo(
          unreadMsgs.data.getUnreadMsgs.map((m) => ({
            message: m.body,
            timestamp: m.createdAt,
          }))
        );
      }
      */
  
/*      
  useEffect(() => {
    if (newMessage.length === 0) {
      
      setChatInfo([info]);
    } else {
      console.log("SIDEBAR NEW MSGS from Context", id, newMessage);
      let newMessages = [];
      newMessage.forEach((m) => {
        if (m.sender === id) {
          const mIdx = newMessages.findIndex((mi) => mi.sender === m.sender);

          if (mIdx === -1) {
            newMessages.push(m);
          } else {
            //newMessages[mIdx] = m;
          }
        }
      });
      const lastIndex = newMessages.length - 1;
      console.log("MSG IDX ", lastIndex, newMessages[lastIndex]);
      if (lastIndex > -1) {
        setChatInfo([
          {
            message: newMessages[lastIndex].body,
            timestamp: newMessages[lastIndex].createdAt,
          },
        ]);
      }
    }
  }, [id, newMessage]);

   // onClick={() => initChat({ chatId: id, name: chatName })}
  */

  return (
    <div className={className}>
      <div
       
        className="sidebarChat"
        data-chatid={id}
      >
        <Avatar src={info[0]?.photo} />
        <div className="sidebarChat__info">
          <h3>{chatName}</h3>
          {info.length > 0 && info[0]?.message !== undefined && (
            <>
              <p>{info[0]?.message}</p>
              <small>{timeago.format(new Date(info[0]?.timestamp))}</small>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Form;
