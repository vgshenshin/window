
const timer = (id, deadline) => {

    function getDate(endtime) {
        const todayMS = new Date().getTime();
        const endtimeMS = new Date(endtime).getTime();
        const result = endtimeMS - todayMS;

        const days = Math.floor((result / 60 / 60 / 1000) / 24);
        const hours = Math.floor((result / 60 / 60 / 1000) % 24);
        const minutes = Math.floor(result / 60 / 1000 % 60);
        const seconds = Math.floor(result / 1000 % 60);

        return {
            result,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function addZero(num) {
        return num < 10 ? `0${num}` : num;
    }

    function renderTimer(selector, endtime) {

        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds');

        const timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {

            const t = getDate(endtime);

            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if(t.result <= 0) {
                days.textContent = "00";
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
    
                clearInterval(timeInterval);
            }
        }
    }

    renderTimer(id, deadline);
};

export default timer;