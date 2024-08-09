function updateClock(){
    const now = new Date();
    const hours = String(now.getHours()).padStart(2,'0');
    const minutes = String(now.getMinutes()).padStart(2,'0');
    const seconds = String(now.getSeconds()).padStart(2,'0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').textContent = timeString;

    const days = ['sunday','Monday','tuesday','Wednesday','Thrusday','Friday','Saturday'];
    const months = ['january','ferbuary','March','April','May','June','july','August','September','October','November','December'];


    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth];
    const Day = String(now.getDate()).padStart(2,'0');
    const year = now.getFullYear();


    const datestring = `${dayName}, ${Day} ${monthName}, ${year}`;

    document.getElementById('date').textContent = dateString;
}
 setInterval(updateClock,1000); 
updateClock();