import react from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import Information from "../pages/information";
import InformationLast from "../pages/informationLast";
import Video from "../pages/video";
import VideoLast from "../pages/videoLast";

class BasicMap extends react.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path={"/"} exact component={() => <Redirect to={"/information"} />} />
          <Route path={"/information"} exact component={Information} />
          <Route path={"/information-last"} exact component={InformationLast} />
          <Route path={"/video"} exact component={Video} />
          <Route path={"/video-last"} exact component={VideoLast} />
        </Switch>
      </HashRouter>
    )
  }
}

export default BasicMap
