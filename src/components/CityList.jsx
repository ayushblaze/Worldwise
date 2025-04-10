import Spinner from "./Spinner";
import Message from "./Message";
import styles from './CityList.module.css'
import CityItem from "./CityItem";

/* eslint-disable react/prop-types */
function CityList({ cities, isLoading }) {
  if (isLoading) {
    return (
      <Spinner />
    )
  }

  if (!cities.length) return <Message message={"Add your first city by clicking on a city in the map"} />;

  return (
    <ul className={styles.CityList}>
      {cities.map((city) => <CityItem city={city} key={city.id} />)}
    </ul>
  );
}

export default CityList;