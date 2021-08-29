import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import { useLocalReducer } from '../store/useLocalReducer'
import { context } from '../hooks/useLocalContext'
import Login from "../pages/login";
import NewCarList from "../pages/newCar/components/NewCarList";
import Rank from "../pages/rank";

function BasicMap () {
  const [state, dispatch] = useLocalReducer()
  return (
    <context.Provider value={{state, dispatch}}>
      <HashRouter>
        <Switch>
          <Route path={"/"} exact component={() => <Redirect to={"/new-car-list"} />} />
          <Route path={"/login"} exact component={Login} />
          <Route path={"/new-car-list"} exact component={NewCarList} />
          <Route path={"/rank"} exact component={Rank} />
        </Switch>
      </HashRouter>
    </context.Provider>
  )
}

export default BasicMap
