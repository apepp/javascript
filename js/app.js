///////////////////////////////////
///////////////////////////////////
///////////////////////////////////



// Lesson 1 Objects



// --- Create a JS Object
var myObject = {
  name: 'Adam',
  address: {
    state: 'Florida',
    zip: 1236
  }
};



// --- Change Object Data
myObject.address.state='Exeter';



// --- Access Object Data
var myName = myObject.address;
console.log(myName)



// --- Log the Document Object



///////////////////////////////////
///////////////////////////////////
///////////////////////////////////



// Lesson 2 Dom Functions



// --- Create a paragraph tag
var paragraph = document.createElement('p');



// --- Add text to paragraph
paragraph.textContent='The DOM is the bomb!!!'



// --- Add text to body
document.body.appendChild(paragraph);






///////////////////////////////////
///////////////////////////////////
///////////////////////////////////



// Lesson 3 Event Listeners



// --- Create a DIV element
function fullScreen(element){
  var newDivElement = document.createElement(element);
  // --- Set height of Element
  newDivElement.style.height='100vh';
  // --- Append element to DOM
  document.body.appendChild(newDivElement);
  return newDivElement;
};

function input(inputType, DOMElement, callback){
  // --- Add Event Listener to Element
  DOMElement.addEventListener(inputType, function(event){
    var x = event.clientX;
    var y = event.clientY;
    callback(DOMElement,x,y)
  });
}

function output(element,x,y){
  element.textContent='x='+x+' y='+y;
  element.style.backgroundColor='rgb('+x+','+y+',100)';
};

input('mousemove', fullScreen('main'), output);






///////////////////////////////////
///////////////////////////////////
///////////////////////////////////



// Lesson 5 Create a Hex Clock Part 1
function time(){
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var arr = [hours, minutes, seconds].map(function(num){
    return num < 10 ? '0' + num : String(num);
  });
  hours = arr[0];
  minutes = arr[1];
  seconds = arr [2];

  return hours + minutes + seconds;
}
console.log(time())



// Lesson 6 Create a Hex Clock Part 2
function output(time) {
  var color = '#' + time;
  document.body.style.height = '100vh';
  document.body.style.textAlign = 'center';
  document.body.bgColor = color;
  document.body.textContent = color;
};

function startClick(callback, name){
  document.body.addEventListener('dblclick', function(event){
    callback(name);
  });
};

function stopClick(callback, name){
  document.body.addEventListener('click', function(event){
    callback(name);
  });
};

function init(){

  var tick = setInterval(function(){
    output(time());
  }, 1000);

  stopClick(clearInterval, tick);
  startClick(init);

};

init();
