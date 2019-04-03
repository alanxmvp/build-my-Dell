
$(document).ready(function () {
  var x = screen.width;
  var y = screen.height;
  // document.getElementById("demo").innerHTML = x;
});

function nextPage() {
  var x = document.getElementById("firstPage");
  var y = document.getElementById("secondPage");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}

function getScreen() {
  var screenOption = ""
  if (document.getElementById('Screen1').checked) {
    screenOption = document.getElementById('Screen1').value
  } else if (document.getElementById('Screen2').checked) {
    screenOption = document.getElementById('Screen2').value
  } else if (document.getElementById('Screen3').checked) {
    screenOption = document.getElementById('Screen3').value
  }
  document.getElementById('screenRes').innerHTML = screenOption
}

function getRam() {
  var ramOption = ""
  if (document.getElementById('ram1').checked) {
    ramOption = document.getElementById('ram1').value
  } else if (document.getElementById('ram2').checked) {
    ramOption = document.getElementById('ram2').value
  }

  document.getElementById('ramMemory').innerHTML = ramOption
}

function getHDD() {
  var hddOption = ""
  if (document.getElementById('hdd1').checked) {
    hddOption = document.getElementById('hdd1').value
  } else if (document.getElementById('hdd2').checked) {
    hddOption = document.getElementById('hdd2').value
  } else if (document.getElementById('hdd3').checked) {
    hddOption = document.getElementById('hdd3').value
  } else if (document.getElementById('hdd4').checked) {
    hddOption = document.getElementById('hdd4').value
  }
  document.getElementById('sizeHDD').innerHTML = hddOption
}

function getCPU() {
  var cpuOption = ""
  if (document.getElementById('cpu1').checked) {
    cpuOption = document.getElementById('cpu1').value
  } else if (document.getElementById('cpu2').checked) {
    cpuOption = document.getElementById('cpu2').value
  } else if (document.getElementById('cpu3').checked) {
    cpuOption = document.getElementById('cpu3').value
  }
  document.getElementById('processor').innerHTML = cpuOption
}
