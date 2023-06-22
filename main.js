// ******************************
// ふわっと文字を表示
// ******************************
// 要素の取得
// `Array.from`で`querySelectorAll`の戻り値であるNodeListを配列に変換
const firstContent = Array.from(document.querySelectorAll(".js-first-content"));

// コールバック関数
const callback = (entries) => {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-show");
    } else {
      entry.target.classList.remove("is-show");
    }
  });
};

// オプション指定
let options = {
  threshold: 0.5, //要素の50%gが交差したら
  rootMargin: "-5% 0%", //上下-5%マージンを取る
};

// インスタンス化
let observer = new IntersectionObserver(callback, options);

// ターゲット指定
// 各要素に対して処理を行う
firstContent.map((element) => observer.observe(element));

// ******************************
// 2つ要素が並んでいる時
// ******************************
// 要素の取得
const secondContent = Array.from(document.querySelectorAll(".js-second-content"));

// コールバック関数
const callback2 = (entries) => {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-turn");
    } else {
      entry.target.classList.remove("is-turn");
    }
  });
};

// オプション指定
let options2 = {
  threshold: 0.5, //要素の50%gが交差したら
  rootMargin: "-5% 0%", //上下-5%マージンを取る
};

// インスタンス化
let observer2 = new IntersectionObserver(callback2, options2);

// ターゲット指定（複数）
secondContent.map((element) => observer2.observe(element));
