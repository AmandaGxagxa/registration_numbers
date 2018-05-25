document.addEventListener('DOMContentLoaded', function () {
  var regisInput = document.querySelector(".inputReg");
  var addRegBtn = document.querySelector(".btn");
  var errorMsgElem = document.querySelector('.errorMsg')
  var addResetBtn =  document.querySelector(".btn_reset");
  //var selectElem = document.querySelector(".myPlaces");
  var displayElem = document.querySelector('.regNum');
  var dropDownElem = document.querySelector('.dropDown')
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
  addResetBtn.addEventListener('click' , function() {
    window.localStorage.clear();
    displayElem.innerHTML = '';
  })
  addRegBtn.addEventListener('click', function() {
    var input = regisInput.value.toUpperCase();
    regisInput.value = "";
    errorMsgElem.innerHTML = '';
    var flag = registration.addRegNumber(input);
    if(flag){
      addElements(input);
      localStorage.setItem('StoredNumbers', JSON.stringify(registration.getRegMapKeys()));
    }
    else {
   errorMsgElem.innerHTML = 'Please enter a valid registration number';
   errorMsgElem.style.color = "orange";
    }

  });
  window.addEventListener('load', function(){
    var loadPage = registration.getRegMapKeys();

    for (var i = 0; i < loadPage.length; i++) {
      addElements(loadPage[i])
    }
  })

  dropDownElem.addEventListener('change', function(){
    console.log('Chnged');
    var filter = registration.findFrom(dropDownElem.value);
    display.innerHTML = "";

    if (filter.length  > 0) {
      for (var i = 0; i < filter.length; i++) {
        addElements(filter[i]);
      }
    }
  });

});
