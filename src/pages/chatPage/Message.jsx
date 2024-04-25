import React from "react";

const Message = ({ own }) => {
  return (
    <div className={`message flex flex-col ${own ? "items-end" : ""}`}>
      <div className={`messageTop flex `}>
        <div
          className={` flex flex-col messageText rounded-lg p-3 border max-w-lg
                ${own ? "bg-[#bbdec2] text-black" : " text-black bg-gray-200/90"}`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugiat
          exercitationem
        </div>
      </div>
      <div className="messageBottom text-xs mt-3">1 hour ago</div>
    </div>
  );
};

export default Message;
