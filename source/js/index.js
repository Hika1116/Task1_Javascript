



//ボタン発火処理
const onButtonClick = () => {
    // 結果表示エリアの要素取得
    const resultDiv = document.getElementById("result");

    // 要素をリセット
    resultDiv.textContent = null;

    // 入力値取得
    const numFizz = document.getElementById("num_fizz").value;
    const numBuzz = document.getElementById("num_buzz").value;

    //値が入力されているか判定
    if (!numFizz || !numBuzz) {
        const p = document.createElement('p');
        p.textContent = "値を入力してください。"
        resultDiv.appendChild(p);
        return;
    }
    //２桁以内の数字が入力されているか（文字列が入力された時、少数が入力された時の判定）
    if (!numFizz.match("^[0-9]{1,2}$") || !numBuzz.match("^[0-9]{1,2}$")) {
        const p = document.createElement('p');
        p.textContent = "整数値を入力して下さい。"
        resultDiv.appendChild(p);
        return;
    }

    //値を設定
    const ul = document.createElement("ul");
    for (let i = 1; i<=100; i++){
        const li = document.createElement('li');

        if (i % numFizz === 0 && i % numBuzz === 0) {
            li.textContent = "FizzBuzz " + i;
        } else if (i % numFizz === 0) {
            li.textContent = "Fizz " + i;
        } else if (i % numBuzz === 0) {
            li.textContent = "Buzz " + i;
        }else{
            continue;
        }

        ul.appendChild(li);
    }

    resultDiv.appendChild(ul);
}