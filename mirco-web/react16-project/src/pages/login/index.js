import globalConfig from "../../config/globalConfig";
import LoginPanel from "./components/loginPanel";

import './index.scss'

function Login () {
  return (
    <div className={"login"}>
      <img className={"login-background"} src={`${globalConfig.baseUrl}/login-background.png`} />
      <LoginPanel />
    </div>
  )
}

export default Login
