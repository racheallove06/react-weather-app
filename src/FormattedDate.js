import React, { useState } from "react";

export default function FormattedDate() {
  const [day, setDay] = useState(); // Initialize day state

  let currentTime = new Date();
  let currenthour = currentTime.getHours();
  if (currenthour < 10) {
    currenthour = `0${currenthour}`;
  }
  let currentminute = currentTime.getMinutes();
  if (currentminute < 10) {
    currentminute = `0${currentminute}`;
  }

  const currentDay = currentTime.getDay(); // Get the day of the week
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const formattedDay = days[currentDay]; // Get the formatted day

  return (
    <div>
      {formattedDay} {currenthour}:{currentminute}
    </div>
  );
}
