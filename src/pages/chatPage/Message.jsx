import moment from "moment";
import React from "react";

const Message = ({ message,own }) => {
  return (
    <div className={`message flex flex-col ${own ? "items-end" : ""}`}>
      <div className={`messageTop flex `}>
        <div
          className={` flex flex-col messageText rounded-lg p-3 border max-w-lg ${own ? "bg-[#bbdec2] text-black" : " text-black bg-gray-200/90"}`}>
          {message.text}
        </div>
      </div>
      <div className="messageBottom text-xs">{moment(message.createdAt).fromNow()}</div>
    </div>
  );
};

export default Message;
