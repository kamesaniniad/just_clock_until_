var endTime = new Date("2023/01/09 00:00:00");
function showClock() {
    var nowTime = new Date();
    var leftTime = endTime - nowTime;
    var leftDay     = Math.floor(leftTime/1000/60/60/24);
    var leftHour    = Math.floor((leftTime/1000/60/60)%24);
    var leftMinute  = Math.floor((leftTime/1000/60)%60);
    var leftSecond  = Math.floor((leftTime/1000)%60);

    var msg = leftDay + "日" + leftHour + "時間" + leftMinute + "分" + leftSecond + "秒";
    document.getElementById("countdown").innerHTML = msg;
}
setInterval('showClock()',1000);