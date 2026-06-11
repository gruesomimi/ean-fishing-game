const questions = {
1: `1. Calculate the EAN of [X(NH₃)₆]³⁺\nA. 34\nB. 36\nC. 38\nD. 40`,

2: `2. Does [X(NH₃)₆]³⁺ obey the EAN rule?\nA. Yes, EAN = 36\nB. No, EAN = 34\nC. Yes, EAN = 38\nD. No, EAN = 40`,

3: `3. Calculate the EAN of [X(CN)₆]⁴⁻\nA. 34\nB. 35\nC. 36\nD. 38`,

4: `4. Does [X(CN)₆]⁴⁻ obey the EAN rule?\nA. Yes\nB. No\nC. Sometimes\nD. Cannot determine`,

5: `5. Calculate the EAN of [X(CO)₄]\nA. 34\nB. 36\nC. 38\nD. 40`,

6: `6. Does [X(CO)₄] obey the EAN rule?\nA. Yes\nB. No\nC. Sometimes\nD. Not applicable`,

7: `7. Calculate the EAN of [X(NH₃)₄]²⁺\nA. 28\nB. 30\nC. 32\nD. 34`,

8: `8. Does [X(NH₃)₄]²⁺ obey the EAN rule?\nA. Yes\nB. No\nC. Sometimes\nD. Cannot determine`,

9: `9. Calculate the EAN of [X(CN)₆]³⁻\nA. 34\nB. 35\nC. 36\nD. 37`,

10: `10. Does [X(CN)₆]³⁻ obey the EAN rule?\nA. Yes\nB. No\nC. Sometimes\nD. Not applicable`,

11: `11. Calculate the EAN of [X(CO)₅]\nA. 34\nB. 36\nC. 38\nD. 40`,

12: `12. Does [X(CO)₅] obey the EAN rule?\nA. Yes\nB. No\nC. Sometimes\nD. Cannot determine`,

13: `13. Calculate the EAN of [X(CN)₅]³⁻\nA. 34\nB. 35\nC. 36\nD. 38`,

14: `14. Does [X(CN)₅]³⁻ obey the EAN rule?\nA. Yes\nB. No\nC. Sometimes\nD. Not applicable`,

15: `15. Calculate the EAN of [X(NH₃)₆]²⁺\nA. 34\nB. 36\nC. 38\nD. 40`,

16: `16. Does [X(NH₃)₆]²⁺ obey the EAN rule?\nA. Yes\nB. No\nC. Sometimes\nD. Cannot determine`,

17: `17. Calculate the EAN of [X(CN)₄]²⁻\nA. 34\nB. 35\nC. 36\nD. 37`,

18: `18. Does [X(CN)₄]²⁻ obey the EAN rule?\nA. Yes\nB. No\nC. Sometimes\nD. Not applicable`,

19: `19. Calculate the EAN of [X(NH₃)₄]²⁺\nA. 34\nB. 36\nC. 38\nD. 40`,

20: `20. Does [X(NH₃)₄]²⁺ obey the EAN rule?\nA. Yes\nB. No\nC. Sometimes\nD. Not applicable`
};

function showQuestion() {
  const num = parseInt(document.getElementById("qNumber").value);
  const display = document.getElementById("questionText");

  if (!questions[num]) {
    display.innerText = "❌ Enter a number between 1–20!";
    return;
  }

  display.innerText = questions[num];
}
