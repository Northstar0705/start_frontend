import React from "react";
import moment from "moment";

const Conversation = ({ c, selected, setSelected, i, selectedRef }) => {
  return (
    <div onClick={()=>{setSelected(i)
    selectedRef.current = i}}  className={`conversation ${selected?"bg-gray-300/80":""} flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-200/80 w-full border-b`}>
      <div className=" flex w-10 h-10 items-center rounded-full mt-1 bg-red-500">
        <img
          src={c.user.profilePicture || c.user.image}
          alt="img"
          className="w-10 h-10 rounded-full object-cover cursor-pointer"
        />
      </div>
      <div className="flex flex-col w-[80%]">
        <div className="flex w-full justify-between">
          <span className=" ">{c.user.firstName + " " + c.user.lastName}</span>
          {c.lastTime && <span className="text-xs">{moment(c.lastTime).fromNow()}</span>}
        </div>
        {c.lastMessage && <span className="text-sm ">{c.lastMessage}</span>}
      </div>
    </div>
  );
};

export default Conversation;
