function repeatHello(callback) {
    setInterval(() => {callback();}, 1000);
};

let hello = () => console.log("Hello");

repeatHello(hello);