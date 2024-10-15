import { hydrateRoot } from "preact/compat/client";
import { useState } from "preact/hooks";
import "../styles/style.css";

const questions = [
  "Женщины водят автомобиль хуже, чем мужчины?",
  "Дети в основном забота матери?",
  "Женщина не может быть хорошим хирургом, адвокатом, политиком?",
  "Мужчина должен быть сильным, скрывать свои эмоции?",
  "Мужчина должен зарабатывать больше женщины?",
  "Мужчина не должен заниматься домашними делами?",
  "Возможность и способность быть лидером в группе не зависит от пола?",
  "Равенство мужчин и женщин невозможно?",
];

export function Quiz() {
  const [yes_count, set_yes_count] = useState(0);
  const [no_count, set_no_count] = useState(0);
  const [n, set_n] = useState(0);
  const [result, set_result] = useState("");

  function handle_yes() {
    set_yes_count(yes_count + 1);
      set_n(n + 1);
  }

  function handle_no() {
    set_no_count(no_count + 1);
      set_n(n + 1);
  }

  function handle_next() {
      set_n(n + 1);
  }

  if (yes_count !== 0 || no_count !== 0) {
  if (no_count > yes_count)
    set_result("У вас небольшое количество стереотипов! 👍");

  else if (no_count < yes_count) set_result("У вас много стереотипов! 😢");

  else if (yes_count === no_count)
    set_result("У вас среднее количество стереотипов! 👌");

  else if (yes_count === 0 && no_count > 0) set_result("У вас нет стереотипов! 😎");

  else if (no_count === 0 && yes_count > 0) set_result("У вас определённо есть стереотипы! 👀")
  
  } else {
    set_result("Вы пропустили все вопросы! ✌")
  }

  if (n < questions.length) {
    return (
      <>
        <div class="oval">
          <img src="star.png" alt="" />
        </div>

        <div class="question">
          <div class="question_num">{n + 1}</div>
          <div class="question_content">{questions[n]}</div>
        </div>

        <div class="answers">
          <button onClick={handle_yes} class="answ">
            ДА
          </button>
          <button onClick={handle_no} class="answ">
            НЕТ
          </button>
        </div>

        <button onClick={handle_next} class="next_question">
          СЛЕДУЮЩИЙ ВОПРОС
        </button>

        <div class="count">
          <div class="circle_cont">
            <div class="circle">{}</div>
            <img src="star.png" alt="" />
          </div>
          <div class="qtns_count">{n + 1}/8</div>
          <div class="circle_cont">
            <div class="circle">{}</div>
            <img src="star.png" alt="" />
          </div>
        </div>
      </>
    );
  } else if (n === questions.length) {
    return (
      <div class="question_content">
        Поздравляем! Вы прошли тест! Вот ваш результат: {result}
      </div>
    );
  }
}

if (typeof window !== "undefined") {
  hydrateRoot(document.querySelector("#quiz"), <Quiz />);
}