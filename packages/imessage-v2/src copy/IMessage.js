import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  createContext,
} from "react";
import styled from "styled-components";
import { useStore } from "./IMStore";
import Chat from "./Chat";

import shallow from 'zustand/shallow'

import Sidebar from "./SideBar";

const AppContainer = styled.div`
  /* */
  display: flex;
`;


const IMessage = (props) => {
  const { data,appType } = props;
  console.log("DATA PROPS ", data,appType);

// Object pick, re-renders the component when either state.nuts or state.honey change
const { mode,loading, init,check,chats,newChats,currentChat,createTestMessage,currentUser } = useStore(
  (state) => ({ mode:state.mode,currentUser: state.currentUser,createTestMessage:state.createTestMessage,currentChat:state.currentChat,loading: state.loading, init: state.init,check:state.check,chats:state.chats,newChats:state.newChats }),
  shallow
)
const initRef = useRef(false);
// const datamodels = [];
// init();
useEffect(() => {
  console.log("Strict mode RENDERING twice...");
  if (!initRef.current) {
    init(appType);
  }
  initRef.current = true;
}, []);
useEffect(() => {
  if (!loading) {
    console.log("CALL CHECK ",check());
    console.log("CHATS ",chats);
  }
}, [loading]);
useEffect(() => {
 
    console.log("NEW CHATS ",newChats);
  
}, [newChats]);

  /*
  // init hook and get provider api services...
  const {
    currentUser,
    onUpdate,
    API,
    registerDataConnector,
    unSubscribe,
    check,
  } = usePrifina();
  const [hooksReady, setHooks] = useState(false);
  const [newChat, setNewChat] = useState(0);
  const chat = useRef({});
  const subscriptionHandler = useRef(null);
  const [newMessage, setNewMessage] = useState([]);
  const [newChatMessage, setNewChatMessage] = useState([]);
  */
/*
  const dataUpdate = (payload) => {
    console.log(
      "UPDATE TEST PAYLOAD",
      new Date().toISOString(),
      payload,
      chat.current
    );

    if (payload?.error !== undefined) {
      // what kind of error....
      if (
        payload.error?.errors !== undefined &&
        Array.isArray(payload.error.errors)
      ) {
        // possible subscription expiration error...
        if (payload.error.errors.length > 0) {
          let errorCodes = {};
          payload.error.errors.forEach((err) => {
            // identity token that was passed is expired or is not valid.
            if (
              err?.message !== undefined &&
              err.message.indexOf("service#ExpiredTokenException") > -1
            ) {
              errorCodes["SUBSCRIPTION_EXPIRED"] = true;
            }
          });

          if (errorCodes?.SUBSCRIPTION_EXPIRED) {
            console.log(check());
            unSubscribe(appID, subscriptionHandler.current);
            alert("Reload page...");
          }
        }
      }
    }
  
    if (payload?.addMessage !== undefined) {
      const statusRes = JSON.parse(payload.addMessage.result);
      if (statusRes.cnt > 0) {
       
        API[appID].Messaging.queryGetUnreadMessages({}).then((m) => {
          console.log("UNREAD ", m);

          // console.log("UNREAD ", m.data);
          //console.log("UNREAD ", Object.keys(m.data));

          let newChatMessages = [];
          let newMessages = [];
          if (m.data.getUnreadMsgs.length > 0) {
            m.data.getUnreadMsgs.forEach((mm) => {
              console.log("UNREAD UPDATE ", chat.current, mm);

              if (
                chat.current?.chatId !== undefined &&
                (mm.sender === chat.current.chatId ||
                  m.chatId === currentUser.uuid)
              ) {
                newChatMessages.push(mm);
              }

              newMessages.push(mm);
            });
          }
          if (newMessages.length > 0) {
            setNewMessage(newMessages);
          }
          if (newChatMessages.length > 0) {
            setNewChatMessage(newChatMessages);
          }

          //setNewMessage(m.data.queryGetUnreadMessages);
          //setNewChatMessage(m.data.queryGetUnreadMessages);
        });
        //}
      }
    }
  };
  useEffect(() => {
    // init callback function for background updates/notifications
    console.log("SUBS HANDLER ", subscriptionHandler.current);
    const onUpdateID = onUpdate(appID, dataUpdate);
    // register datasource modules
    registerDataConnector(appID, [IM]);
    //registerClient([data.appSyncClient]);

    API[appID].Messaging.subscribeMessagingStatus({
      variables: {
        receiver: currentUser.uuid,
      },
    }).then(() => {
      subscriptionHandler.current = onUpdateID;
      setHooks(true);
    });

    return () => {
      console.log("HOOK UNLOAD....");
      unSubscribe(appID, subscriptionHandler.current);
    };
  }, []);

  const initChat = (receiver) => {
    console.log("CHAT ", receiver, newChat);
    chat.current = receiver;
    setNewChat(newChat + 1);
  };
  */
  const addMsg = async () => {
    if (currentChat?.chatId !== undefined) {
      const newMsg = prompt("Please enter msg");
      if (newMsg !== null && newMsg !== "") {
        //const chats = document.querySelectorAll("div[data-chatId]");
        //const firstChat = chats[0].dataset["chatid"];
        console.log("MSG ",newMsg);
        await createTestMessage(newMsg,currentChat.chatId,currentUser.uuid,currentChat.chatId);

        /*
        API[appID].Messaging.mutationCreateTestMessage({
          variables: {
            body: JSON.stringify(newMsg),
            sender: currentUser.uuid,
            chatId: chat.current.chatId,
            receiver: chat.current.chatId,
          },
        }).then((res) => {
          console.log("NEW TEST MSG ", res);
          //setNewMessage(res.data.createMessage);
        });
        */
      }
    }
   
  };
  const addMsg2 = async () => {
    const newMsg = prompt("Please enter msg");
    if (newMsg !== null && newMsg !== "") {
      const chats = document.querySelectorAll("div[data-chatId]");
      console.log("MSG2 ",chats,newMsg)
      const chatId=chats[3].dataset["chatid"];
      //const firstChat = chats[0].dataset["chatid"];
      
      //(msg,msgSender,msgReceiver,msgChatId)=
      await createTestMessage(newMsg,chatId,currentUser.uuid,chatId);
      
      
    }
  };

  return (
    <>
       
          {!loading && <AppContainer>
          <div>
            <button onClick={addMsg}>New Message</button>
          <button onClick={addMsg2}>New Message2</button>
          </div>
          {(mode===1 || mode===2) && <Sidebar /> }
          { (mode===1 || mode===3) && <Chat newChats={newChats} /> }
          </AppContainer>}
          {loading && <div>Loading</div>}
      
    </>
  );
};

IMessage.displayName = "IMessage";

export default IMessage;
