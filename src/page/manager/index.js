import './index.css'
import './indexless.less'

import Test from "./manager"

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

    //
    const el = document.createElement("div")
    el.classList.add("head")
    el.innerHTML='111'

    const btn = document.createElement("button")
    btn.innerHTML = "113331";

    btn.addEventListener("click",async function(){

        new Test({name:"linsh",age:11})

    })

    el.appendChild(btn)

    return el;
}

document.getElementById('root').appendChild(firstDom())
