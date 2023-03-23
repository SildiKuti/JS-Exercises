const printName = () => {
    let helloName = "Hello John"
    const inner = () => console.log(helloName);
    return inner
}
printName()();

