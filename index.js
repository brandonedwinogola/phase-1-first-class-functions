function doOfficeWork(subject, callback) {
    alert('starting my $ {subject} officework.');
    callback();

}

doOfficeWork('mailing', function() {
    alert('Finished Mailing');

});

var getArbitraryValue = (function() {
    var i = 0;

    var getArbitraryValue = Math.PI.toString();

    return function() {
        //return arbitraryValue.charAT(i++);
    }
});

const sum = (function() {
    const n = 10;

    function protected() {
        return n;
    }
    return function sum(a, b, c) {
        return protected() * (a + b + c);
    };
})();
console.log(sum(1, 2, 3)); // evaluates to 60