// Simply type script
type helloType = number | string
let x: helloType = "hello";
x = 10;

//Enums inn type script 
enum list { tom=0, test=2, jill=1, jack=2 };
console.log(list.jill);



// Interface for types in type script  
interface Profile {
    name: string;
    id: number;
}
const getID = function (profile1: Profile) {
    return  profile1.id;
}
console.log(getID({ name: 'Deep', id: 1234 }));


//Classes in typescript 
class Car {
    private _color: string;
    protected speed: number;
    public year: number;

    constructor(color: string, speed: number, year: number) {
        this._color = color;
        this.speed = speed;
        this.year = year;
    }

    getColor() {
        return this._color;
    }

    getSpeed() {
        return this.speed;
    }

    getYear() {
        return this.year;
    }
}

const myCar = new Car('Red', 150, 2020);
console.log(myCar.getColor());


// Classes in another way (less code)
class Truck {
    constructor(private _color: string) {
    }

    get Color() {
        return this._color;
    }
}

const myTruck = new Truck('Blue');
console.log(myTruck.Color);


// Class Extension and proected access modifier 
class Honda extends Car {
    constructor(speed :number, year: number) {
        super('Green', speed, year);
        this.speed = speed;
        this.year = year;
    }
}

const deepsCar = new Honda(200, 2003);
console.log(deepsCar.getYear())
