import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/styles/AddData.css";
import axios from "axios";

function AddData() {
  const navigate = useNavigate();

  const [commonName, setCommonName] = useState("");
  const [scientificName, setScientificName] = useState("");
  const [description, setDescription] = useState("");
  const [plantFamily, setPlantFamily] = useState("");
  const [plantType, setPlantType] = useState("");
  const [growingConditions, setGrowingConditions] = useState("");
  const [wateringNeeds, setWateringNeeds] = useState("");
  const [fertilization, setFertilization] = useState("");
  const [maintenance, setMaintenance] = useState("");
  const [pestAndDiseaseManagement, setPestAndDiseaseManagement] = useState("");
  const [harvesting, setHarvesting] = useState("");
  const [plantingSeason, setPlantingSeason] = useState("");
  const [harvestingAge, setHarvestingAge] = useState("");
  const [expectedYield, setExpectedYield] = useState("");
  const [companionPlants, setCompanionPlants] = useState("");
  const [varieties, setVarieties] = useState("");
  const [averageRating, setAverageRating] = useState("");
  const [source, setSource] = useState("");
  const [plantImage, setPlantImage] = useState("");

  const handleRatingChange = (e) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/[^\d.]/g, "");
    inputValue = inputValue.match(/^\d{0,1}\.?\d{0,1}/)[0];
    if (inputValue < 10) setAverageRating(inputValue);
    else alert("Enter a valid Rating which is less than 10...");
  };

  const handleHarvestAgeChange = (e) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/\D/g, "");
    inputValue = inputValue.slice(0, 3);
    setHarvestingAge(inputValue);
  };

  const senddb = async (e) => {
    e.preventDefault();
    if (
      commonName.length === 0 ||
      scientificName.length === 0 ||
      description.length === 0 ||
      plantFamily.length === 0 ||
      plantType.length === 0 ||
      growingConditions.length === 0 ||
      wateringNeeds.length === 0 ||
      fertilization.length === 0 ||
      maintenance.length === 0 ||
      pestAndDiseaseManagement.length === 0 ||
      harvesting.length === 0 ||
      plantingSeason.length === 0 ||
      harvestingAge.length === 0 ||
      expectedYield.length === 0 ||
      companionPlants.length === 0 ||
      varieties.length === 0 ||
      averageRating.length === 0 ||
      source.length === 0 ||
      plantImage.length === 0
    ) {
      alert("Enter all fields; they are mandatory!!");
    } else {
      e.preventDefault();
      const plantDetails = {
        commonName,
        scientificName,
        description,
        plantFamily,
        plantType,
        growingConditions,
        wateringNeeds,
        fertilization,
        maintenance,
        pestAndDiseaseManagement,
        harvesting,
        plantingSeason,
        harvestingAge,
        expectedYield,
        companionPlants,
        varieties,
        averageRating,
        source,
        plantImage,
      };
      try {
        const response = await axios.post(
          "http://localhost:8989/garden/auth/admin/register",
          plantDetails,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if(response.data){
          navigate("/admin/get");
        }
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    }
  };

  return (
    <div className="add-page">
      <form className="add-form" action="">
        <h2>Plant Details</h2>
        <div className="form-group">
          <label htmlFor="commonName">
            <strong>Common Name:</strong>
          </label>
          <input
            type="text"
            placeholder="Enter the Common Name"
            value={commonName}
            onChange={(e) => setCommonName(e.target.value)}
            name="commonName"
          />
        </div>
        <div className="form-group">
          <label htmlFor="scientificName">
            <strong>Scientific Name:</strong>
          </label>
          <input
            type="text"
            placeholder="Enter the Scientific Name"
            value={scientificName}
            onChange={(e) => setScientificName(e.target.value)}
            name="scientificName"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">
            <strong>Plant Description:</strong>
          </label>
          <textarea className="input1"
            placeholder="Enter the Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
          />
        </div>
        <div className="form-group">
          <label htmlFor="plantFamily">
            <strong>Plant Family:</strong>
          </label>
          <input
            type="text"
            placeholder="Enter the Plant Family"
            value={plantFamily}
            onChange={(e) => setPlantFamily(e.target.value)}
            name="plantFamily"
          />
        </div>
        <div className="form-group">
          <label htmlFor="plantType">
            <strong>Plant Type:</strong>
          </label>
          <input
            type="text"
            placeholder="Enter the Plant Type"
            value={plantType}
            onChange={(e) => setPlantType(e.target.value)}
            name="plantType"
          />
        </div>
        <div className="form-group">
          <label htmlFor="growingConditions">
            <strong>Growing Conditions:</strong>
          </label>
          <textarea className="input1"
            placeholder="Enter the Growing Conditions"
            value={growingConditions}
            onChange={(e) => setGrowingConditions(e.target.value)}
            name="growingConditions"
          />
        </div>
        <div className="form-group">
          <label htmlFor="wateringNeeds">
            <strong>Watering Needs:</strong>
          </label>
          <textarea className="input1"
            placeholder="Enter the Watering Needs"
            value={wateringNeeds}
            onChange={(e) => setWateringNeeds(e.target.value)}
            name="wateringNeeds"
          />
        </div>
        <div className="form-group">
          <label htmlFor="fertilization">
            <strong>Fertilization:</strong>
          </label>
          <textarea className="input1"
            placeholder="Enter the Fertilization"
            value={fertilization}
            onChange={(e) => setFertilization(e.target.value)}
            name="fertilization"
          />
        </div>
        <div className="form-group">
          <label htmlFor="maintenance">
            <strong>Maintenance:</strong>
          </label>
          <textarea className="input1"
            placeholder="Enter the Maintenance"
            value={maintenance}
            onChange={(e) => setMaintenance(e.target.value)}
            name="maintenance"
          />
        </div>
        <div className="form-group">
          <label htmlFor="pestAndDiseaseManagement">
            <strong>Pest and Disease Management:</strong>
          </label>
          <textarea className="input1"
            placeholder="Enter the Pest and Disease Management"
            value={pestAndDiseaseManagement}
            onChange={(e) => setPestAndDiseaseManagement(e.target.value)}
            name="pestAndDiseaseManagement"
          />
        </div>
        <div className="form-group">
          <label htmlFor="harvesting">
            <strong>Harvesting:</strong>
          </label>
          <textarea className="input1"
            placeholder="Enter the Harvesting"
            value={harvesting}
            onChange={(e) => setHarvesting(e.target.value)}
            name="harvesting"
          />
        </div>
        <div className="form-group">
          <label htmlFor="plantingSeason">
            <strong>Planting Season:</strong>
          </label>
          <input 
            type="text"
            placeholder="Enter the Planting Season"
            value={plantingSeason}
            onChange={(e) => setPlantingSeason(e.target.value)}
            name="plantingSeason"
          />
        </div>
        <div className="form-group">
          <label htmlFor="harvestingAge">
            <strong>Harvesting Age (in months):</strong>
          </label>
          <input
            type="number"
            placeholder="Enter the Harvesting Age"
            value={harvestingAge}
            onChange={handleHarvestAgeChange}
            name="harvestingAge"
          />
        </div>
        <div className="form-group">
          <label htmlFor="expectedYield">
            <strong>Expected Yield:</strong>
          </label>
          <input
            type="text"
            placeholder="Enter the Expected Yield"
            value={expectedYield}
            onChange={(e) => setExpectedYield(e.target.value)}
            name="expectedYield"
          />
        </div>
        <div className="form-group">
          <label htmlFor="companionPlants">
            <strong>Companion Plants:</strong>
          </label>
          <textarea className="input1"
            placeholder="Enter the Companion Plants"
            value={companionPlants}
            onChange={(e) => setCompanionPlants(e.target.value)}
            name="companionPlants"
          />
        </div>
        <div className="form-group">
          <label htmlFor="varieties">
            <strong>Varieties:</strong>
          </label>
          <textarea className="input1"
            placeholder="Enter the Varieties"
            value={varieties}
            onChange={(e) => setVarieties(e.target.value)}
            name="varieties"
          />
        </div>
        <div className="form-group">
          <label htmlFor="averageRating">
            <strong>Average Rating (out of 10):</strong>
          </label>
          <input
            type="text"
            placeholder="Enter the Average Rating"
            value={averageRating}
            onChange={handleRatingChange}
            name="averageRating"
          />
        </div>
        <div className="form-group">
          <label htmlFor="source">
            <strong>Source:</strong>
          </label>
          <input
            type="text"
            placeholder="Enter the Source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            name="source"
          />
        </div>
        <div className="form-group">
          <label htmlFor="plantImage">
            <strong>Plant Image URL:</strong>
          </label>
          <input
            type="text"
            placeholder="Enter the Plant Image URL"
            value={plantImage}
            onChange={(e) => setPlantImage(e.target.value)}
            name="plantImage"
          />
        </div>
        <Link to="/get">
          <button className="add-btn" onClick={senddb} type="submit" value="SAVE">
            Save
          </button>
        </Link>
        <Link to="/admin/get">
          <button className="cancel-btn">Cancel </button>
        </Link>
      </form>
    </div>
  );
}

export default AddData;
