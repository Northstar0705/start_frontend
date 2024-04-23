import React, { useNavigate, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Conversation from "./Conversation";
import Message from "./Message";
import ChatOnline from "./ChatOnline";

const Messenger = ({ own, login }) => {
  return (
    <div>
      <Navbar loggedIn={true} path={"mentor"}/>
      <div className="messenger  h-[calc(100vh-70px)]  flex ">
        <div className="chatMenu flex ">
          <div className="chatMenuWrapper w-[90%] p-2 ">
            <input
              type="text"
              placeholder="Search for friends"
              className="chatmenuInput  border-0  outline-none border-b-2 border-gray-500 w-full"
            />
            <Conversation selected={true} />
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
            <button className=" w-20 h-10 p-2 rounded-md bg-teal-400 outline-none items-center cursor-pointer ">
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
