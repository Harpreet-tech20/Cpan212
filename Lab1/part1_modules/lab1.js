const _ = require('lodash');
const dayjs = require('dayjs');

const holidays = [
    { name: "Christmas", date: "2025-12-25" },
    { name: "Canada Day", date: "2025-07-01" },
    { name: "New Year", date: "2026-01-01" }
];

const today = dayjs();

holidays.forEach(holiday => {
    const holidayDate = dayjs(holiday.date);
    const daysUntil = holidayDate.diff(today, 'day');
    console.log(`${holiday.name} is in ${daysUntil} days.`); 
});

const randomHoliday = _.sample(holidays);
console.log(`Random Holiday: ${randomHoliday.name} on ${randomHoliday.date}`);

const names = holidays.map(h => h.name);
console.log(`Index of Christmas: ${_.indexOf(names, "Christmas")}`);
console.log(`Index of Canada Day: ${_.indexOf(names, "Canada Day")}`);
