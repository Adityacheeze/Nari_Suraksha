import React, { useState, useRef, useEffect } from "react";
import logo from "./assets/images/logo_ns.svg";
import "./styles/Symptom.css";

const Symptom = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(
    "This is an approximate answer; for accurate information, consult relevant sources."
  );
  const [history, setHistory] = useState([]);

  const API_KEY = "sk-xxxx"; // ⚠️ replace with a safe key or move to backend

  const dropdownRef = useRef(null);

  // Toggle dropdown
  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Handle API call
  const getMessage = async (e) => {
    e.preventDefault();

    const prompt = `in the form of a comma separated value give me possible diseases that i might have, my symptoms are : ${input}, the response should only comprise of 5 diseases and nothing else;`;

    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 200,
      }),
    };

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", options);
      const data = await res.json();
      const answer = data.choices?.[0]?.message?.content || "No response received.";
      setOutput(answer);
      setHistory((prev) => [...prev, input]);
    } catch (err) {
      console.error(err);
      setOutput("Error fetching response. Please try again.");
    }
  };

  const clearInput = () => setInput("");

  return (
    <>
      <div className="main">
        <nav>
          <a href="index.html">
            <span>
              <img width="53" src={logo} alt="Logo" />
            </span>
          </a>

          <div className="buttons">
            <div className="dropdown" ref={dropdownRef}>
              <button type="button" className="btn" onClick={toggleDropdown}>
                Features
              </button>
              <div
                className={`dropdown-content ${dropdownOpen ? "show" : ""}`}
                id="myDropdown"
              >
                <a href="symptom.html">Symptom Checker</a>
                <a href="location.html">Location Tracking</a>
                <a href="emergency.html">Emergency Contact Portal</a>
                <a href="safety.html">Safety Tips</a>
              </div>
            </div>

            <a href="login.html">
              <button className="btn btn-s">Sign In</button>
            </a>
            <button className="btn btn-a">About Us</button>
          </div>
        </nav>

        <div className="box"></div>

        <div className="heading">
          <span>SYMPTOM CHECKER</span>
        </div>
      </div>

      <div className="separation"></div>

      <div className="main1">
        <div className="card1">
          <div className="form">
            <form onSubmit={getMessage}>
              <label htmlFor="question">Your Question :</label>
              <input
                type="text"
                className="input"
                id="question"
                name="question"
                placeholder="Ask a question"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                required
              />
              <br />
              <br />
              <button type="submit" id="submit">
                ASK
              </button>
              <button type="button" id="btn2" onClick={clearInput}>
                CLEAR
              </button>
            </form>
          </div>
        </div>

        <div className="card2">
          <h2>Answer</h2>
          <div className="output">
            <span id="output">{output}</span>
          </div>
        </div>
      </div>

      <div className="history">
        <h3>History</h3>
        {history.map((item, i) => (
          <p key={i} onClick={() => setInput(item)}>
            {item}
          </p>
        ))}
      </div>
    </>
  );
};

export default Symptom;
