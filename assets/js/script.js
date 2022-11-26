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

const checkboxcheck = () => {
  for (let i = 0; i < input.length; i++) {
    if (input[i].checked) {
      return true;
    }
  }
  return false;
}

const setNotif = () => {
  if (checkboxcheck()) {
    notif.style.visibility = "visible";
    notif.style.opacity = "1";
  } else {
    notif.style.visibility = "hidden";
    notif.style.opacity = "0";
  }
}

setNotif();
document.addEventListener('click', setNotif)

    // .forEach((cs) => {
    //   cs.addEventListener('input', (e) => {
    //     if (e.currentTarget.checked) {
    //       console.log(e.currentTarget.checked = true)
    //       notif.style.visibility = "visible";
    //       notif.style.opacity = "1";
    //       console.log('oui')
    //     } else {
    //       notif.style.visibility = "hidden";
    //       notif.style.opacity = "0";
    //       console.log('non')
    //     }
    //   })
    // })
