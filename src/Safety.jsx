import React from "react";
import logo from "./assets/images/logo_ns.svg";
import './Safety.css';

function Safety() {
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

  return (
    <>
      <div class="main">
        <nav>
          <a href="index.html">
            <span>
              <img width="53" src={logo} />
            </span>
          </a>
          <div class="buttons">
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

        <div class="heading">
          <span>
            SAFETY TIPS & <br /> LEARNING RESOURSES
          </span>
        </div>
        <div class="seperation"></div>
      </div>

      <div class="main1">
        <div class="head1">
          <h1>SAFETY TIPS FOR GIRLS</h1>
        </div>
        <div class="safety">
          <div class="card">
            <h3>Be Aware of Your Surroundings:</h3>
            <ul>
              <li>Stay alert and be aware of what's happening around you.</li>
              <li>
                Avoid distractions like excessive use of headphones or staring
                at your phone while walking in unfamiliar areas.
              </li>
            </ul>
            <img src="https://pbs.twimg.com/media/ComjZH2WEAArdn7.jpg"></img>
          </div>

          <div class="card">
            <h3>Trust Your Instincts:</h3>
            <ul>
              <li>
                If something feels off or uncomfortable, trust your gut feelings
                and take action accordingly.
              </li>
              <li>
                If you feel uneasy about a person or a situation, remove
                yourself from it.
              </li>
            </ul>
            <img src="https://i.pinimg.com/originals/ff/58/97/ff589790fffa367e8aff2da79e43fe67.jpg"></img>
          </div>

          <div class="card">
            <h3>Stay in Well-Lit Areas:</h3>
            <ul>
              <li>Stick to well-lit paths and streets, especially at night.</li>
              <li>Avoid shortcuts through dark alleys or secluded areas.</li>
            </ul>
            <img src="https://thumbs.dreamstime.com/b/primorsky-boulevard-odessa-night-city-has-called-seaside-stretches-along-coast-especially-beautiful-63296581.jpg"></img>
          </div>

          <div class="card">
            <h3>Inform Someone About Your Plans:</h3>
            <ul>
              <li>
                Let someone know where you are going and when you expect to
                return.
              </li>
              <li>
                Share your plans with friends or family members, especially if
                you are going to a new or unfamiliar place.
              </li>
            </ul>
            <img src="https://i.pinimg.com/originals/96/ea/29/96ea29be20b4ab441f971cd57940f677.jpg" />
          </div>

          <div class="card">
            <h3>Use Reliable Transportation:</h3>
            <ul>
              <li>
                When using public transportation, choose well-lit and busy
                stops.
              </li>
              <li>
                If using rideshare services, verify the driver's information
                before getting into the vehicle.
              </li>
            </ul>
            <img src="https://i.ytimg.com/vi/Suf72EYBtvk/hqdefault.jpg"></img>
          </div>

          <div class="card">
            <h3>Have Emergency Contacts:</h3>
            <ul>
              <li>Keep important contacts programmed into your phone.</li>
              <li>
                Memorize emergency numbers, and consider having a list of
                contacts readily accessible in case your phone is unavailable.
              </li>
            </ul>
            <img src="https://th.bing.com/th/id/OIP.dS7TTPbvOrkUGR64T54tRQHaGC?rs=1&pid=ImgDetMain"></img>
          </div>
        </div>
      </div>
      <div class="main2">
        <h1>SELF DEFENSE TECHNIQUES</h1>
        <div class="videos">
          <iframe
            src="https://www.youtube.com/embed/T7aNSRoDCmg?si=4e6b22sUhJlNhDMK"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/9m-x64bKfR4?si=1fKVuRKXir0kliM1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/4iYJDHgMKTU?si=fWl0LL1Sse2LAs1J"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/d3f0MTfp2K0?si=UWQj-u4ly70sVS60"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/KVpxP3ZZtAc?si=njniSLgJ3s8bZ1xl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/k9Jn0eP-ZVg?si=KZInqj9-RQmuGVt-"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Safety;
