import './index.css'
import './indexless.less'

class PromisePool {
    constructor(max, fn) {
        this.max = max; // 最大并发数
        this.fn = fn;   // 自定义的请求函数
        this.pool = []; // 并发池
        this.urls = []; // 剩余的请求地址
    }

    start(urls) {
        this.urls = urls;
        // 先循环把并发池塞满
        while (this.pool.length < this.max) {
            let url = this.urls.shift();
            this.setTask(url);
            console.log("运行中",this.pool.length)
        }
        // 利用Promise.race 方法来获得并发池中某任务完成的信号

        let race = Promise.race(this.pool);
        return this.run(race);
    }

    run(race) {
        race
            .then(res => {
                // 每当并发池跑完一个任务，就再塞入一个任务
                let url = this.urls.shift();
                this.setTask(url);
                return this.run(Promise.race(this.pool));
            });
    }
    setTask(url) {
        if (!url) return;
        let task = this.fn(url);
        this.pool.push(task); // 将该任务推入pool并发池中
        console.log(`\x1B[43m ${url} 开始，当前并发数：${this.pool.length}`);
        task.then(res => {
            // 请求结束后将该Promise任务从并发池中移除
            console.log("??",this.pool,this.pool.indexOf(task))
            this.pool.splice(0, 1);

            console.log(`\x1B[43m ${url} 结束，当前并发数：${this.pool.length}`);
        });
    }
}

// test
const URLs = [
    '111.com',
    '222.com',
    '333.com',
    '444.com',
    '555.com',
    '666.com',
    '777.com'
];



function firstDom(){
    const el = document.createElement("div")
    el.classList.add("head")
    el.innerHTML='111'

    const btn = document.createElement("button")
    btn.innerHTML = "113331";

    btn.addEventListener("click",async function(){
        // import(/* webpackChunkName: "lodash112233" */ 'lodash')
        let dur = 0;
        // 自定义请求函数
        var requestFn = url => {
            return new Promise(resolve => {
                setTimeout(_ => {
                    resolve(`任务 ${url} 完成`);
                }, 1000*dur++)
            }).then(res => {
                console.log('外部逻辑 ', res);
            })
        }

        const pool = new PromisePool(3, requestFn); // 并发数为3
        pool.start(URLs);

    })

    el.appendChild(btn)

    return el;
}

document.getElementById('root').appendChild(firstDom())
