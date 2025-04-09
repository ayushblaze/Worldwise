import Spinner from "./Spinner";
import styles from './CityList.module.css'
import CityItem from "./CityItem";

/* eslint-disable react/prop-types */
function CityList({ cities, isLoading }) {
  if (isLoading) {
    return (
      <Spinner />
    )
  }

  return (
    <ul className={styles.CityList}>
      {cities.map((city) => <CityItem city={city.name} key={city.id} />)}
    </ul>
  );
}

export default CityList;