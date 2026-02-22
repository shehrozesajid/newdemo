import React from 'react';

function Timetable() {
  return (
    <div className="container timetable-container" id="a18">
      <h1 className="timetable-heading text-center">RS Skills Hub – Weekly Time Table</h1>

      <table className="text-white table table-bordered table-striped" id="a20">
        <thead>
          <tr id="a19">
            <th>Day</th>
            <th>Course</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Monday</td><td>Slot Available</td><td>10am – 12pm</td></tr>
          <tr><td>Monday</td><td>Web Development</td><td>12pm – 2pm</td></tr>
          <tr><td>Monday</td><td>Slot Available</td><td>2pm – 4pm</td></tr>
          <tr><td>Monday</td><td>Slot Available</td><td>4pm – 6pm</td></tr>
          <tr><td>Monday</td><td>Slot Available</td><td>6pm – 8pm</td></tr>

          <tr><td>Tuesday</td><td>Slot Available</td><td>10am – 12pm</td></tr>
          <tr><td>Tuesday</td><td>Web Development</td><td>12pm – 2pm</td></tr>
          <tr><td>Tuesday</td><td>Slot Available</td><td>2pm – 4pm</td></tr>
          <tr><td>Tuesday</td><td>Slot Available</td><td>4pm – 6pm</td></tr>
          <tr><td>Tuesday</td><td>Slot Available</td><td>6pm – 8pm</td></tr>

          <tr><td>Wednesday</td><td>Slot Available</td><td>10am – 12pm</td></tr>
          <tr><td>Wednesday</td><td>Web Development</td><td>12pm – 2pm</td></tr>
          <tr><td>Wednesday</td><td>Slot Available</td><td>2pm – 4pm</td></tr>
          <tr><td>Wednesday</td><td>Slot Available</td><td>4pm – 6pm</td></tr>
          <tr><td>Wednesday</td><td>Slot Available</td><td>6pm – 8pm</td></tr>

          <tr><td>Thursday</td><td>Web Development</td><td>10am – 12pm</td></tr>
          <tr><td>Thursday</td><td>YouTube Automation</td><td>12pm – 2pm</td></tr>
          <tr><td>Thursday</td><td>Digital Marketing</td><td>2pm – 4pm</td></tr>
          <tr><td>Thursday</td><td>YouTube Automation</td><td>4pm – 6pm</td></tr>
          <tr><td>Thursday</td><td>Slot Available</td><td>6pm – 8pm</td></tr>

          <tr><td>Friday</td><td>Web Development</td><td>10am – 12pm</td></tr>
          <tr><td>Friday</td><td>YouTube Automation</td><td>12pm – 2pm</td></tr>
          <tr><td>Friday</td><td>Digital Marketing</td><td>2pm – 4pm</td></tr>
          <tr><td>Friday</td><td>YouTube Automation</td><td>4pm – 6pm</td></tr>
          <tr><td>Friday</td><td>Slot Available</td><td>6pm – 8pm</td></tr>

          <tr><td>Saturday</td><td>Web Development</td><td>10am – 12pm</td></tr>
          <tr><td>Saturday</td><td>YouTube Automation</td><td>12pm – 2pm</td></tr>
          <tr><td>Saturday</td><td>Digital Marketing</td><td>2pm – 4pm</td></tr>
          <tr><td>Saturday</td><td>YouTube Automation</td><td>4pm – 6pm</td></tr>
          <tr><td>Saturday</td><td>Slot Available</td><td>6pm – 8pm</td></tr>

          <tr className="off-day">
            <td>Sunday</td>
            <td colSpan="2">OFF DAY</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Timetable;
