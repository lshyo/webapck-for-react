import './index.css'
import './indexless.less'

import Test from "./manager"

const syntax=()=>{

    const objs = {a:"1",child:{son:"hell"}}
    const  x = 11;
    let a = do {
        if(x > 10) {
            'big';
        } else {
            'small';
        }
    };
    console.log("babel插件",objs?.child?.son, 1??"aaa" ,a)
}

function firstDom(){
    let fun =function(){
        console.log("this1",this,window)
    }
    var obj = {
        name:"linsh",
        fun:()=>{
            console.log("this2",this)
        }
    }
    fun()
    syntax();

    //
    const el = document.createElement("div")
    el.classList.add("head")
    el.innerHTML='111'

    const btn = document.createElement("button")
    btn.innerHTML = "113331";

    btn.addEventListener("click", function(){

        new Test({name:"linsh",age:11})

    })

    el.appendChild(btn)

    return el;
}

document.getElementById('root').appendChild(firstDom())
