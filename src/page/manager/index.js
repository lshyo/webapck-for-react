import React , {Suspense,lazy} from 'react'
import ReactDOM from 'react-dom';
import {Switch,Route} from 'react-router'
import {HashRouter} from 'react-router-dom'

const Home = lazy(()=>import('@/page/manager/Home'))
const Test = ()=> <div>test</div>
const App=()=>{
    return (
      <Suspense fallback={<div>loading...</div>}>

          <HashRouter>
              <Switch>
                  <Route path="/" exact component={Home}></Route>
                  <Route path="/test" exact component={Test}></Route>
                  <Route path="/test/1" exact component={()=><div>test/1</div>}></Route>
              </Switch>
          </HashRouter>

      </Suspense>
    )
}

ReactDOM.render(<App></App>,document.getElementById("root"))
