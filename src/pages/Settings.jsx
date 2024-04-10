import { useState } from "react";
import Navbar from "../components/Navbar";

const Settings = () => {
  const [active, isActive] = useState();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    jobTitle: "",
    linkedIn: "",
    twitter: "",
    goals: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    console.log(form);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      location: "",
      jobTitle: "",
      linkedIn: "",
      twitter: "",
      goals: "",
    });
    if (form.firstName === "" || form.lastName === "" || form.email === "") {
      alert("Please fill all the required fields");
    } else {
      alert("Your profile has been updated");
    }
  };
  return (
    <div>
      <div className="bg-[#172E59]">
        <Navbar loggedIn={true} path={"settings"} />
      </div>
      {/* page nav section */}
      <div className="flex py-4 px-20 shadow-sm">
        <div className="container w-max flex"></div>
        <div className=" flex items-center gap-20 ">
          {/* profile subscription  billing balance and password  */}
          <div className="flex gap-1 px-5 items-center text-[#21A391] font-medium border-b-2 border-[#21A391] cursor-pointer">
            <h3>Profile</h3>
          </div>
          <div className="flex gap-1 items-center cursor-pointer font-medium">
            <h3>Subscription Billing</h3>
          </div>
          <div className="flex gap-1 items-center cursor-pointer font-medium">
            <h3>Balance</h3>
          </div>
          <div className="flex gap-1 items-center cursor-pointer font-medium">
            <h3>Password</h3>
          </div>
        </div>
      </div>
      {/* profile */}
      <div className="flex flex-col items-center justify-center  my-5  px-20  ">
        <h1 className="text-[1.25rem] font-[700]">Your Profile</h1>
        {/* profile name */}

        <div className="my-2 w-full h-full border rounded-md py-2 border-gray-400">
          <div className=" flex flex-col items-start px-5 font-semibold ">
            <h2 className="">Personal Information</h2>
            <div className="flex flex-col w-full mx-2 mt-5 bg-[#f2f7ff] p-4  border rounded-md border-none">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 flex bg-[#488bf0] rounded-full p-1 items-center  justify-center">
                  <div className="text-white  text-sm">i</div>
                </div>
                <div className="text-[#2e71b6]">Tips</div>
              </div>
              <div className="flex flex-col ">
                <div className="flex  items-center  gap-4 font-normal text-[#2e71b6]">
                  {/* blue circle using tailwind css */}
                  <div className="w-1 h-1 bg-[#2e71b6] rounded-full"></div>
                  Adding your photo and social media profiles helps mentors feel
                  confident that you’re a real person (e.g. not a bot).
                </div>
                {/* <div className="flex items-center gap-4 font-normal text-[#2e71b6]">
                  <div className="w-1 h-1 bg-[#2e71b6] rounded-full"></div>
                  Your profile is only visible to mentors that you send
                  applications to. It is not indexed on search engines like
                  Google.
                </div> */}
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="flex flex-col items-start px-5 py-1 font-semibold gap-4">
            <div className="">Photo</div>
            <div className="flex items-center gap-4">
              <img
                className="w-10 h-10 rounded-full"
                src="https://avatars.githubusercontent.com/u/74105371?v=4"
                alt=""
              />
              <div className="border rounded-md p-1">
                <button className="text-[#2e71b6]">Upload photo</button>
              </div>
            </div>
            {/* first name and last name */}
            <div className="flex  items-start gap-4">
              <div className="flex flex-col items-start gap-1">
                <div className="">First Name*</div>
                <input
                  className="border rounded-md p-2 w-96 outline-blue-600"
                  type="text"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={(e) => {
                    setForm({ ...form, firstName: e.target.value });
                  }}
                />
              </div>
              <div className="flex flex-col items-start gap-1">
                <div className="">Last Name*</div>
                <input
                  className="border rounded-md p-2 w-96 outline-blue-600"
                  type="text"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={(e) => {
                    setForm({ ...form, lastName: e.target.value });
                  }}
                />
              </div>
            </div>
            {/* email  and location*/}
            <div className="flex  items-start gap-4">
              <div className="flex flex-col items-start gap-1">
                <div className="">Email*</div>
                <input
                  className="border rounded-md p-2 w-96 outline-blue-600"
                  type="text"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                  }}
                />
                {/* <div className="text-sm text-gray-400">Only visible to you</div> */}
              </div>
              <div className="flex flex-col items-start gap-1">
                <div className="">Location</div>
                <input
                  className="border rounded-md p-2 w-96 outline-blue-600"
                  type="text"
                  placeholder="Location"
                  value={form.location}
                  onChange={(e) => {
                    setForm({ ...form, location: e.target.value });
                  }}
                />
              </div>
            </div>
            {/* job title */}
            <div className="flex  items-start ">
              <div className="flex flex-col items-start gap-1">
                <div className="">Job Title</div>
                <input
                  className="border rounded-md p-2 w-[49rem] outline-blue-600"
                  type="text"
                  placeholder="Job Title"
                  value={form.jobTitle}
                  onChange={(e) => {
                    setForm({ ...form, jobTitle: e.target.value });
                  }}
                />
              </div>
            </div>
            {/* linkedin and twitter */}
            <div className="flex  items-start gap-4">
              <div className="flex flex-col items-start gap-1">
                <div className="">LinkedIn</div>
                <input
                  className="border rounded-md p-2 w-96 outline-blue-600"
                  type="text"
                  placeholder="https://www.linkedin.com/"
                  value={form.linkedIn}
                  onChange={(e) => {
                    setForm({ ...form, linkedIn: e.target.value });
                  }}
                />
              </div>
              <div className="flex flex-col items-start gap-1">
                <div className="">Twitter</div>
                <input
                  className="border rounded-md p-2 w-96 outline-blue-600"
                  type="text"
                  placeholder="https://twitter.com/"
                  value={form.twitter}
                  onChange={(e) => {
                    setForm({ ...form, twitter: e.target.value });
                  }}
                />
              </div>
            </div>
            {/* goals */}
            <div className="flex  items-start gap-4 ">
              <div className="flex flex-col items-start gap-1">
                <div className="">Goals</div>
                <textarea
                  className="border rounded-md p-2 w-[49rem] h-60 outline-blue-600"
                  type="text"
                  placeholder=""
                  value={form.goals}
                  onChange={(e) => {
                    setForm({ ...form, goals: e.target.value });
                  }}
                />
                <div className="text-sm text-gray-400">
                  It's good practice to build mentorship around a long-term goal
                  of yours. This is shared with mentors.
                </div>
              </div>
            </div>
            <div>
              <button
                className="bg-[#488bf0] text-white rounded-md p-2 "
                onClick={handleClick}
              >
                Save Changes
              </button>
            </div>
          </div>
          {/*  */}
        </div>
        {/* time zone and availabilty */}
        <div className="mx-10 my-2   w-full h-full border rounded-md border-gray-400">
          <div className=" flex flex-col items-start p-5 font-semibold ">
            <h2 className="">Time Zone and Availability</h2>
            <div className="flex flex-col w-full mx-2 my-5  bg-[#f2f7ff] p-4  border rounded-md border-none">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 flex bg-[#488bf0] rounded-full p-1 items-center  justify-center">
                  <div className="text-white  text-sm">i</div>
                </div>
                <div className="text-[#2e71b6]">Tips</div>
              </div>
              <div className="flex flex-col ">
                <div className="flex  items-center  gap-4 font-normal text-[#2e71b6]">
                  {/* blue circle using tailwind css */}
                  <div className="w-1 h-1 bg-[#2e71b6] rounded-full"></div>
                  Adding your photo and social media profiles helps mentors feel
                  confident that you’re a real person (e.g. not a bot).
                </div>
                <div className="flex items-center gap-4 font-normal text-[#2e71b6]">
                  <div className="w-1 h-1 bg-[#2e71b6] rounded-full"></div>
                  Your profile is only visible to mentors that you send
                  applications to. It is not indexed on search engines like
                  Google.
                </div>
              </div>
            </div>
          </div>
          {/* time zone */}
          <div className="flex flex-col items-start p-5 font-semibold gap-4">
            <div className="">Time Zone</div>
            <div className="flex items-center gap-4">
              <div className="border rounded-md p-1">
                <button className="text-[#2e71b6]">Select Time Zone</button>
              </div>
            </div>
          </div>
        </div>
        {/* email preferences */}
        <div className="mx-10 my-2   w-full h-full border rounded-md border-gray-400">
          <div className=" flex flex-col items-start p-5 font-semibold ">
            <h2 className="">Email Preferences</h2>
          </div>
          <div className="flex flex-col items-start px-5 font-normal">
            Configure your email notifications so you can focus on what’s really
            important.
          </div>
          {/* checkboxes */}
          <div className="flex flex-col items-start p-5 font-normal ">
            <div className="flex items-center gap-4">
              <input type="checkbox" />
              <div className="font-medium">
                Important updates about your account, mentorship, messages and
                billing
              </div>
            </div>
            <div className="flex items-center gap-4">
              <input type="checkbox" />
              <div className="font-medium">
                Regular reminders of your ongoing mentorships
              </div>
            </div>
            <div className="flex items-center gap-4">
              <input type="checkbox" />
              <div className="font-medium">
                Notifications of mentors on your wishlist
              </div>
            </div>
            <div className="border rounded-md p-1 gap-y-2">
              <button className="">
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* choose your account */}
        <div className="mx-10 my-2   w-full h-full border rounded-md border-gray-400">
          <div className=" flex flex-col items-start p-5 font-semibold ">
            <h2>Choose Your Account</h2>
          </div>
          <div className="flex flex-col items-start px-5 font-normal ">
            Once you delete your account, there’s no going back. Please be
            certain!
          </div>
          {/* delete button */}
          <div className="flex flex-col items-start p-5 font-normal ">
            <button className="bg-red-500 text-white rounded-md p-2 ">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
