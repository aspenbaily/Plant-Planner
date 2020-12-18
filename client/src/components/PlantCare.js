import React from "react";
import axios from "axios";
import { withRouter } from "react-router";

class PlantCare extends React.Component {
  state = {
    plant: null,
  };
  componentDidMount() {
    console.log("props => ", this.props);
    const { plantId } = this.props.match.params;
    axios
      .get("http://localhost:8080/plants/" + plantId)
      .then((response) =>
        this.setState({
          plant: response.data.plant,
        })
      )
      .catch((error) => console.log(error));
    console.log(this.state);
  }

  render() {
    console.log(this.state);
    let waterNeeds = "";
    if (
      this.state.plant != null &&
      this.state.plant.waterneeds === "infrequent"
    ) {
      waterNeeds = <p>Water twice monthly</p>;
    } else if (
      this.state.plant != null &&
      this.state.plant.waterneeds === "occasional"
    ) {
      waterNeeds = <p>Water once weekly</p>;
    } else {
      waterNeeds = <p>Water 2-3 times weekly</p>;
    }
    let lightNeeds = "";
    if (this.state.plant != null && this.state.plant.lightneeds === "low") {
      lightNeeds = <p>Tolerates low-light well</p>;
    } else if (
      this.state.plant != null &&
      this.state.plant.lightneeds === "moderate"
    ) {
      lightNeeds = <p>Does well in moderate light</p>;
    } else {
      lightNeeds = <p>Requires bright light</p>;
    }
    let lightDirection = "";
    if (
      this.state.plant != null &&
      this.state.plant.lightdirection === "direct"
    ) {
      lightDirection = <p>Prefers direct sunlight</p>;
    } else {
      lightDirection = <p>Prefers indirect sunlight</p>;
    }

    if (this.state.plant === null) return null;
    return (
      <div className="plant-care">
        <div className="plant-care__header">
          <h1>{this.state.plant.name}</h1>
          <h2>
            <i>{this.state.plant.latinname}</i>
          </h2>
        </div>
        <div className="plant-care__container">
          <div className="plant-care__container--image">
            <img src={this.state.plant.image} alt="" />
          </div>
          <ul className="plant-care__container--list">
            <li className="plant-care__container--list--item">{waterNeeds}</li>
            <li className="plant-care__container--list--item">{lightNeeds}</li>
            <li className="plant-care__container--list--item">
              {lightDirection}
            </li>
          </ul>
          <div className="plant-care__container--instructions">
            <p>{this.state.plant.careinstructions}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(PlantCare);
