// const targetTime = new Date('Jan 11, 2021');
// const now = Date.now();
// const time = targetTime - now;
/* где time - разница между targetDate и текущей датой.
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);

// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
// });

class CountdownTimer {
  constructor({ selector, targetDate,}) {
    this.selector = selector;
    this.targetDate = targetDate;
    
  }
  get days() {
    return Math.floor(
      (this.targetDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
  }
  get hours() {
      return Math.floor(((this.targetDate.getTime() - Date.now()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  }
  get mins() {
      return Math.floor(((this.targetDate.getTime() - Date.now()) % (1000 * 60 * 60)) / (1000 * 60));
  }
  get secs() {
      return Math.floor(((this.targetDate.getTime() - Date.now()) % (1000 * 60)) / 1000);
  }
  get selector(){
      return this._selector;
  }
  set selector(name){
      this._selector = name;
  }
  get targetDate(){
      return this._targetDate;
  }
  set targetDate(date){
       this._targetDate=date;
   }
}

const targetTimer = {
        selector: '#timer-1',
        targetDate: new Date('Jan 12, 2021'),
    }

// const date = new Date('Jan 12, 2021');   
const timer = new CountdownTimer(targetTimer);
// timer.selector = '#timer-2';
// timer.targetDate=date;
// console.dir(timer);
// console.dir(targetTime);
// console.dir(targetTime.getTime());
// console.log(now);
// console.log(time);
// console.log(`Day: ${days} hours: ${hours} mins: ${mins} secs: ${secs}`);
// console.log(`Day: ${timer.days} hours: ${timer.hours} mins: ${timer.mins} secs: ${timer.secs} selector: ${timer.selector} `);
// console.dir(document.querySelector(timer.selector+' [data-value="days"]'));

const refs = {
    days: document.querySelector(timer.selector+' [data-value="days"]'),
    hours: document.querySelector(timer.selector+' [data-value="hours"]'),
    mins: document.querySelector(timer.selector+' [data-value="mins"]'),
    secs: document.querySelector(timer.selector+' [data-value="secs"]'),
}
// console.dir(timer['days']);

const countDown = () =>{
    for (const ref in refs){
        refs[ref].textContent = timer[ref];
        // console.dir(timer[ref]);
        // console.dir(refs[ref].textContent);
    }
}
// set time after page load then update every 1 sec
countDown();
const dayLast = setInterval(countDown, 1000);

