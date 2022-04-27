// Your code here
function saturdayFun (activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective (highlight = "*") {
  return function (adjective = "special") {
    return `You are ${highlight}${adjective}${highlight}!`;
  };
}

let Calculator = {
  add : function() {
    return 1 + 3; 
  },
  subtract : function() {
    return 1 - 3;
  },
  multiply : function () {
    return 1 * 3;
  },
  divide : function() {
    return 10 / 5;
  }
};

function actionApplyer (startInt, array) {
  let a = startInt;
  for (let i = 0; i < array.length; i++) {
    a = array[i](a)
  }

  return a
}