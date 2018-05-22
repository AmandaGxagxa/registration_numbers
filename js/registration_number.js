function Registration(registrationNumbers) {

  var regMap = registrationNumbers || {};
  var regNum = "";
  // var regNum;


    function addRegNumber(regNumber) {
      //var regStart=['CA','CY','CJ','CK','CL','CAW'];

    if(regNumber != ''){
      if (regMap[regNumber] === undefined) {
        for (var i = 0; i<regNumber.length; i++){
          if(regNumber.startsWith('CA') || regNumber.startsWith('CY') || regNumber.startsWith('CL') || regNumber.startsWith('CK') || regNumber.startsWith('CJ') || regNumber.startsWith('CAW')) {
            regMap[regNumber] = 0;
            return true;

          }
        }
      }
      return false;
    }
  }


  function getRegNum() {
    return regNum;
  }
  function getRegMapKeys() {
    return Object.keys(regMap)
  }

  //function getRegMap


  // function isValid(startWith) {
  //   if (startWith[place].startsWith('CA') || startWith[place].startsWith('CY') || startWith[place].startsWith('CJ') || startWith[place].startsWith('CK') || startWith[place].startsWith('CL') || startWith[place].startsWith('CAW')) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // function filterReg(){
  //
  //   var filteredList = regMap.filter(function(storedReg))
  // }



  //what is the aim of this function ?
  function findFrom(filterFor) {
    var filteredList = [];
    for (var regNumber in regNumbers) {
      if (regNumber.startsWith(filterFor)) {
        filteredList.push(regNumber)
      }
    }
    return filteredList;
  }


  return {
    addRegNumber,
    getRegMapKeys,
    getRegNum
    //findFrom,
    //isValid

    //validation
  };

}
