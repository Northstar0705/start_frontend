import React, { useNavigate, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Conversation from "./Conversation";
import Message from "./Message";
import ChatOnline from "./ChatOnline";
import SearchIcon from "@mui/icons-material/Search";

const Messenger = ({ own, login }) => {
  return (
    <div className="">
      <div className="messenger  h-[92vh]  flex ">
        <div className="chatMenuWrapper flex flex-col w-[400px]  h-full">
          <div className="flex items-center gap-2  border border-gray-500 rounded-md p-1.5 w-full">
            <SearchIcon className="searchIcon" />
            <input
              type="text"
              placeholder="Search for friends"
              className="chatmenuInput   outline-none  w-full"
            />
          </div>
          <div className="bg-[#118577] text-white h-full overflow-y-scroll p-2">
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

        <div className={`chatBox flex flex-col w-full p-5 `}>
          <div className="chatBoxTop h-full overflow-y-scroll">
            <Message />
            <Message own={true} />
            <Message />
            <Message />
            <Message />
            <Message own={true} />
            <Message />
            <Message />
          </div>
          <div className="chatBoxDown mt-2 flex items-center justify-between ">
            <textarea
              placeholder="write something..."
              className="input w-3/4 h-20 p-3 outline"
            ></textarea>
            <button className=" w-20 h-10 p-2 rounded-md bg-[#118577] outline-none items-center cursor-pointer text-white">
              Submit
            </button>
          </div>
        </div>
        {/* <div className="chatOnline flex flex-col  gap-3 flex-[3]  h-full overflow-y-scroll">
         
        </div> */}
      </div>
    </div>
  );
};

export default Messenger;
