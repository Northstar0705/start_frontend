import React, { useNavigate, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Conversation from "./Conversation";
import Message from "./Message";
import ChatOnline from "./ChatOnline";
import SearchIcon from "@mui/icons-material/Search";

const Messenger = ({ own, login }) => {
  const online = false;
  return (
    <div className="">
      <div className="messenger  h-[92vh]  flex ">
        <div className="flex flex-col w-[500px] shadow-lg px-2 gap-2 border h-full">
          <div className="flex items-center gap-2 mt-2 border border-gray-500 rounded-md p-1.5 w-full">
            <SearchIcon className="searchIcon" />
            <input
              type="text"
              placeholder="Search for friends"
              className="chatmenuInput   outline-none  w-full"
            />
          </div>
          <div className="h-full overflow-y-scroll">
            <Conversation selected={true} />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
          </div>
        </div>
        <div className={`chatBox flex flex-col w-full gap-2`}>
          <div className="bg-white/90 w-full p-2 shadow-md flex justify-between">
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10 rounded-full">
                <img className="w-10 h-10 object-cover rounded-full" src={"https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8fDA%3D"} alt="" />
              </div>
              <span className="text-xl font-medium">John Doe</span>
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
          <div className="chatBoxTop h-full overflow-y-scroll p-5 pt-0">
            <Message />
            <Message own={true} />
            <Message />
            <Message />
            <Message />
            <Message own={true} />
            <Message />
            <Message />
          </div>
          <div className="flex items-center justify-evenly p-2 bg-gray-200/60">
            <textarea
              placeholder="write something..."
              rows={1}
              className="w-[80%] rounded-lg p-2 outline-none resize-none"
            ></textarea>
            <button className=" w-20 h-10 p-2 rounded-md bg-[#118577] outline-none items-center cursor-pointer text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
