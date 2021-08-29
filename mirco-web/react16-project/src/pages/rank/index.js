import CarType from "./components/CarType";
import RankList from "./components/RankList";
import "./index.scss"

const Rank = () => {
  return (
    <div className="rank-container">
      <div className="rank-content">
        <CarType />
        <RankList />
      </div>
    </div>
  );
};

export default Rank;
