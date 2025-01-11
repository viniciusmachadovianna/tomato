const $=(element)=>document.querySelector(element)
function updateDateTime(){
    const now = new Date(),
        weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        months=["January","February","March","April","May","June","July","August","September","October","November","December"];
        document.getElementById('date').textContent=`${months[now.getMonth()].slice(0,3)} ${now.getDate()}, ${now.getFullYear()}`
    document.getElementById('weekTime').textContent=`${weekdays[now.getDay()]} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`
}
updateDateTime();setInterval(updateDateTime,60000)
function tickPomodoro(){
    const pomodoro = document.querySelector('time')
    let MMSS = pomodoro.textContent.split(':')
    let mins = parseInt(MMSS[0])
    let secs = parseInt(MMSS[1])
    if(mins===0&&secs===0){alert('0');return}
    pomodoro.textContent=secs!==0?`${(mins).toString().padStart(2, '0')}:${(secs-1).toString().padStart(2, '0')}`:`${(mins-1).toString().padStart(2, '0')}:59`
}
// setInterval(tickPomodoro,1000)
document.getElementById('startPause').addEventListener('click',()=>{
    const playIcon=document.getElementById('startPause').querySelector('svg'),
        pause = `<rect x="6" y="4" width="4" height="16"></rect>
    <rect x="14" y="4" width="4" height="16"></rect>`,
        play = `<polygon points="5 3 19 12 5 21 5 3"></polygon>`
    playIcon.innerHTML=playIcon.querySelector('polygon')?pause:play
    
})