// document.addEventListener('DOMContentLoaded', function () {
  var regisInput = document.querySelector(".inputReg");
  var addRegBtn = document.querySelector(".btn");
  var errorMsgElem = document.querySelector('.errorMsg');
  var addResetBtn =  document.querySelector(".btn_reset");
  var errorMsg2Elem = document.querySelector('.errorMsg2');
  var displayElem = document.querySelector('.regNum');
  var dropDownElem = document.querySelector('.dropDown');
  var display = document.getElementById('unordered');
  var storedReg = localStorage.getItem('StoredNumbers') ? JSON.parse(localStorage.getItem('StoredNumbers')) : {};
  var registration = Registration(storedReg );
  //JSON.parse(localStorage.getItem(key))

  function addElements(input) {
    //var input = regisInput.value;
    var span = document.createElement('span');
    span.textContent = input;
    display.appendChild(span);
  }

  addRegBtn.addEventListener('click', function() {
    var input = regisInput.value.toUpperCase();
    var regex = /^[A-Z]{2,3}\s\d{3}\W\d{3}$/;
    var matchReg = input.match(regex);

    regisInput.value = "";
    errorMsgElem.innerHTML = '';

  if(matchReg !==null ){
    var flag = registration.addRegNumber(matchReg[0]);
   if (flag) {
     addElements(matchReg[0]);
       localStorage.setItem('StoredNumbers', JSON.stringify(registration.getRegMapKeys()));
   }
    else {
      console.log("found");
        errorMsgElem.innerHTML ="this registration number is already stored or this does not start with CA,CJ,CK,CY & CAW "
        errorMsgElem.style.color = 'orange';
    }

  }
  if(matchReg == null || matchReg == ""){
  errorMsgElem.innerHTML ="You have been entered an invalid registration number <i>the format is CA 123-123</i>"
    errorMsgElem.style.color = 'orange';
  console.log("yes")

}
  });
  window.addEventListener('load', function(){
    var loadPage = registration.getRegMapKeys();

    for (var i = 0; i < loadPage.length; i++) {
      addElements(loadPage[i]);
    }
  });

  addResetBtn.addEventListener('click' , function() {
    localStorage.clear();
    displayElem.innerHTML = '';
  });

dropDownElem.addEventListener('change', function(){
  console.log(dropDownElem.value);
  var filter = registration.findFrom(dropDownElem.value);

  display.innerHTML = "";

  if (filter.length  > 0) {
    for (var i = 0; i < filter.length; i++) {
      addElements(filter[i]);
    }
  }
});
