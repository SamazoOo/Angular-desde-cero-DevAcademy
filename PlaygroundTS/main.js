"use strict";
class Person {
}
function getAdults(a) {
    var result = a.filter(function (x) {
        return x.age > 18;
    });
    return result;
}
