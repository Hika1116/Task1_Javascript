



//ボタン発火処理
let onButtonClick = () => {
    // 結果表示エリアの要素取得
    let resultDiv = document.getElementById("result");

    // 要素をリセット
    resultDiv.textContent = null;

    // 入力値取得
    let numFizz = document.getElementById("num_fizz").value;
    let numBuzz = document.getElementById("num_buzz").value;

    console.log(numBuzz);
    //値が入力されているか判定
    if (!numFizz || !numBuzz) {
        let p = document.createElement('p');
        p.textContent = "値を入力してください。"
        resultDiv.appendChild(p);
        return;
    }
    //２桁以内の数字が入力されているか（文字列が入力された時、少数が入力された時の判定）
    if (!numFizz.match("^[0-9]{1,2}$") || !numBuzz.match("^[0-9]{1,2}$")) {
        let p = document.createElement('p');
        p.textContent = "整数値を入力して下さい。"
        resultDiv.appendChild(p);
        return;
    }

    //値を設定
    let ul = document.createElement("ul");
    for (let i = 1; i<=100; i++){
        if (i % numFizz === 0 && i % numBuzz === 0) {
            let li = document.createElement('li');
            li.textContent = "FizzBuzz " + i;
            ul.appendChild(li);
        } else if (i % numFizz === 0) {
            let li = document.createElement('li');
            li.textContent = "Fizz " + i;
            ul.appendChild(li);
        } else if (i % numBuzz === 0) {
            let li = document.createElement('li');
            li.textContent = "Buzz " + i;
            ul.appendChild(li);
        }
    }

    resultDiv.appendChild(ul);
}