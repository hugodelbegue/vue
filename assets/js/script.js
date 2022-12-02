// animation of the basket button //
const basket = document.getElementById('basketIcon');
const card = document.querySelectorAll('.basket__button');

// check card value
const cardCheck = () => {
  for (let i = 0; i < card.length; i++) {
    if (card[i].value == 'on') {
      return true;
    }
  }
  return false;
}

// set the color button
const setBasket = () => {
  if (cardCheck()) {
    // button on
    basket.style.color = "#019875";
  } else {
    // button off
    basket.style.color = "initial";
  }
}

// set the properties on click
document.addEventListener('click', setBasket);



// animation of the likes notif //
let input = document.querySelectorAll(".checkbox__state")
let notif = document.getElementById("likes__notif");

// check if the checkbox is ok
const checkboxcheck = () => {
  for (let i = 0; i < input.length; i++) {
    if (input[i].checked) {
      return true;
    }
  }
  return false;
}

// set the properties from red dot
const setNotif = () => {
  if (checkboxcheck()) {
    notif.style.visibility = "visible";
    notif.style.opacity = "1";
  } else {
    notif.style.visibility = "hidden";
    notif.style.opacity = "0";
  }
}

// set the instance before action
setNotif();
// adds event to click 
document.addEventListener('click', setNotif)
