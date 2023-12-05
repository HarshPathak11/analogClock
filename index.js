setInterval(()=>{
    var date=new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();

    var hrotate=h*30+m/2;
    var mrotate=m*6;
    var srotate=s*6;
    document.getElementById("second").style.transform=`rotate(${srotate}deg)`;
    document.getElementById("minute").style.transform=`rotate(${mrotate}deg)`;
    document.getElementById("hour").style.transform=`rotate(${hrotate}deg)`;
},1000);
