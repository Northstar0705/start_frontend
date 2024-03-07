import React, { useEffect, useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";
import FullCalender from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
const events = [
  { title: "event 1", date: "2024-16-02" },
  { title: "event 2", date: "2021-10-02" },
];

const Calender = () => {
  function handleClick(clickInfo) {
    alert(`You clicked on event: ${clickInfo.event.title}`);
  }

  return (
    <div className="flex flex-col w-full">
      <AdminNavbar />
      <div className="flex w-full h-[92vh] overflow-scroll">
        <div className="">
          <AdminSidebar path={"calender"} />
        </div>
        <div className=" w-full h-[92vh] overflow-scroll m-2 ">
          <FullCalender
            plugins={[dayGridPlugin,interactionPlugin]}
            initialView="dayGridMonth"
            weekends={true}
            events={events}
            // eventContent={renderEvent}
            eventClick={handleClick}
            headerToolbar={{
              start: "prev,next today",
              center: "title",
              right: "dayGridMonth",
            }}
            height={"90vh"}
            dateClick={function (arg) {
              alert("date click! " + arg.dateStr);
            }}

          />
        </div>
      </div>
    </div>
  );
};

export default Calender;
