// animation of the basket button //
// get container button
const card = document.querySelectorAll('.basket__container').forEach((cc) => {
  // get button
  cc.querySelectorAll('.basket__button').forEach((bc) => {
    bc.addEventListener('click', () => {
      // set the properties on click
      // button on
      if (bc.value === 'on') {
        bc.value = 'off';
        bc.style.transition = "all .25s";
        bc.style.transform = "scale(1)"
        bc.querySelectorAll('.bi-cart-fill').forEach((bcf) => {
          bcf.style.color = "initial"
        })
        // button off
      } else {
        bc.value = 'on';
        bc.style.transition = "all .25s";
        bc.style.transform = "scale(1.2)"
        bc.querySelectorAll('.bi-cart-fill').forEach((bcf) => {
          bcf.style.color = "#019875"
        })
      }
    })
  });
});

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
