const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const finalDate = document.querySelectorAll('.deadline-format h4');
console.log(finalDate);

//to get the futuredate
const futuredDate = new Date(2021, 10, 24, 3, 30, 0);
//year/month(byt7sb mn el zero fbn3ml -1 dyman ll month ele 3yzeno)/day/hour/minute/seconds
console.log(futuredDate);
const weekday = weekdays[futuredDate.getDay()];
console.log(weekday);
const date = futuredDate.getDate();
console.log(date);
const year = futuredDate.getFullYear();
console.log(year);
const month = months[futuredDate.getMonth()];
console.log(month);
const hour = futuredDate.getHours();
console.log(hour);
const minutes = futuredDate.getMinutes();
console.log(minutes);

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year}, ${hour}:${minutes}am`;

//to get the futuredate in ms
const futureTime = futuredDate.getTime();
console.log(futureTime);

function getRemainingTime() {
  // to get todaydate in ms
  const todayTime = new Date().getTime();
  //to get the differince to countdown
  const t = futureTime - todayTime;
  //lw el wa2t 5s h2olo el8y el interval
  if (t < 0) {
    clearInterval(countDown);
    const deadline = document.querySelector('.deadline');
    deadline.innerHTML = `<h4>sorry this is expired</h4>`;
  }
  //3yz 2shof feh kam youm w sa3a w kda fl ms dol
  //1s=1000ms
  //1m=60s
  //1h=60m
  //1d=24h
  const oneday = 24 * 60 * 60 * 1000;
  const onehour = 60 * 60 * 1000;
  const oneminute = 60 * 1000;
  const days = Math.floor(t / oneday);
  const hours = Math.floor((t % oneday) / onehour);
  const minutes = Math.floor((t % onehour) / oneminute);
  const seconds = Math.floor((t % oneminute) / 1000);
  const finalValues = [days, hours, minutes, seconds];
  // console.log(days);
  // console.log(hours);
  // console.log(minutes);
  // console.log(seconds);
  finalDate.forEach((ele, index) => {
    if (finalValues[index] < 10) {
      ele.textContent = `0${finalValues[index]}`;
    } else {
      ele.textContent = finalValues[index];
    }
  });
}
const countDown = setInterval(getRemainingTime, 1000);
console.log(countDown);
