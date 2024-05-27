// Get the elements
const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');

const workHours = document.getElementById('work-hours');
const workHoursLW = document.getElementById('work-hours-lw');
const playHours = document.getElementById('play-hours');
const playHoursLW = document.getElementById('play-hours-lw');
const studyHours = document.getElementById('study-hours');
const studyHoursLW = document.getElementById('study-hours-lw');
const exerciseHours = document.getElementById('exercise-hours');
const exerciseHoursLW = document.getElementById('exercise-hours-lw');
const socialHours = document.getElementById('social-hours');
const socialHoursLW = document.getElementById('social-hours-lw');
const personalHours = document.getElementById('personal-hours');
const personalHoursLW = document.getElementById('personal-hours-lw');

// Define variables in the global scope
let workDailyCurrent, 
workDailyPrevious, 
playDailyCurrent, 
playDailyPrevious, 
studyDailyCurrent, 
studyDailyPrevious, 
exerciseDailyCurrent, 
exerciseDailyPrevious, 
socialDailyCurrent, 
socialDailyPrevious, 
personalDailyCurrent, 
personalDailyPrevious;

let workWeeklyCurrent, 
workWeeklyPrevious, 
playWeeklyCurrent, 
playWeeklyPrevious, 
studyWeeklyCurrent, 
studyWeeklyPrevious, 
exerciseWeeklyCurrent, 
exerciseWeeklyPrevious, 
socialWeeklyCurrent, 
socialWeeklyPrevious, 
personalWeeklyCurrent, 
personalWeeklyPrevious;

let workMonthlyCurrent, 
workMonthlyPrevious, 
playMonthlyCurrent, 
playMonthlyPrevious, 
studyMonthlyCurrent, 
studyMonthlyPrevious, 
exerciseMonthlyCurrent, 
exerciseMonthlyPrevious, 
socialMonthlyCurrent, 
socialMonthlyPrevious, 
personalMonthlyCurrent, 
personalMonthlyPrevious;

const fetchData = () => {
    fetch('/Front End Mentor Projects/Time Tracking Dashboard/time-tracking-dashboard-main/time-tracking-dashboard-main/data.json')
        .then((result) => {
            if (!result.ok) {
                throw new Error('There was an error translating the result values');
            }
            return result.json();
        })
        .then((data) => {
            console.log(data);

            //daily
            workDailyCurrent = data[0].timeframes.daily.current;
            workDailyPrevious = data[0].timeframes.daily.previous;

            playDailyCurrent = data[1].timeframes.daily.current;
            playDailyPrevious = data[1].timeframes.daily.previous;

            studyDailyCurrent = data[2].timeframes.daily.current;
            studyDailyPrevious = data[2].timeframes.daily.previous;

            exerciseDailyCurrent = data[3].timeframes.daily.current;
            exerciseDailyPrevious = data[3].timeframes.daily.previous;

            socialDailyCurrent = data[4].timeframes.daily.current;
            socialDailyPrevious = data[4].timeframes.daily.previous;

            personalDailyCurrent = data[5].timeframes.daily.current;
            personalDailyPrevious = data[5].timeframes.daily.previous;

            //weekly
            workWeeklyCurrent = data[0].timeframes.weekly.current;
            workWeeklyPrevious = data[0].timeframes.weekly.previous;

            playWeeklyCurrent = data[1].timeframes.weekly.current;
            playWeeklyPrevious = data[1].timeframes.weekly.previous;

            studyWeeklyCurrent = data[2].timeframes.weekly.current;
            studyWeeklyPrevious = data[2].timeframes.weekly.previous;

            exerciseWeeklyCurrent = data[3].timeframes.weekly.current;
            exerciseWeeklyPrevious = data[3].timeframes.weekly.previous;

            socialWeeklyCurrent = data[4].timeframes.weekly.current;
            socialWeeklyPrevious = data[4].timeframes.weekly.previous;

            personalWeeklyCurrent = data[5].timeframes.weekly.current;
            personalWeeklyPrevious = data[5].timeframes.weekly.previous;

            //monthly
            workMonthlyCurrent = data[0].timeframes.monthly.current;
            workMonthlyPrevious = data[0].timeframes.monthly.previous;

            playMonthlyCurrent = data[1].timeframes.monthly.current;
            playMonthlyPrevious = data[1].timeframes.monthly.previous;

            studyMonthlyCurrent = data[2].timeframes.monthly.current;
            studyMonthlyPrevious = data[2].timeframes.monthly.previous;

            exerciseMonthlyCurrent = data[3].timeframes.monthly.current;
            exerciseMonthlyPrevious = data[3].timeframes.monthly.previous;

            socialMonthlyCurrent = data[4].timeframes.monthly.current;
            socialMonthlyPrevious = data[4].timeframes.monthly.previous;

            personalMonthlyCurrent = data[5].timeframes.monthly.current;
            personalMonthlyPrevious = data[5].timeframes.monthly.previous;

            daily.addEventListener('click', printDailyValues);
            weekly.addEventListener('click', printWeeklyValues);
            monthly.addEventListener('click', printMonthlyValues);
        })
        .catch((error) => {
            console.error('There is an error with the fetch', error);
        });
}

fetchData();

function printDailyValues() {
    workHours.innerText = workDailyCurrent;
    workHoursLW.textContent = workDailyPrevious;
    playHours.textContent = playDailyCurrent;
    playHoursLW.textContent = playDailyPrevious;
    studyHours.textContent = studyDailyCurrent;
    studyHoursLW.textContent = studyDailyPrevious;
    exerciseHours.textContent = exerciseDailyCurrent;
    exerciseHoursLW.textContent = exerciseDailyPrevious;
    socialHours.textContent = socialDailyCurrent;
    socialHoursLW.textContent = socialDailyPrevious;
    personalHours.textContent = personalDailyCurrent;
    personalHoursLW.textContent = personalDailyPrevious;
}

function printWeeklyValues() {
    workHours.textContent = workWeeklyCurrent;
    workHoursLW.textContent = workWeeklyPrevious;
    playHours.textContent = playWeeklyCurrent;
    playHoursLW.textContent = playWeeklyPrevious;
    studyHours.textContent = studyWeeklyCurrent;
    studyHoursLW.textContent = studyWeeklyPrevious;
    exerciseHours.textContent = exerciseWeeklyCurrent;
    exerciseHoursLW.textContent = exerciseWeeklyPrevious;
    socialHours.textContent = socialWeeklyCurrent;
    socialHoursLW.textContent = socialWeeklyPrevious;
    personalHours.textContent = personalWeeklyCurrent;
    personalHoursLW.textContent = personalWeeklyPrevious;
}

function printMonthlyValues() {
    workHours.textContent = workMonthlyCurrent;
    workHoursLW.textContent = workMonthlyPrevious;
    playHours.textContent = playMonthlyCurrent;
    playHoursLW.textContent = playMonthlyPrevious;
    studyHours.textContent = studyMonthlyCurrent;
    studyHoursLW.textContent = studyMonthlyPrevious;
    exerciseHours.textContent = exerciseMonthlyCurrent;
    exerciseHoursLW.textContent = exerciseMonthlyPrevious;
    socialHours.textContent = socialMonthlyCurrent;
    socialHoursLW.textContent = socialMonthlyPrevious;
    personalHours.textContent = personalMonthlyCurrent;
    personalHoursLW.textContent = personalMonthlyPrevious;
}
