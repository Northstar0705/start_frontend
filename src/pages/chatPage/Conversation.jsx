import React from "react";

const Conversation = ({selected}) => {
  return (
    <div className="conversation flex items-center gap-3 p-2 cursor-pointer hover:bg-slate-100 w-[450px]">
      <div className=" flex w-7 h-7 items-center rounded-full bg-red-500">
        <img
          src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8fDA%3D"
          alt="img"
          className="w-7 h-7    rounded-full   cursor-pointer "
        />
      </div>
      <div className="flex flex-col w-[90%]">
        <div className="flex w-full justify-between">
          <span className=" text-gray-500">John Doe</span>
          <span className="text-xs text-gray-500">Just now</span>
        </div>

        <span className="text-sm text-gray-500">Hello</span>
      </div>
    </div>
  );
};

export default Conversation;
