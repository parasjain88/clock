setInterval(() => {
    d = new Date();
    htime = d.getHours();
    minute = d.getMinutes();
    second = d.getSeconds();
    hDeg = (htime * 30) + (minute / 2);
    mDeg = (minute * 6) + (second / 10);
    sDeg = second * 6;

    document.getElementById("hour").style.transform = `rotate(${hDeg}deg)`;
    document.getElementById("minute").style.transform = `rotate(${mDeg}deg)`;
    document.getElementById("second").style.transform = `rotate(${sDeg}deg)`;
}   , 1000);
