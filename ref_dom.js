var regisInput = document.querySelector(".inputReg");
var addRegBtn = document.querySelector(".btn");
var errorMsgElem = document.querySelector('.errorMsg')
var addResetBtn =  document.querySelector(".btn_reset");
var selectElem = document.querySelector("#myPlaces");

var storedReg = localStorage.getItem('StoredNumbers') ? JSON.parse(localStorage.getItem('StoredNumbers')) : {};
var registration = Registration(storedReg);


function addElements() {

  var input = regisInput.value;
  var currentDiv = document.getElementById('unordered')
  var getRegNum = document.createElement('span');
  var regInput = document.createTextNode(input.toUpperCase());
  console.log(regInput)
  getRegNum.appendChild(regInput);
  currentDiv.appendChild(getRegNum);

}
addResetBtn.addEventListener('click' , function() {
  window.localStorage.clear();
clear(addElements());
})

addRegBtn.addEventListener('click', function() {
  errorMsgElem.innerHTML = '';
  var input = regisInput.value.toUpperCase();
  var flag = registration.addRegNumber(input);
  if(flag){
    addElements();
  }
  else {
 errorMsgElem.innerHTML = 'Please enter a valid registration number';
 errorMsgElem.style.color = "orange";
  }

  localStorage.setItem('StoredNumbers', JSON.stringify(registration.getRegMapKeys()));

});
