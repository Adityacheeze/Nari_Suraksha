function toggleDropdown() {
  var dropdownContent = document.getElementById("myDropdown");
  dropdownContent.classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".btn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

let svg_click_1 = document.getElementById("svg1");
let svg_click_2 = document.getElementById("svg2");
let svg_click_3 = document.getElementById("svg3");
let svg_click_4 = document.getElementById("svg4");

svg_click_1.addEventListener("click", (event) => {
  event.preventDefault();
  value1();
});

const value1 = () => {
  document.querySelector(".ques_1").innerHTML = `<div class = "ans_1">  
  <span>Use Emergency SOS to call for help & alert your contacts.</span> 
  <svg id = "cross_1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="/icons/cancel-01-stroke-rounded.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
  <path d="M19 5L5 19M5 5L19 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
  </div>
  <p>Important: You won't be able to share your real-time location with your emergency contacts unless you have a Wi-Fi or mobile network internet connection.

  If you're in an emergency situation, you can use your phone to start emergency actions like calling for help, sharing your location with your emergency contacts, and recording video.
  <ul>
  <li> On your phone, press the power button 5 times or more.</li>
  <li> Depending on your settings, touch and hold inside the red circle for 3 seconds or wait for the automatic countdown to start the emergency call.</li>
  <li> After you start an emergency call, other emergency actions begin based on your settings.</li>
  </ul>
  Important: If you turned on Emergency Sharing and video recording, these actions will start while your call is placed to emergency services.</p>`;

  svg_click_1.classList.add("hide");
  let svg_cross_1 = document.getElementById("cross_1");

  svg_cross_1.addEventListener("click", (event) => {
    event.preventDefault();
    svg_click_1.classList.remove("hide");
    document.querySelector(".ques_1").outerHTML = `
    <span class = "ques_1">Emergency SOS to call for help & alert your contacts.</span>      
    `;
  });
};

svg_click_2.addEventListener("click", (event) => {
  event.preventDefault();
  value2();
});

const value2 = () => {
  document.querySelector(".ques_2").innerHTML = `
  <div class = "ans_1">  
  <span>Accidental calls ?</span> 
  <svg id = "cross_2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="/icons/cancel-01-stroke-rounded.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
  <path d="M19 5L5 19M5 5L19 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
  </div>
  <p>If you place a call to emergency services by mistake, do not hang up. Tell the emergency operator that the call was accidental and that you do not need assistance.</p>`;

  svg_click_2.classList.add("hide");
  let svg_cross_2 = document.getElementById("cross_2");

  svg_cross_2.addEventListener("click", (event) => {
    event.preventDefault();
    svg_click_2.classList.remove("hide");
    document.querySelector(".ques_2").outerHTML = `
    <span class = "ques_2">Accidental calls ?</span>      
    `;
  });
};

svg_click_3.addEventListener("click", (event) => {
  event.preventDefault();
  value3();
});

const value3 = () => {
  document.querySelector(".ques_3").innerHTML = `
  <div class = "ans_1">  
  <span>How does adding your contact information works ?</span> 
  <svg id = "cross_3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="/icons/cancel-01-stroke-rounded.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
  <path d="M19 5L5 19M5 5L19 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
  </div>
  <p>Adding of your contacts numbers can help you when you click on the CALL button ,it will automatically call to those contacts and send an SMS of alert to them.</p>`;

  svg_click_3.classList.add("hide");
  let svg_cross_3 = document.getElementById("cross_3");

  svg_cross_3.addEventListener("click", (event) => {
    event.preventDefault();
    svg_click_3.classList.remove("hide");
    document.querySelector(".ques_3").outerHTML = `
    <span class = "ques_3">How does adding your contact information works ?</span>      
    `;
  });
};

svg_click_4.addEventListener("click", (event) => {
  event.preventDefault();
  value4();
});

const value4 = () => {
  document.querySelector(".ques_4").innerHTML = `
  <div class = "ans_1">  
  <span>How does Location Sharing works ?</span> 
  <svg id = "cross_4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="/icons/cancel-01-stroke-rounded.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
  <path d="M19 5L5 19M5 5L19 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
  </div>
  <p>The portal helps you to share your location with your registered contact and help them know where are you whenever you are in danger.</p>`;
  svg_click_4.classList.add("hide");
  let svg_cross_4 = document.getElementById("cross_4");

  svg_cross_4.addEventListener("click", (event) => {
    event.preventDefault();
    svg_click_4.classList.remove("hide");
    document.querySelector(".ques_4").outerHTML = `
    <span class = "ques_4">How does Location Sharing works ?</span>      
    `;
  });
};
