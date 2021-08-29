import "./index.scss";
import Calendar from "./components/Calendar";
import NewCarList from "./components/NewCarList";

const NewCar = () => {
  return (
    <div className="new-car-container">
      <div className="new-car-content">
        <Calendar/>
        <NewCarList/>
      </div>
    </div>
  )
}

export default NewCar;
