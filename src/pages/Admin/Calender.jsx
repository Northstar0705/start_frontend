import React, { useEffect, useState } from "react";
import AdminSidebar from "./AdminSidebar";
import Navbar2 from '../../components/Navbar2'
import axios from "axios";
import FullCalender from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"
import Loader from "../../components/Loader";
const events = [
  { title: "event 1", start: new Date(2024, 2, 28, 14, 30, 0), end: new Date(2024, 2, 28, 16, 30, 0) },
  { title: "event 2", start: new Date(2024, 2, 29, 14, 30, 0), end: new Date(2024, 2, 29, 16, 30, 0) },
];

const Calender = () => {
  function handleClick(clickInfo) {
    alert(`You clicked on event: ${clickInfo.event.title}`);
  }
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  return (
    <div className="flex flex-col w-full">
      <Navbar2 path="admin" user={user} setUser={setUser} setLoading={setLoading} />
      <div className="flex w-full h-[92vh] overflow-scroll">
        <div className="">
          <AdminSidebar path={"calender"} user={user} />
        </div>
        {loading && <div className='flex items-center w-full justify-center'>
          <Loader />
        </div>}
        {!loading && <div className=" w-full p-2 h-[92vh] overflow-scroll">
          <FullCalender
            plugins={[timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            weekends={false}
            events={events}
            eventClick={handleClick}
            headerToolbar={{
              start: "prev,next",
              center: "title",
              right: "timeGridWeek,timeGridDay",
            }}
            height={"90vh"}
            dateClick={function (arg) {
              alert("date click! " + arg.dateStr);
            }}

          />
        </div>}
      </div>
    </div>
  );
};

export default Calender;
