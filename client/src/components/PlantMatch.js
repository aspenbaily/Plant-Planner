import React from "react";
import axios from "axios";
class PlantMatch extends React.Component {
  state = {
    plant: null,
    lightNeeds: "low",
    waterNeeds: "infrequent",
    easeOfCare: "easy",
  };
  handleLightNeeds = (e) => {
    this.setState({
      lightNeeds: e.target.value,
    });
  };

  handleWaterNeeds = (e) => {
    this.setState({
      waterNeeds: e.target.value,
    });
  };
  handleEaseOfCare = (e) => {
    this.setState({
      easeOfCare: e.target.value,
    });
  };
  handleFormSumbit = (e) => {
    e.preventDefault();

    axios
      .get(
        `http://localhost:8080/plantresults?lightneeds=${this.state.lightNeeds}&waterneeds=${this.state.waterNeeds}&easeofcare=${this.state.easeOfCare}`
      )
      .then((response) => {
        console.log(response);
        this.props.history.push({
          pathname: "/plantlist",
          state: response.data.plant.plants,
        });
      });
  };
  render() {
    // console.log()
    return (
      <div className="plant-match">
        <div className="hero-match"></div>
        <div className="plant-match__options--text">
          <h2 className="plant-match__options--header">
            Your plant's light needs
          </h2>
          <p>What does your space look like?</p>
        </div>
        <form onSubmit={this.handleFormSumbit}>
          <div className="plant-match__options--container">
            <input
              onChange={this.handleLightNeeds}
              checked={this.state.lightNeeds === "low"}
              value="low"
              type="radio"
              id="control-1"
              name="lightNeeds"
            />
            <label htmlFor="control-1">
              <h2>Low Light</h2>
            </label>
          </div>
          <div className="plant-match__options--container">
            <input
              onChange={this.handleLightNeeds}
              checked={this.state.lightNeeds === "moderate"}
              value="moderate"
              type="radio"
              id="control-2"
              name="lightNeeds"
            />
            <label htmlFor="control-2">
              <h2>Moderate Light</h2>
            </label>
          </div>
          <div className="plant-match__options--container">
            <input
              onChange={this.handleLightNeeds}
              checked={this.state.lightNeeds === "bright"}
              value="bright"
              type="radio"
              id="control-3"
              name="lightNeeds"
            />
            <label htmlFor="control-3">
              <h2>Bright Light</h2>
            </label>
          </div>
          <div className="plant-match__options--text">
            <h2 className="plant-match__options--header">
              Your plant's water needs
            </h2>
            <p>
              Are you the type of person who's very diligent with watering? Or
              maybe not so much?
            </p>
          </div>

          <div className="plant-match__options--container">
            <input
              onChange={this.handleWaterNeeds}
              checked={this.state.waterNeeds === "infrequent"}
              value="infrequent"
              type="radio"
              id="control-4"
              name="waterNeeds"
            />
            <label htmlFor="control-4">
              <h2>Infrequent Water</h2>
            </label>
          </div>
          <div className="plant-match__options--container">
            <input
              onChange={this.handleWaterNeeds}
              checked={this.state.waterNeeds === "occasional"}
              value="occasional"
              type="radio"
              id="control-5"
              name="waterNeeds"
            />
            <label htmlFor="control-5">
              <h2>Occasional Water</h2>
            </label>
          </div>
          <div className="plant-match__options--container">
            <input
              onChange={this.handleWaterNeeds}
              checked={this.state.waterNeeds === "frequent"}
              value="frequent"
              type="radio"
              id="control-6"
              name="waterNeeds"
            />
            <label htmlFor="control-6">
              <h2>Frequent Water</h2>
            </label>
          </div>
          <div className="plant-match__options--text">
            <h2 className="plant-match__options--header">
              Your plant's care needs
            </h2>
            <p>
              Are you OK with plants that may require extra care? Or would you
              rather not worry about this?
            </p>
          </div>

          <div className="plant-match__options--container">
            <input
              onChange={this.handleEaseOfCare}
              checked={this.state.easeOfCare === "easy"}
              value="easy"
              type="radio"
              id="control-7"
              name="careNeeds"
            />
            <label htmlFor="control-7">
              <h2>Easy</h2>
            </label>
          </div>
          <div className="plant-match__options--container">
            <input
              onChange={this.handleEaseOfCare}
              checked={this.state.easeOfCare === "moderate"}
              value="moderate"
              type="radio"
              id="control-8"
              name="careNeeds"
            />
            <label htmlFor="control-8">
              <h2>Moderate</h2>
            </label>
          </div>
          <div className="plant-match__options--container">
            <input
              onChange={this.handleEaseOfCare}
              checked={this.state.easeOfCare === "advanced"}
              value="advanced"
              type="radio"
              id="control-9"
              name="careNeeds"
            />
            <label htmlFor="control-9">
              <h2>Advanced</h2>
            </label>
          </div>

          <div className="submit-container">
            <input className="button" type="submit" value="Search" />
          </div>
        </form>
      </div>
    );
  }
}
export default PlantMatch;
