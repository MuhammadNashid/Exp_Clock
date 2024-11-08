const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function updateClock() {
  const hour = document.getElementById('hour').value;
  const minute = document.getElementById('minute').value;
  const date = document.getElementById('date').value;
  const month = document.getElementById('month').value;
  const day = document.getElementById('day').value;

  const currentDate = new Date(2024, month, date, hour, minute);
  const correctDay = daysOfWeek[currentDate.getDay()];
  const inputDay = day;

  document.getElementById('output').innerHTML = `
    <p><strong>Time:</strong> ${hour}:${minute}</p>
    <p><strong>Date:</strong> ${date} ${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][month]}</p>
    <p><strong>Day:</strong> ${correctDay}</p>
    <p><strong>Is Day Correct?</strong> ${correctDay === inputDay ? 'Yes' : 'No'}</p>
  `;
}















































































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