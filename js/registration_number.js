function Registration(registrationNumbers) {

  var regMap = registrationNumbers || {};
  var regNum = "";
  // var regNum;


  function addRegNumber(regNumber) {
    if (regNumber != '') {
      if(regNumber){
        regNum=regNumber;

      if (regMap[regNum] === undefined) {
        for (var i = 0; i < regNumber.length; i++) {
          if (regNumber.startsWith('CA') || regNumber.startsWith('CY') || regNumber.startsWith('CL') || regNumber.startsWith('CK') || regNumber.startsWith('CJ') || regNumber.startsWith('CAW')) {
            regMap[regNumber] = 0;
            return true;
          }
        }
      }
      return false;
    }
  }
  }
  function getRegNum() {
    return regNum;
  }
  //console.log(getRegNumber());

  function getRegMapKeys() {
    return regMap
  }
  function findFrom(filterFor) {
    var filteredList = [];
    for (var regNumber in regMap) {
      if (regNumber.startsWith(filterFor)) {
        filteredList.push(regNumber)
      }
    }
    return filteredList;
  }
  return {
    addRegNumber,
    getRegMapKeys,
    getRegNum,
    findFrom
    //getRegNumber
    //isValid

    //validation
  };

}
