const questions = {
1: {
q: "Calculate the EAN of [X(NH₃)₆]³⁺",
options: ["A. 34", "B. 36", "C. 38", "D. 40"]
},

2: {
q: "Does [X(NH₃)₆]³⁺ obey the EAN rule?",
options: ["A. Yes, EAN = 36", "B. No, EAN = 34", "C. Yes, EAN = 38", "D. No, EAN = 40"]
},

3: {
q: "Calculate the EAN of [X(CN)₆]⁴⁻",
options: ["A. 34", "B. 35", "C. 36", "D. 38"]
},

4: {
q: "Does [X(CN)₆]⁴⁻ obey the EAN rule?",
options: ["A. Yes", "B. No", "C. Sometimes", "D. Cannot determine"]
},

5: {
q: "Calculate the EAN of [X(CO)₄]",
options: ["A. 34", "B. 36", "C. 38", "D. 40"]
},

// (repeat same pattern for the rest — I can extend later if you want)
};

function showQuestion() {
  const num = document.getElementById("qNumber").value;
  const display = document.getElementById("questionText");

  const data = questions[num];

  if (!data) {
    display.innerHTML = "❌ Enter number 1–20!";
    return;
  }

  display.innerHTML =
    `<div class="q">${data.q}</div>
     <div class="opt">${data.options.join("<br>")}</div>`;
}
