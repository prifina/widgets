import React, { useRef } from "react";

import create from "zustand";

import createContext from "zustand/context";
import { usePrifina, Op } from "@prifina/hooks-v2";

import IM from "@prifina/messaging";
//import { subscribeWithSelector } from 'zustand/middleware'

const { Provider, useStore } = createContext(null);

//mport { subscribeWithSelector } from 'zustand/middleware'
//const useStore = create(subscribeWithSelector(() => ({ paw: true, snout: true, fur: true })))


const StoreProvider = ({ componentProps, children }) => {
  //const { client } = useGraphQLContext();
  // console.log("PROVIDER CLIENT ", client);
  const {
    currentUser,
    onUpdate,
    API,
    registerDataConnector,
    unSubscribe,
    check,
  } = usePrifina();

  console.log("PRIFINA HOOK USER ", currentUser);
  const notify = useRef(null);
  return (
    <Provider createStore={() =>
      create((set, get) => ({
        mode: 0,
        appType: "",
        appId: "",
        currentUser: currentUser,
        loading: true,
        onUpdateID: "",
        chatInfo: {},
        chats: [],
        newChats: 0,
        currentChat: {},
        messages: [],
        changeMode: () => {
          set({ mode: 2 });
        },
        notify: (callback) => {
          notify.current = callback;
        },
        createMessage: async (msg) => {
          const appID = get().appId;
          const sender = get().currentUser.uuid;
          const receiver = get().currentChat.chatId;
          const chatId = get().currentChat.chatId;
          const msgRes = await API[appID].Messaging.mutationCreateMessage({
            variables: {
              body: JSON.stringify(msg),
              receiver: receiver,
              sender: sender,
              chatId: chatId,
              owner: sender
            },
          });

          console.log("NEW MSG ", msgRes);
          const currentMessages = get().messages;
          currentMessages.push(
            {
              id: msgRes.data.createMessage.messageId,
              data: {
                timestamp: msgRes.data.createMessage.createdAt,
                message: JSON.stringify(msg),
                receiver: receiver,
                sender: sender,
                chatId: chatId

              },
            },
          );
          set({ messages: currentMessages });
          /*
          data:
  createMessage:
  body: "\"testing\""
  chatId: "tero"
  createdAt: 1661509469391
  messageId: "rfx877"
  receiver: "tero"
  sender: "Testing-uuid"
  
  */
        },
        createTestMessage: async (msg, msgSender, msgReceiver, msgChatId) => {
          const appID = get().appId;
          const sender = msgSender || get().currentUser.uuid;
          const receiver = msgReceiver || get().currentChat.chatId;
          const chatId = msgChatId || get().currentChat.chatId;
          const msgRes = await API[appID].Messaging.mutationCreateTestMessage({
            variables: {
              body: JSON.stringify(msg),
              receiver: receiver,
              sender: sender,
              chatId: chatId,
              owner: sender
            },
          });
          console.log("NEW TEST MSG ", msgRes);

          //console.log("NEW TEST MSG ",msgRes);
          const currentMessages = get().messages;
          currentMessages.push(
            {
              id: msgRes.data.createMessage.messageId,
              data: {
                timestamp: msgRes.data.createMessage.createdAt,
                message: JSON.stringify(msg),
                receiver: receiver,
                sender: sender,
                chatId: chatId

              },
            },
          );
          //console.log("NEW MESSAGES ",currentMessages);

          set({ messages: currentMessages });
          /*  
          set((state) => {
            const foundTodo = state.todos.find((t) => t.id === id);
            foundTodo && (foundTodo.score += by);
            console.log(state.todos);
            return { todos: state.todos };
          })
          */

        },
        initChat: async (receiver) => {
          const newChats = get().newChats;
          console.log("CHAT ", receiver, newChats);
          const appID = get().appId;
          //const chatId=get().currentUser.uuid;
          const chatUser = get().currentUser.uuid;
          /*
          const filter = {
            [Op.and]: {
            ["receiver"]: {
              [Op.eq]: receiver.chatId,
            },
            ["sender"]: {
              [Op.eq]: chatUser,
            },
          }
          };
          */
          const filter = {

            ["chatId"]: {
              [Op.eq]: receiver.chatId,
            }
          };
          const chatMsgs = await API[appID].Messaging.queryGetMessages({
            filter: filter,
          })

          console.log("MSGS ", chatMsgs);
          const msgs = [];
          const sortedMsgs = chatMsgs.data.getMsgs.sort((a, b) =>
            a.createdAt > b.createdAt ? 1 : -1
          );

          sortedMsgs.forEach(msg => {
            msgs.push(
              {
                id: msg.messageId,
                data: {
                  timestamp: msg.createdAt,
                  message: msg.body,
                  receiver: msg.receiver,
                  sender: msg.sender,
                  chatId: msg.chatId,
                  owner: msg.owner

                },
              },
            );
          });
          const mode = get().appType === "widget" ? 3 : 1;
          set({ mode: mode, messages: msgs, currentChat: receiver, newChats: newChats + 1 });
          /*
          API[appID].Messaging.queryGetUnreadMessages({}).then((m) => {
            console.log("UNREAD ", m);
            const msgs=[];
            m.data.getUnreadMsgs.forEach(msg=>{
              if (msg.receiver===chatUser) {
              msgs.push(
                {
                  id: msg.messageId,
                  data: {
                    timestamp: msg.createdAt,
                    message: msg.body,
                    receiver: msg.receiver,
                    sender: msg.sender,
                    chatId: msg.chatId
                
                  },
                },
              );
              }
            });
            
            set({messages:msgs,currentChat:receiver,newChats: newChats+ 1});
  
          });  
         */
        },

        /*
        data:
getUnreadMsgs:
        body: "\"answer\""
chatId: "tero"
createdAt: 1661517471939
messageId: "mnl543"
receiver: "Testing-uuid"
sender: "tero"
*/
        /*
        onUpdate:(cb)=>{
          const id=onUpdate(componentProps.appId, cb);
          set({onUpdateID:id});
        },
        */
        check: () => {
          console.log("CHECK ", check());
        },
        getUnreadMessages: async () => {
          const appID = get().appId;
          API[appID].Messaging.queryGetUnreadMessages({}).then((m) => {
            console.log("UNREAD ", m);


          });
        },
        getMessages: async (receiver) => {

          const appID = get().appId;
          console.log("CHAT SELECTED...", receiver);

          // sender currentUser, receiver 
          const filter = {
            [Op.and]: {
              ["receiver"]: {
                [Op.eq]: receiver.chatId,
              },
              ["sender"]: {
                [Op.eq]: get().APIcurrentUser.uuid,
              },
            }
          };

          /*
              const filter = {
                [Op.and]: {
                  [year]: {
                    [Op.eq]: { fn: "YEAR", field: "p_datetime", opts: null },
                  },
                  [month]: {
                    [Op.eq]: { fn: "MONTH", field: "p_datetime", opts: null },
                  },
                  100: { [Op.eq]: { fn: "CAST", field: "p_confidence", opts: "int" } },
                },
              };
          */
          //{ chatId: receiver.chatId }

          const msgs = await API[appID].Messaging.queryGetMessages({
            filter: filter,
          })

          console.log("MSGS ", msgs);
          //{ id,user, contents: { timestamp, message,sender} },
          /*
                  // sort createdAt...
                  const sortedMsgs = msgs.data.getMsgs.sort((a, b) =>
                    a.createdAt > b.createdAt ? 1 : -1
                  );
          
                  setMessages(
                    sortedMsgs.map((m) => ({
                      id: m.messageId,
          
                      data: {
                        timestamp: m.createdAt,
                        message: JSON.parse(m.body),
                        sender: m.sender,
                        receiver: m.receiver,
                        chatId: m.chatId,
                      },
                    }))
                  );
                  //setChatId(receiver.chatId);
                  setChatSelected(true);
                });
                */

        },
        updateMsgStatus: async (id) => {
          const appID = get().appId;
          await API[appID].Messaging.mutationUpdateMessageStatus({
            variables: { messageId: id, status: 1 },
          });
        },
        update: (payload) => {
          console.log("UPDATE STORE ", payload);
          const appID = get().appId;
          /*
          if (payload?.messagingStatus) {
            const statusRes = JSON.parse(payload.messagingStatus);
            if (statusRes.cnt > 0) {
             
              API[appID].Messaging.queryGetUnreadMessages({}).then((m) => {
                console.log("UNREAD ", m);
              });  
            }
         
          }*/
          if (payload?.addMessage) {
            const msgStatus = JSON.parse(payload.addMessage.result);
            if (msgStatus.cnt > 0) {
              API[appID].Messaging.queryGetUnreadMessages({}).then((m) => {
                console.log("UNREAD ", m);
                if (notify.current) {
                  console.log("UPDATE SUBS")
                  notify.current(m.data);
                }
              });
            }
          }

          /*    
          if (subscribe.current) {
            console.log("UPDATE SUBS")
            subscribe.current();
          }
          */
          /*
             console.log("NEW TEST MSG ",msgRes);
             const currentMessages=get().messages;
             currentMessages.push(
               {
                 id: msgRes.data.createMessage.messageId,
                 data: {
                   timestamp: msgRes.data.createMessage.createdAt,
                   message: JSON.stringify(msg),
                   receiver: receiver,
                   sender: sender,
                   chatId: chatId
               
                 },
               },
             );
             set({messages:currentMessages});
             */
        },

        init: (appType) => {
          const appId = componentProps.appId;

          console.log(appId, appType);
          console.log(currentUser);

          const id = onUpdate(appId, get().update);
          registerDataConnector(appId, [IM]);

          const tasks = [];
          tasks.push(API[appId].Messaging.subscribeMessagingStatus({
            variables: {
              receiver: currentUser.uuid,
            },
          }))
          tasks.push(API[appId].Messaging.queryUserAddressBook({}));
          tasks.push(API[appId].Messaging.queryGetUnreadMessages({
            filter: {},
          }));

          Promise.all(tasks).then(res => {
            const userAddressBook = res[1];
            const unreadMsgs = res[2];
            const chatInfo = {};
            unreadMsgs.data.getUnreadMsgs.forEach((m) => {
              //console.log("UNREAD MSG ", m);
              if (!chatInfo?.[m.sender]) {
                chatInfo[m.sender] = [];
              }
              chatInfo[m.sender].push({
                message: m.body,
                timestamp: m.createdAt,
              });
            });
            const chats = userAddressBook.data.getAddressBook.map((u) => ({
              chatId: u.uuid,
              name: u.name,
            }));

            const mode = appType === "widget" ? 2 : 1;

            set({ appType: appType, mode: mode, appId: appId, onUpdateID: id, loading: false, chatInfo: chatInfo, chats: chats });

          });


          /*
          setTimeout(() => {
            
            //set({ schema: currentSchema });
            //set(state => ({ schema: { ...state.schema, ...entry } })),
            set({loading:false});
          }, 5000);
          */
        },
      }))}
    >
      {children}
    </Provider>
  );
};


export { useStore, StoreProvider };
