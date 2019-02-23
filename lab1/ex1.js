var func = function () {
    console.log('hello world');
};

var func2 = function (foo) {
    foo();
};

func2(func);