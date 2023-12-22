import React from "react";

const Cards = ({ user }) => {
  const hasProfilePic = user && user.profilePic;
  const initials = user
    ? user.name
        .split(" ")
        .map((namePart) => namePart[0])
        .join("")
    : "";
  return (
    <div className="cardHeading flex flex-col bg-[#f2f2f7] w-10 gap-4 justify-between rounded-[1.125rem] p-[2rem] md:min-w-[28rem] md:gap-6 md:p-8">
      <div className="flex gap-4 items-center">
        <div className="profilepic bg-[#dbdbdb] border rounded-full w-12 h-10  text-xl overflow-hidden">
          {hasProfilePic ? (
            <img src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwbWFsZXxlbnwwfHwwfHx8MA%3D%3D" alt="profile" className=" w-full h-full  object-cover "/>
          ) : (
            <div className="initials">
              <span>{initials}</span>
            </div>
          )}
        </div>
        <div className="nameAndProfession">
          <div>Anusha Sharma</div>
          <div>Wroking Professional</div>
        </div>
      </div>
      <div>
        <div className="text-md line-clamp-4 ">
          Dear Nikita, I hope this note finds you well. I wanted to take a
          moment to express my deepest gratitude for the remarkable mentorship
          you've provided me throughout my journey of upskilling in the realm of
          quantitative finance. Your guidance... Dear Nikita, I hope this note
          finds you well. I wanted to take a moment to express my deepest
          gratitude for the remarkable mentorship you've provided me throughout
          my journey of upskilling in the realm of quantitative finance. Your
          guidance,
        </div>
      </div>
      {/* mentor */}

      <div className="p-5 flex gap-4 items-center border  rounded-[200px]  bg-[#ffffff] relative">
        <div className="profilepic bg-[#dbdbdb] border rounded-full w-12 h-10 text-xl">
          {hasProfilePic ? (
            <img src={user.profilePic} alt="profile" className="w-full h-full object-cover border rounded-full"/>
          ) : (
            <div className="initials">
              <span>{initials}</span>
            </div>
          )}
        </div>
        <div className="nameAndProfession text-[#0c0c0c]">
          <div >Gaurav Sharma</div>
          <div>Wroking Professional at Google</div>
        </div>

        {/* mentor tag */}
        <div className="mentorTag absolute -top-2 border border-[#3596ff] right-10 bg-[#dfeeff] text-[##9da8b4] rounded-[0.5rem] px-[0.5rem] py-[0.25rem] text-xs">
          Mentor
        </div>
      </div>
    </div>
  );
};

export default Cards;
