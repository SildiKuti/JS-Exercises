function printName() {
    let helloName = "Hello John";
    setTimeout(
        function inner() {
            console.log(helloName);
        }, 2000);
}
printName();