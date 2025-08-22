import React from "react";
import "../styles/Emergency.css";

const Emergency = () => {
  const toggleDropdown = () => {
    var dropdownContent = document.getElementById("myDropdown");
    dropdownContent.classList.toggle("show");
  };

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

  return (
    <>
      {/* ------ navbar ------- */}
      <div class="main">
        <nav>
          <a href="index.html">
            <span>
              <img width="53" src="src\assets\images\logo_ns.svg" />
            </span>
          </a>
          <div class="buttons_nav">
            <div class="dropdown" onClick={toggleDropdown}>
              <button class="btn">Features</button>
              <div class="dropdown-content" id="myDropdown">
                <a href="symptom.html">Symptom Checker</a>
                <a href="location.html">Location Tracking</a>
                <a href="emergency.html">Emergency Contact Portal</a>
                <a href="safety.html">Safety Tips</a>
              </div>
            </div>
            <a href="login.html">
              <button class="btn btn-s">Sign In</button>
            </a>
            <a href="#">
              <button class="btn btn-a">About Us</button>
            </a>
          </div>
        </nav>
        <div class="box"></div>
        {/* ------- heading ------- */}
        <div class="heading">
          <span>EMERGENCY CONTACT PORTAL</span>
        </div>
        <div class="seperation"></div>
      </div>

      {/* -- card1 -- */}
      <div class="card1">
        <div class="table">
          <h2>Emergency Numbers</h2>
          <table>
            <thead>
              <tr>
                <td id="c_head">
                  <b>Help Available On</b>
                </td>
                <td>
                  <b>Contact</b>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>National Commission for Women Helpline</td>
                <td>
                  <a href="#">7827170170</a>
                </td>
              </tr>
              <tr>
                <td>Central Social Welfare Board -Police Helpline</td>
                <td>
                  <a href="#">1091/ 1291, (011) 23317004</a>
                </td>
              </tr>
              <tr>
                <td>Shakti Shalini - women's shelter</td>
                <td>
                  <a href="#">(011) 24373736/ 24373737</a>
                </td>
              </tr>
              <tr>
                <td>Mahila Police Station (Domestic Abuse)</td>
                <td>
                  <a href="#">181</a>
                </td>
              </tr>
              <tr>
                <td>Ambulance</td>
                <td>
                  <a href="#">108/102</a>
                </td>
              </tr>
              <tr>
                <td>Fire</td>
                <td>
                  <a href="#">101</a>
                </td>
              </tr>
              <tr>
                <td>COVID-19 Helpline Number</td>
                <td>
                  <a href="#">1800-180-5145</a>
                </td>
              </tr>
              <tr>
                <td>Child Helpline</td>
                <td>
                  <a href="#">1098</a>
                </td>
              </tr>
              <tr>
                <td>LPG Leak Helpline</td>
                <td>
                  <a href="#">1906</a>
                </td>
              </tr>
              <tr>
                <td>Electricity Complaint</td>
                <td>
                  <a href="#">155333</a>
                </td>
              </tr>
              <tr>
                <td>Senior Citizen Helpline</td>
                <td>
                  <a href="#">1091 / 1291</a>
                </td>
              </tr>
              <tr>
                <td>Medical Helpline</td>
                <td>
                  <a href="#">108</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* -- card 2 -- */}
      <div class="card2">
        <form>
          <h2>Add Information of your Contacts</h2>
          <div class="info">
            <label class="ele">Contact Name1</label>
            <input
              class="ele text_input"
              type="text"
              required
              placeholder="Divyasha"
            />
            <label class="ele">Contact Number1</label>
            <input
              class="ele text_input"
              type="text"
              required
              placeholder="Number"
            />
          </div>
          <div class="info">
            <label class="ele">Contact Name2</label>
            <input class="ele text_input" type="text" />
            <label class="ele">Contact Number2</label>
            <input class="ele text_input" type="text" />
          </div>
          <div class="info">
            <label class="ele">Contact Name3</label>
            <input class="ele text_input" type="text" />
            <label class="ele">Contact Number3</label>
            <input class="ele text_input" type="text" />
          </div>
          <div class="buttons">
            <button class="hover_btn" type="submit">
              ADD
            </button>
            <button class="hover_btn" type="submit">
              Reset
            </button>
          </div>
        </form>
      </div>

      {/* -- card 3 -- */}
      <div class="c3">
        <div class="card3">
          <h3>Emergency SOS</h3>
          <p>Press the power button quickly 5 times or more to call for help</p>
          <button class="hover_btn mrg">SOS</button>
        </div>
        <div class="card3">
          <h3>Location Sharing</h3>
          <p>
            By clicking on this button you can share your location with your
            registered contact numbers
          </p>
          <a href="location.html">
            <button class="hover_btn">SHARE</button>
          </a>
        </div>
        <div class="card3">
          <h3>Connect to Your Contact</h3>
          <p>
            By clicking on this button you can call any of your registered
            contact
          </p>
          <button class="hover_btn mrg">CALL</button>
        </div>
      </div>

      {/* -- card 4 -- */}
      <div class="emergencySOS">
        {/* -- <section class="faq"> -- */}
        <h2>Get help during an emergency</h2>
        <div class="faqbox">
          <span class="ques_1">
            Use Emergency SOS to call for help & alert your contacts.
          </span>
          <svg
            id="svg1"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            class="injected-svg"
            data-src="/icons/plus-sign-stroke-rounded.svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            role="img"
            color="#000000"
            onClick={value1}
          >
            <path
              d="M12 4V20M20 12H4"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>

        <div class="faqbox">
          <span class="ques_2">Accidental calls ?</span>
          <svg
            id="svg2"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            class="injected-svg"
            data-src="/icons/plus-sign-stroke-rounded.svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            role="img"
            color="#000000"
            onClick={value2}
          >
            <path
              d="M12 4V20M20 12H4"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>

        <div class="faqbox">
          <span class="ques_3">
            How does adding your contact information works ?
          </span>
          <svg
            id="svg3"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            class="injected-svg"
            data-src="/icons/plus-sign-stroke-rounded.svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            role="img"
            color="#000000"
            onClick={value3}
          >
            <path
              d="M12 4V20M20 12H4"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>

        <div class="faqbox">
          <span class="ques_4">How does Location Sharing works ?</span>
          <svg
            id="svg4"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            class="injected-svg"
            data-src="/icons/plus-sign-stroke-rounded.svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            role="img"
            color="#000000"
            onClick={value4}
          >
            <path
              d="M12 4V20M20 12H4"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>

        {/* -- </section> -- */}
      </div>
    </>
  );
};

export default Emergency;
