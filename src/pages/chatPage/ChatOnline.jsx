import React from "react";

const ChatOnline = () => {
  return (
    <div>
      <div className="imagContainer flex items-center p-4 cursor-pointer">
        <div className="relative w-10 h-10  rounded-full object-cover mr-[20px] cursor-pointer  ">
          <img
            src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8fDA%3D"
            alt="img"
            className="w-10 h-10  rounded-full object-cover mr-[20px] cursor-pointer  "
          />
          <div className="absolute bg-green-400 w-3 h-3 border rounded-full top-0 right-0"></div>
        </div>
        <span>John doe</span>
      </div>
    </div>
  );
};

export default ChatOnline;
