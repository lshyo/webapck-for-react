import React , {Suspense,lazy} from 'react'
import ReactDOM from 'react-dom';
import {Switch,Route} from 'react-router'
import {HashRouter} from 'react-router-dom'
import routerConfig from './routes/config';
const ROUTERS = routerConfig.map(o => ({ ...o, component: lazy(o.component) }));
const App=()=>{
    return (
        <Suspense fallback={<div>loading...</div>}>

            <HashRouter>
                <Switch>
                    {ROUTERS.map(config => {
                        const { component, exact, path } = config;

                        return <Route key={path} path={path} component={component} exact={exact} />;
                    })}
                </Switch>
            </HashRouter>

        </Suspense>
    )
}

ReactDOM.render(<App></App>,document.getElementById("root"))
export default App;
