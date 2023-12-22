
import React from "react";
import Cards from "./Card";
const Testimonials = () => {
  const userWithPic = {
    name: "Anusha Sharma",
    profilePic: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwbWFsZXxlbnwwfHwwfHx8MA%3D%3D",
  };
  const userWithoutPic = {
    name: "Anusha Sharma",
  };
  return (
    <div className="mx-4 flex gap-6">
      Testimonials
      <Cards user={userWithPic} />
      <Cards user={userWithPic} />
    </div>
  );
};

export default Testimonials;
