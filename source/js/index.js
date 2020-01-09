//ボタン発火処理
onButtonClick = function() {
    // 結果表示エリアの要素取得
    var result_div = document.getElementById("result");

    // 要素をリセット
    result_div.textContent = null;

    // 入力値取得
    var num_fizz = document.getElementById("num_fizz").value;
    var num_buzz = document.getElementById("num_buzz").value;

    //値が入力されているか判定
    if (num_fizz.length <= 0 || num_buzz.length <= 0){
        var p = document.createElement('p');
        p.textContent = "値を入力してください。"
        result_div.appendChild(p);
        return;
    }
    //２桁以内の数字が入力されているか（文字列が入力された時、少数が入力された時の判定）
    if (num_fizz.match("^[0-9]{1,2}$") == null || num_buzz.match("^[0-9]{1,2}$") == null){
        var p = document.createElement('p');
        p.textContent = "整数値を入力して下さい。"
        result_div.appendChild(p);
        return;
    }

    //値を設定
    var ul = document.createElement("ul");
    for (var i = 1; i<=100; i++){
        if (i % num_fizz == 0 && i % num_buzz == 0) {
            var li = document.createElement('li');
            li.textContent = "FizzBuzz " + i;
            ul.appendChild(li);
        } else if (i % num_fizz == 0){
            var li = document.createElement('li');
            li.textContent = "Fizz " + i;
            ul.appendChild(li);
        } else if (i % num_buzz == 0){
            var li = document.createElement('li');
            li.textContent = "Buzz " + i;
            ul.appendChild(li);
        }
    }

    result_div.appendChild(ul);
}