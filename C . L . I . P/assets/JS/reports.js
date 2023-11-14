let thisDate = document.querySelector('#thisDate');
let thisWeek = document.querySelector('#thisWeek');
let thisMonth = document.querySelector('#thisMonth');
let thisYear = document.querySelector('#thisYear');
let date = new Date();

let todaysDateOptions = {month: 'long', day: 'numeric' };
let monthOptions = { month: 'long' };
let yearOptions = { year: 'numeric' };

// Get the current day of the week (0-6, 0 is Sunday)
let dayOfWeek = date.getDay();

// Calculate the date for the start of the week (Thursday)
let startOfWeek = new Date(date.getFullYear(), date.getMonth(), date.getDate() - dayOfWeek + (dayOfWeek < 4 ? -6 : 0) + 3);

// Calculate the date for the end of the week (Wednesday)
let endOfWeek = new Date(date.getFullYear(), date.getMonth(), date.getDate() - dayOfWeek + (dayOfWeek > 3 ? 10 : 0) + 3);

let formattedStart = startOfWeek.toLocaleDateString("en-US", { year: 'numeric', month: '2-digit', day: '2-digit' });
let formattedEnd = endOfWeek.toLocaleDateString("en-US", { year: 'numeric', month: '2-digit', day: '2-digit' });

thisDate.innerText = date.toLocaleDateString("en-US", todaysDateOptions);
thisWeek.innerText = `${formattedStart} - ${formattedEnd}`;
thisMonth.innerText = date.toLocaleDateString("en-US", monthOptions);
thisYear.innerText = date.toLocaleDateString('en-US', yearOptions);
