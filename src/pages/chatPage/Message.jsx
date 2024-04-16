import React from "react";

const Message = ({ own }) => {
  return (
    <div
      className={`message flex flex-col mt-5
                ${own ? "items-end" : ""}
      `}
    >
      <div className={`messageTop flex `}>
        <img
          src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8fDA%3D"
          alt=""
          className="w-8 h-8 border rounded-full object-cover cursor-pointer mr-[10px]"
        />
        <div
          className={` flex flex-col messageText p-3 border rounded-3xl  max-w-xs bg-blue-500    
                ${own ? "  bg-gray-200 text-black" : " text-white"}`}
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
