let id=prompt("Lütfen adinizi giriniz");

function clock(){
    let myName=document.querySelector("#myName");
    myName.innerHTML=id;

    let myClock=document.querySelector("#myClock");
    let date=new Date();
    let days=["Pazartesi","Sali","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
    myClock.innerHTML =` ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${days[date.getDay()]}`;
}
setInterval(clock,1000);