// document.addEventListener('DOMContentLoaded', function () {
var regisInput2 = document.querySelector(".inputReg2");
var addRegBtn2 = document.querySelector(".btn2");
var errorMsgElem1 = document.querySelector('.errorMsg1');
var addResetBtn2 = document.querySelector(".btn_reset2");
var errorMsg2Elem2 = document.querySelector('.errorMsg2');
var displayElem2 = document.querySelector('.regNum');
var dropDownElem2 = document.querySelector('.dropDown2');
var display2 = document.getElementById('unordered2');

var getRegistrationTemplate = document.querySelector('.regNumTemplate').innerHTML
var compileRegTemplate = Handlebars.compile(getRegistrationTemplate)
var insertMyDataAt = document.querySelector('.regNum2')

var storedReg2 = localStorage.getItem('StoredNumbers2') ? JSON.parse(localStorage.getItem('StoredNumbers2')) : {};
var registration2 = Registration(storedReg2);

addRegBtn2.addEventListener('click', function() {
  // regDisplayTemplate()
  var input = regisInput2.value.toUpperCase();
  var regex = /^[A-Z]{2,3}\s\d{3}\W\d{3}$/;
  var matchReg = input.match(regex);

  regisInput.value = "";
  errorMsgElem1.innerHTML = '';

  if (matchReg !== null) {
    var flag = registration2.addRegNumber(matchReg[0]);

    var regdata = {
      registration: registration2.getMapArray(),
    }
    var regData = compileRegTemplate(regdata)
    insertMyDataAt.innerHTML = regData;

    if (flag) {
      // regDisplayTemplate(matchReg[0]);
      localStorage.setItem('StoredNumbers2', JSON.stringify(registration2.getRegMapKeys()));
    } else {
      console.log("found");
      errorMsgElem1.innerHTML = "this registration number is already stored or this does not start with CA,CJ,CK,CY & CAW "
      errorMsgElem1.style.color = 'orange';
    }

  }
  if (matchReg == null || matchReg == "") {
    errorMsgElem1.innerHTML = "You have been entered an invalid registration number <i>the format is CA 123-123</i>"
    errorMsgElem1.style.color = 'orange';
    console.log("yes")

  }
});


window.addEventListener('load', function() {

  // TODO: create a variable that store values in the templatejavascript
  // TODO:
  var regdata = {
    registration: registration2.getMapArray(),
  }
  var regData = compileRegTemplate(regdata)
  insertMyDataAt.innerHTML = regData;
  var loadPage = registration2.getRegMapKeys();

  for (var i = 0; i < loadPage.length; i++) {
    loadPage[i];
  }
});

addResetBtn2.addEventListener('click', function() {
  localStorage.clear();
  displayElem2.innerHTML = '';
});

dropDownElem2.addEventListener('change', function() {
  var filter2 = registration2.findFrom(dropDownElem2.value);
  var regdata = {
    registration: filter2,
  }
  var regData = compileRegTemplate(regdata)
  insertMyDataAt.innerHTML = regData;
});
