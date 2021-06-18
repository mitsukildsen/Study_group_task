//チャレンジ課題、偶数のみ出力

for(i = 2; i <= 100; i += 2){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(`${i}回目、私はアホな犬です!!!`);
    }else if(i % 3 === 0){
        console.log(`${i}回目、アホ`);
    }else if(i % 5 === 0){
        console.log(`${i}回目、犬`);
    }else{
        console.log(`${i}回目`);
    }
}
