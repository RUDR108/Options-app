class person{
    constructor(name='Anonymous',age=0){
        this.name=name;
        this.age=age;
    }
    getGreeting(){
        console.log(`Hi! It is ${this.name}`);
    }
    getDescription(){
        console.log(`${this.name} is ${this.age} years old!`);
    }
}

class student extends person{
    constructor(name,age,major){
        super(name,age);
        this.major=major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description=super.getDescription();
        if(this.hasMajor()){
            description+=`His major is ${this .major}`;
        }
        return description;
    }
}

class traveller extends person{
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation=homeLocation;
    }
    
    getGreeting(){
        let home=super.getGreeting();
        if(this.homeLocation){
            home+=`He is from ${this.homeLocation}`;
        }
        return home;
    }
}

// const per=new person("Andrew");
// console.log(per.getGreeting());
// console.log(per.getDescription());

const other=new traveller("Andrew",24,'Computer');
console.log(other.getDescription());
console.log(other.getGreeting());

const other2=new traveller();
console.log(other2.getDescription());
console.log(other2.getGreeting());
