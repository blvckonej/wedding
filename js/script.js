document.addEventListener('DOMContentLoaded', () => {
    const weedingDate = new Date('Aug 12 2023 00:00:00');
    
    const daysVal = document.querySelector('.main__block-timer_days .main__block-timer_value');
    const hourseVal = document.querySelector('.main__block-timer_hourse .main__block-timer_value');
    const minutesVal = document.querySelector('.main__block-timer_minutes .main__block-timer_value');
    const secondsVal = document.querySelector('.main__block-timer_seconds .main__block-timer_value');

    const daysText = document.querySelector('.main__block-timer_days .main__block-timer_text');
    const hourseText = document.querySelector('.main__block-timer_hourse .main__block-timer_text');
    const minutesText = document.querySelector('.main__block-timer_minutes .main__block-timer_text');
    const secondsText = document.querySelector('.main__block-timer_seconds .main__block-timer_text');

    function declOfNum(number, titles) {  
        let cases = [2, 0, 1, 1, 1, 2];  
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    }
    
    const timeCount = () => {
        let now = new Date();
        let leftUntil = weedingDate - now;
        
        let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
        let hourse = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
        let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
        let seconds = Math.floor(leftUntil / 1000) % 60;
        
        daysVal.textContent = days;
        hourseVal.textContent = hourse;
        minutesVal.textContent = minutes;
        secondsVal.textContent = seconds;

        if (minutes < 10) {
            return minutesVal.textContent = '0' + minutes;
        }
        if (hourse < 10) {
            return hourseVal.textContent = '0' + hourse;
        }
        if (days < 10) {
            return daysVal.textContent = '0' + days;
        }
        if (seconds < 10) {
            return secondsVal.textContent = '0' + seconds;
        }

        daysText.textContent = declOfNum(days, ['день', 'дней', 'дня']);
        hourseText.textContent = declOfNum(hourse, ['час', 'часа', 'часов']);
        minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
        secondsText.textContent = declOfNum(seconds, ['секунд', 'секунда', 'секунды']);
    };
    timeCount();
    setInterval(timeCount, 1000);
});