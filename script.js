const questions = {
1: `Calculate the EAN of [X(NH₃)₆]³⁺
A. 34
B. 36
C. 38
D. 40`,

2: `Does [X(NH₃)₆]³⁺ obey the EAN rule?
A. Yes, EAN = 36
B. No, EAN = 34
C. Yes, EAN = 38
D. No, EAN = 40`,

3: `Calculate the EAN of [X(CN)₆]⁴⁻
A. 34
B. 35
C. 36
D. 38`,

4: `Does [X(CN)₆]⁴⁻ obey the EAN rule?
A. Yes
B. No
C. Sometimes
D. Cannot determine`,

5: `Calculate the EAN of [X(CO)₄]
A. 34
B. 36
C. 38
D. 40`,

6: `Does [X(CO)₄] obey the EAN rule?
A. Yes
B. No
C. Sometimes
D. Not applicable`,

7: `Calculate the EAN of [X(NH₃)₄]²⁺
A. 28
B. 30
C. 32
D. 34`,

8: `Does [X(NH₃)₄]²⁺ obey the EAN rule?
A. Yes
B. No
C. Sometimes
D. Cannot determine`,

9: `Calculate the EAN of [X(CN)₆]³⁻
A. 34
B. 35
C. 36
D. 37`,

10: `Does [X(CN)₆]³⁻ obey the EAN rule?
A. Yes
B. No
C. Sometimes
D. Not applicable`,

11: `Calculate the EAN of [X(CO)₅]
A. 34
B. 36
C. 38
D. 40`,

12: `Does [X(CO)₅] obey the EAN rule?
A. Yes
B. No
C. Sometimes
D. Cannot determine`,

13: `Calculate the EAN of [X(CN)₅]³⁻
A. 34
B. 35
C. 36
D. 38`,

14: `Does [X(CN)₅]³⁻ obey the EAN rule?
A. Yes
B. No
C. Sometimes
D. Not applicable`,

15: `Calculate the EAN of [X(NH₃)₆]²⁺
A. 34
B. 36
C. 38
D. 40`,

16: `Does [X(NH₃)₆]²⁺ obey the EAN rule?
A. Yes
B. No
C. Sometimes
D. Cannot determine`,

17: `Calculate the EAN of [X(CN)₄]²⁻
A. 34
B. 35
C. 36
D. 37`,

18: `Does [X(CN)₄]²⁻ obey the EAN rule?
A. Yes
B. No
C. Sometimes
D. Not applicable`,

19: `Calculate the EAN of [X(NH₃)₄]²⁺
A. 34
B. 36
C. 38
D. 40`,

20: `Does [X(NH₃)₄]²⁺ obey the EAN rule?
A. Yes
B. No
C. Sometimes
D. Not applicable`
};

function showQuestion() {
  const num = document.getElementById("qNumber").value;
  const display = document.getElementById("questionText");

  if (!questions[num]) {
    display.innerText = "❌ Enter a number between 1–20!";
    return;
  }

  display.innerText = questions[num];
}
