function x() {
    var a = 16;
    function y() {
        console.log(a);
    }

    return y;
}

x()();