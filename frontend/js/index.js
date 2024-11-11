document.addEventListener('DOMContentLoaded', function() {
  populateHour();
  populateMinute();
  populateDate();
  populateDay();
  populateMonth();
});
function populateHour() {
  const hourSelect = document.getElementById('hour');
  for (let i = 0; i < 24; i++) {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = i < 10 ? '0' + i : i;
      hourSelect.appendChild(option);
  }
}
function populateMinute() {
  const minuteSelect = document.getElementById('minute');
  for (let i = 0; i < 60; i++) {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = i < 10 ? '0' + i : i;
      minuteSelect.appendChild(option);
  }
}
function populateDate() {
  const dateSelect = document.getElementById('date');
  for (let i = 1; i <= 31; i++) {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = i;
      dateSelect.appendChild(option);
  }
}
function populateDay() {
  const daySelect = document.getElementById('day');
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  days.forEach((day, index) => {
      const option = document.createElement('option');
      option.value = day;
      option.textContent = day;
      daySelect.appendChild(option);
  });
}
function populateMonth() {
  const monthSelect = document.getElementById('month');
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  months.forEach((month, index) => {
      const option = document.createElement('option');
      option.value = month;
      option.textContent = month;
      monthSelect.appendChild(option);
  });
}































// const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


// function updateClock() {
//   const hour = document.getElementById('hour').value;
//   const minute = document.getElementById('minute').value;
//   const date = document.getElementById('date').value;
//   const month = document.getElementById('month').value;
//   const day = document.getElementById('day').value;

//   const currentDate = new Date(2024, month, date, hour, minute);
//   const correctDay = daysOfWeek[currentDate.getDay()];
//   const inputDay = day;

//   document.getElementById('output').innerHTML = `
//     <p><strong>Time:</strong> ${hour}:${minute}</p>
//     <p><strong>Date:</strong> ${date} ${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][month]}</p>
//     <p><strong>Day:</strong> ${correctDay}</p>
//   `;
// }















































































// function populateDropdown(id, start, end, format) {
//     let select = document.getElementById(id);
//     for (let i = start; i <= end; i++) {
//         let option = document.createElement("option");
//         option.value = i;
//         option.textContent = format ? format(i) : i;
//         select.appendChild(option);
//     }
// }

// function submitDateTime() {
//     let hour = document.getElementById("hour").value;
//     let minute = document.getElementById("minute").value;
//     let day = document.getElementById("day").value;
//     let month = document.getElementById("month").value;
//     let year = document.getElementById("year").value;
//     if (!hour || !minute || !day || !month || !date) return alert("Select all values.");
//     let date = new Date(date, month - 1, day-7, hour, minute);
//     document.getElementById("result").innerHTML = `Selected Date and Time: ${date}`;
// }

// window.onload = function() {
//     populateDropdown("hour", 0, 23, i => i.toString().padStart(2, "0"));
//     populateDropdown("minute", 0, 59, i => i.toString().padStart(2, "0"));
//     populateDropdown("date", 1, 31);
//     populateDropdown("month", 1, 12, i => new Date(0, i - 1).toLocaleString('en', { month: 'long' }));
//     populateDropdown("day", 0,6, new Date().getDate());
// };