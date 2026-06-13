const questions = {
1: "Calculate the EAN of [X(NH₃)₆]³⁺",
2: "Calculate the EAN of [X(NH₃)₆]³⁺",
3: "Calculate the EAN of [X(CN)₆]⁴⁻",
4: "Calculate the EAN of [X(CN)₆]⁴⁻",
5: "Calculate the EAN of [X(CO)₄]",
6: "Calculate the EAN of [X(CO)₄]",
7: "Calculate the EAN of [X(NH₃)₄]²⁺",
8: "Calculate the EAN of [X(NH₃)₄]²⁺",
9: "Calculate the EAN of [X(CN)₆]³⁻",
10: "Calculate the EAN of [X(CN)₆]³⁻",
11: "Calculate the EAN of [X(CO)₅]",
12: "Calculate the EAN of [X(CO)₅]",
13: "Calculate the EAN of [X(CN)₅]³⁻",
14: "Calculate the EAN of [X(CN)₅]³⁻",
15: "Calculate the EAN of [X(NH₃)₆]²⁺",
16: "Calculate the EAN of [X(NH₃)₆]²⁺",
17: "Calculate the EAN of [X(CN)₄]²⁻",
18: "Calculate the EAN of [X(CN)₄]²⁻",
19: "Calculate the EAN of [X(NH₃)₄]²⁺",
20: "Calculate the EAN of [X(NH₃)₄]²⁺"
};

function showQuestion() {
  const num = document.getElementById("qNumber").value;
  const display = document.getElementById("questionText");

  if (!questions[num]) {
    display.innerHTML = "❌ Enter number 1–20!";
    return;
  }

  display.innerHTML = `
    🌊 <b>Question ${num}</b><br><br>
    🎣 ${questions[num]}<br><br>
    👉 Now go to Answer Beach to calculate your EAN!
  `;
}
