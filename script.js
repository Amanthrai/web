function showbattery() {
var battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery || navigator.msBattery;
  
    if (battery) {
    alert(battery.level);
  } else  alert("No Battery..");
}