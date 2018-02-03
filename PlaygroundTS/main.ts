class Person {
    name: string;
    age: number;
}

function getAdults(a: Person[]): Person[] {
    var result = a.filter(function (x) {
        return x.age > 18;
    });
    return result;
}



