let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.addEventListener("DOMContentLoaded", function () {
    renderCalendar(currentMonth, currentYear);
    updateMonthYear(currentMonth, currentYear);
});

function renderCalendar(month, year) {
    const calendarContainer = document.getElementById("calendar");
    calendarContainer.innerHTML = "";

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement("div");
        emptyDay.classList.add("day");
        calendarContainer.appendChild(emptyDay);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");
        dayElement.textContent = day;
        calendarContainer.appendChild(dayElement);

        if (day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
            dayElement.classList.add("today");
        }
    }

    apply3DAnimation();
}

function updateMonthYear(month, year) {
    const monthYearElement = document.getElementById("month-year");
    monthYearElement.textContent = monthNames[month] + " " + year;
}

function prevMonth() {
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    if (currentMonth === 11) {
        currentYear -= 1;
    }
    renderCalendar(currentMonth, currentYear);
    updateMonthYear(currentMonth, currentYear);
}

function nextMonth() {
    currentMonth = (currentMonth === 11) ? 0 : currentMonth + 1;
    if (currentMonth === 0) {
        currentYear += 1;
    }
    renderCalendar(currentMonth, currentYear);
    updateMonthYear(currentMonth, currentYear);
}

function apply3DAnimation() {
    const calendarContainer = document.getElementById("calendar");
    calendarContainer.classList.add("animated");

    // Triggering reflow
    void calendarContainer.offsetWidth;

    calendarContainer.style.transform = "rotateY(360deg)";
}
// ... (previous code)

function addEvent() {
    const eventTitle = document.getElementById("eventTitle").value;
    const eventDate = document.getElementById("eventDate").value;
    const eventTime = document.getElementById("eventTime").value;
    const eventReminder = document.getElementById("eventReminder").checked;

    const event = {
        title: eventTitle,
        date: eventDate,
        time: eventTime,
        reminder: eventReminder
    };

    // Add the event to the calendar
    // You can implement your logic to display the event on the calendar

    // Close the modal after adding the event
    closeModal();
}

function openModal() {
    const modal = document.getElementById("addEventModal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("addEventModal");
    modal.style.display = "none";
}


