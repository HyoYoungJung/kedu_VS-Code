document.write("안녕하세요!");

function fact(n){
    if(n<=1)return n;
    return n*fact(n-1); // 재귀호출
}
for(var i=1; i<10;i++){
    console.log(i + "! =" + fact(i))
}