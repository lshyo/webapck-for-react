
interface personInterface {
    name:string;
    age?:number;
};

interface funInterface {
    init:()=>void;
    handle:()=>void;
}

class Test implements funInterface{
    constructor(public setting : personInterface) {
        this.setting = Object.assign({
            name:"linsh"
        },setting);
        this.init();
    }
    init(){
        console.log("实例化一个 ts ",this.setting)
    }

    handle(){}
}
export default Test;