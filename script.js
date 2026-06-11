const questions = {
  1: "Calculate the EAN of [X(NH₃)₆]³⁺",
  2: "Does [X(NH₃)₆]³⁺ obey the EAN rule?",
  3: "Calculate the EAN of [X(CN)₆]⁴⁻",
  4: "Does [X(CN)₆]⁴⁻ obey the EAN rule?",
  5: "Calculate the EAN of [X(CO)₄]",
  6: "Does [X(CO)₄] obey the EAN rule?",
  7: "Calculate the EAN of [X(NH₃)₄]²⁺",
  8: "Does [X(NH₃)₄]²⁺ obey the EAN rule?",
  9: "Calculate the EAN of [X(CN)₆]³⁻",
  10: "Does [X(CN)₆]³⁻ obey the EAN rule?",
  11: "Calculate the EAN of [X(CO)₅]",
  12: "Does [X(CO)₅] obey the EAN rule?",
  13: "Calculate the EAN of [X(CN)₅]³⁻",
  14: "Does [X(CN)₅]³⁻ obey the EAN rule?",
  15: "Calculate the EAN of [X(NH₃)₆]²⁺",
  16: "Does [X(NH₃)₆]²⁺ obey the EAN rule?",
  17: "Calculate the EAN of [X(CN)₄]²⁻",
  18: "Does [X(CN)₄]²⁻ obey the EAN rule?",
  19: "Calculate the EAN of [X(NH₃)₄]²⁺",
  20: "Does [X(NH₃)₄]²⁺ obey the EAN rule?"
};

function showQuestion() {
  const num = document.getElementById("qNumber").value;
  const display = document.getElementById("questionText");

  if (num === "" || num < 1 || num > 20) {
    display.innerText = "❌ Please enter a number between 1–20!";
    return;
  }

  display.innerText = "🎣 " + questions[num];
}
