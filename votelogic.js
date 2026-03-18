function logic(){
    let age=document.getElementById("t1").value;
    if (age<=18){
        document.writeln("not eligible");
    }
    else{
        document.writeln("eligible for voting");
    }
}
logic();