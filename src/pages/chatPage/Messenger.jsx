import React, { useNavigate, useEffect, useState, useRef } from "react";
import Conversation from "./Conversation";
import Message from "./Message";
import ChatOnline from "./ChatOnline";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from '@mui/icons-material/Send';

const Messenger = ({ conversations, setConversations, user, socket }) => {
  const online = true;
  const [text, setText] = useState("");
  const [selected, setSelected] = useState(null);
  const selectedRef = useRef(null)

  const handleSendText = () => {
    const newMsg = {
      to: conversations[selected].user._id,
      from: user._id,
      text: text,
      createdAt: Date.now()
    }
    socket.emit('send_message', newMsg)
    setText("")
  }

  useEffect(() => {
    if (user) {
      socket.emit("online", { userId: user._id })
      console.log("online", user._id)
    }
    socket.on("send_message", (msg) => {
      console.log("send message", msg)
      if (msg.from === user._id) {
        conversations[selectedRef.current].chat.push(msg)
        setConversations([...conversations])
      }
      else{
        const c = conversations.find(c => c.user._id === msg.from)
        if(c){
          c.chat.push(msg)
          setConversations([...conversations])
        }
      }
      socket.emit("get_conversations", { userId: user._id, role: user.role })
    })
    return () => {
      socket.off("send_message")
    }
  }, [])

  console.log(selected)

  return (
    <div className="">
      <div className="messenger  h-[92vh]  flex w-full ">
        <div className="flex flex-col w-[500px] shadow-lg px-2 gap-2 border h-full">
          <div className="flex items-center gap-2 mt-2 border border-gray-500 rounded-md p-1.5 w-full">
            <SearchIcon className="searchIcon" />
            <input
              type="text"
              placeholder="Search for friends"
              className="chatmenuInput outline-none w-full"
            />
          </div>
          <div className="h-full overflow-y-scroll">
            {conversations?.map((c, i) => (
              <Conversation selectedRef={selectedRef} setSelected={setSelected} i={i} selected={selectedRef.current === i} c={c} key={c.user?._id} />
            ))}
          </div>
        </div>
        {selected !== null && <div className={`chatBox flex flex-col w-full gap-2`}>
          <div className="bg-gray-100 w-full p-2 shadow-md flex justify-between">
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10 rounded-full">
                <img className="w-10 h-10 object-cover rounded-full" src={"https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8fDA%3D"} alt="" />
              </div>
              <span className="text-xl font-medium">{conversations[selected].user.firstName + " " + conversations[selected].user.lastName}</span>
            </div>
            {online && <div className="flex items-center gap-2 border border-green-600 rounded-full px-2">
              <div className="w-2 h-2 rounded-full bg-green-600 mt-1"></div>
              <div className="text-green-600 font-medium">Online</div>
            </div>}
            {!online && <div className="flex items-center gap-2 border border-yellow-600 rounded-full px-2">
              <div className="w-2 h-2 rounded-full bg-yellow-600 mt-1"></div>
              <div className="text-yellow-600 font-medium">Offline</div>
            </div>}
          </div>
          <div className="chatBoxTop h-full overflow-y-scroll p-5 pt-0 flex flex-col gap-2">
            {conversations[selected].chat.map((m) => (
              <Message message={m} own={m.from === user?._id} />
            ))}
          </div>
          <div className="flex items-center justify-evenly p-2 bg-gray-200/60">
            <textarea
              placeholder="Type here..."
              rows={1}
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                  handleSendText()
                }
              }}
              className="w-[80%] rounded-lg p-2 outline-none resize-none"
            ></textarea>
            <div className="flex w-max" onClick={() => handleSendText}>
              <SendIcon className="cursor-pointer text-[#118577]" />
            </div>
          </div>
        </div>}
        {selected === null && <div className="w-full flex items-center justify-center text-2xl text-gray-400">
          Select a Mentor to start coversation...
        </div>}
      </div>
    </div>
  );
};

export default Messenger;
