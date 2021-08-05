console.log(quizData);

// 問題文
const questionElm = document.getElementById('question');

// 選択肢
const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');

// 回答送信ボタン
const submitBtn = document.getElementById('submit');

// 現在の問題
let currentQuiz = 0;

// 現在のスコア
let score = 0;

// 次の問題へ進むボタン
let nextQuizBtn = document.getElementById('next-quiz');

// 結果表示用の要素
const quizHeaderElm = document.getElementById('quiz-header');
const resultsConElm = document.getElementById('results-container');
const resultsElm = document.getElementById('results');

loadQuiz();

// 問題を読み込む
function loadQuiz() {
    // 問題を取得
    const currentQuizData = quizData[currentQuiz];

    // 質問文を表示
    questionElm.innerText = currentQuizData.question;

    // 選択肢を表示
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

// 回答を取得
function getAnswered() {

  // 選択したラジオボタンのvalueを返す
  return document.quizForm.answer.value;
}

// 結果表示
function showResults(results) {
    quizHeaderElm.style.display = 'none';
    submitBtn.style.display = 'none';
    resultsConElm.style.display = 'block';
    resultsElm.innerText = results;
}

// 次の問題を表示
function showQuiz() {
    quizHeaderElm.style.display = 'block';
    submitBtn.style.display = 'block';
    resultsConElm.style.display = 'none';
}

// 採点
function checkScore() {

    const answer = getAnswered();

    if (currentQuiz == quizData.length) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
            return '5問中 + score + 問正解です。';
        }

    }
}

submitBtn.addEventListener('click', event => {
    event.preventDefault();

    // 回答を取得
    const answer = getAnswered();
    
    


    // 回答している
    if(answer) {
        

        
        // }
        // 正誤判定
        if (answer === quizData[currentQuiz].correct) {
            showResults('正解！');
            score++;
        } else {
            showResults('残念...');
        }


        // ラジオボタンの選択を解除する
        document.getElementById(answer).checked = false;
    }


});

nextQuizBtn.addEventListener('click', event => {
    event.preventDefault();

    // 次の問題へ進む
    currentQuiz++;

    // まだ問題が残っている
    if (currentQuiz < quizData.length) {
        // 次の問題を読み込む
        loadQuiz();

        // 問題を表示する
        showQuiz();

        // 全ての問題に回答した
    } else {
        nextQuizBtn.textContent = "結果発表！";
        alert(checkScore());
        window.location.reload();
    }
});

// $(document).on('ready', function() {
//     $(".regular").slick({
//       autoplay: true,
//       autoplaySpeed: 4000,
//       dots: true,
//     });
// });

$('.slider').slick({
    autoplay:true,
    autoplaySpeed:4000,
    dots:true,
});


// jQueryが本当に動いているかどうかの確認
// $(function() {
//     alert('OK!');
// });

//cssで背景変更
function hakoClick() {
    irobako = document.getElementById("quiz-container");
    irobako.style.backgroundColor = "white";
}