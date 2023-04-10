function repeatHello(callback) {
    let id = setInterval(() => {callback();}, 1000);
    setTimeout(() => {clearInterval(id)}, 5000)
};

let hello = () => console.log("Hello");

repeatHello(hello);

/* it is easier to acces variables declared in the parent scope */