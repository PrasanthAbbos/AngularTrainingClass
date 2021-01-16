export interface TestingInteace{
     name:string;
     age:number;
     show():number;

}

let callinterface:TestingInteace = {
    name :"niho",
    age:20,
    show(){
        console.log("Niho First Interface");
        return 5;
    }
}

callinterface.show();