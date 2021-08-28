import react from 'react'
import './index.scss'
import InformationNav from "./components/tab";
import InformationNews from "./components/news";
import InformationList from "./components/list";

class Information extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div className={"information-container"}>
        <div className="information-content">
          <div className="information-wrapper">
            <InformationNav />
            <InformationList />
          </div>
          <div className="information-news">
            <InformationNews />
          </div>
        </div>
      </div>
    )
  }
}

export default Information
