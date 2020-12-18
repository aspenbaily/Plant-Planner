import React from "react";
import { Link } from "react-router-dom";

function PlantList(props) {
  const plantList = props.location.state;
  console.log(plantList);
  return (
    <ul className="plant-list">
      {plantList.length > 0 &&
        plantList.map((plantList) => (
          <Link to={`/${plantList.id}`}>
            <li className="plant-list__item">
              <div class="card">
                <div className="card__image">
                  <img
                    className="card__image--plant"
                    src={plantList.image}
                    alt=""
                  />
                </div>
                <div class="card--body">
                  <h3>{plantList.name}</h3>
                  <p>{plantList.latinname}</p>
                </div>
              </div>
            </li>
          </Link>
        ))}
    </ul>
  );
}
export default PlantList;
