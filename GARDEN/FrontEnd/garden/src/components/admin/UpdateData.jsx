import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PlantService from "../../Service/PlantService";
import "../../assets/styles/EditData.css";

const UpdateData = () => {
  const service = new PlantService();
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
  const [sourceAndOrigin, setSource] = useState("");
  const [plantImage, setPlantImage] = useState("");
  const { id } = useParams();

  const handleRatingChange = (e) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/[^\d.]/g, "");
    inputValue = inputValue.match(/^\d{0,1}\.?\d{0,1}/)[0];
    if (inputValue < 10) setAverageRating(inputValue);
    else alert("Enter a valid Rating which is less than 10...");
  };

  const handleHarvestingAgeChange = (e) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/\D/g, "");
    inputValue = inputValue.slice(0, 3);
    setHarvestingAge(inputValue);
  };

  const updatePlant = async (e) => {
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
      sourceAndOrigin.length === 0 ||
      plantImage.length === 0
    ) {
      alert("Enter all fields; they are mandatory!!");
    } else {
      e.preventDefault();
      const updatedPlant = {
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
        sourceAndOrigin,
        plantImage,
      };

      try {
        const response = await service.updatePlant(id, updatedPlant);
        if (response) {
          navigate("/admin/get");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  useEffect(() => {
    service
      .getPlantById(id)
      .then((response) => {
        window.scrollTo(0, 0);
        setCommonName(response.data.commonName);
        setScientificName(response.data.scientificName);
        setDescription(response.data.description);
        setPlantFamily(response.data.plantFamily);
        setPlantType(response.data.plantType);
        setGrowingConditions(response.data.growingConditions);
        setWateringNeeds(response.data.wateringNeeds);
        setFertilization(response.data.fertilization);
        setMaintenance(response.data.maintenance);
        setPestAndDiseaseManagement(response.data.pestAndDiseaseManagement);
        setHarvesting(response.data.harvesting);
        setPlantingSeason(response.data.plantingSeason);
        setHarvestingAge(response.data.harvestingAge);
        setExpectedYield(response.data.expectedYield);
        setCompanionPlants(response.data.companionPlants);
        setVarieties(response.data.varieties);
        setAverageRating(response.data.averageRating);
        setSource(response.data.sourceAndOrigin);
        setPlantImage(response.data.plantImage);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="edit-page">
      <form className="edit-form" action="">
        <h2>Update Plant Details</h2>
        <div className="form-group">
          <label htmlFor="CommonName">
            <strong>Common Name:</strong>
          </label>
          <input
            type="text"
            placeholder="Enter the Common Name"
            value={commonName}
            onChange={(e) => setCommonName(e.target.value)}
            name="CommonName"
          />
        </div>
        <div className="form-group">
          <label htmlFor="ScientificName">
            <strong>Scientific Name:</strong>
          </label>
          <input
            type="text"
            placeholder="Enter the Scientific Name"
            value={scientificName}
            onChange={(e) => setScientificName(e.target.value)}
            name="ScientificName"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Description">
            <strong>Description:</strong>
          </label>
          <input
            type="text"
            placeholder="Enter the Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="Description"
          />
        </div>
        <div className="form-group">
          <label htmlFor="PlantFamily">
            <strong>Plant Family:</strong>
          </label>
          <input
            type="text"
            placeholder="Enter the Plant Family"
            value={plantFamily}
            onChange={(e) => setPlantFamily(e.target.value)}
            name="PlantFamily"
          />
        </div>
        <div className="form-group">
          <label htmlFor="PlantType">
            <strong>Plant Type:</strong>
          </label>
          <input
            type="text"
            placeholder="Enter the Plant Type"
            value={plantType}
            onChange={(e) => setPlantType(e.target.value)}
            name="PlantType"
          />
        </div>
        <div className="form-group">
          <label htmlFor="GrowingConditions">
            <strong>Growing Conditions:</strong>
          </label>
          <input
            type="text"
            placeholder="Enter the Growing Conditions"
            value={growingConditions}
            onChange={(e) => setGrowingConditions(e.target.value)}
            name="GrowingConditions"
          />
        </div>
        <div className="form-group">
          <label htmlFor="WateringNeeds">
            <strong>Watering Needs:</strong>
          </label>
          <input
            type="text"
            placeholder="Enter the Watering Needs"
            value={wateringNeeds}
            onChange={(e) => setWateringNeeds(e.target.value)}
            name="WateringNeeds"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Fertilization">
            <strong>Fertilization:</strong>
          </label>
          <input
            type="text"
            placeholder="Enter the Fertilization"
            value={fertilization}
            onChange={(e) => setFertilization(e.target.value)}
            name="Fertilization"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Maintenance">
            <strong>Maintenance:</strong>
          </label>
          <input
            type="text"
            placeholder="Enter the Maintenance"
            value={maintenance}
            onChange={(e) => setMaintenance(e.target.value)}
            name="Maintenance"
          />
        </div>
        <div className="form-group">
          <label htmlFor="PestAndDiseaseManagement">
            <strong>Pest and Disease Management:</strong>
          </label>
          <input
            type="text"
            placeholder="Enter the Pest and Disease Management"
            value={pestAndDiseaseManagement}
            onChange={(e) => setPestAndDiseaseManagement(e.target.value)}
            name="PestAndDiseaseManagement"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Harvesting">
            <strong>Harvesting:</strong>
          </label>
          <input
            type="text"
            placeholder="Enter the Harvesting"
            value={harvesting}
            onChange={(e) => setHarvesting(e.target.value)}
            name="Harvesting"
          />
        </div>
        <div className="form-group">
          <label htmlFor="PlantingSeason">
            <strong>Planting Season:</strong>
          </label>
          <input
            type="text"
            placeholder="Enter the Planting Season"
            value={plantingSeason}
            onChange={(e) => setPlantingSeason(e.target.value)}
            name="PlantingSeason"
          />
        </div>
        <div className="form-group">
          <label htmlFor="HarvestingAge">
            <strong>Harvesting Age (in days):</strong>
          </label>
          <input
            type="text"
            placeholder="Enter the Harvesting Age"
            value={harvestingAge}
            onChange={handleHarvestingAgeChange}
            name="HarvestingAge"
          />
        </div>
        <div className="form-group">
          <label htmlFor="ExpectedYield">
            <strong>Expected Yield:</strong>
          </label>
          <input
            type="text"
            placeholder="Enter the Expected Yield"
            value={expectedYield}
            onChange={(e) => setExpectedYield(e.target.value)}
            name="ExpectedYield"
          />
        </div>
        <div className="form-group">
          <label htmlFor="CompanionPlants">
            <strong>Companion Plants:</strong>
          </label>
          <input
            type="text"
            placeholder="Enter the Companion Plants"
            value={companionPlants}
            onChange={(e) => setCompanionPlants(e.target.value)}
            name="CompanionPlants"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Varieties">
            <strong>Varieties:</strong>
          </label>
          <input
            type="text"
            placeholder="Enter the Varieties"
            value={varieties}
            onChange={(e) => setVarieties(e.target.value)}
            name="Varieties"
          />
        </div>
        <div className="form-group">
          <label htmlFor="AverageRating">
            <strong>Average Rating (out of 10):</strong>
          </label>
          <input
            type="number"
            placeholder="Enter the Average Rating"
            value={averageRating}
            onChange={handleRatingChange}
            name="AverageRating"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Source">
            <strong>Source:</strong>
          </label>
          <input
            type="text"
            placeholder="Enter the Source"
            value={sourceAndOrigin}
            onChange={(e) => setSource(e.target.value)}
            name="Source"
          />
        </div>
        <div className="form-group">
          <label htmlFor="PlantImage">
            <strong>Plant Image URL:</strong>
          </label>
          <input
            type="text"
            placeholder="Enter the Plant Image URL"
            value={plantImage}
            onChange={(e) => setPlantImage(e.target.value)}
            name="PlantImage"
          />
        </div>
        <Link to="/admin/get">
          <button
            id="add-btn"
            onClick={updatePlant}
            type="submit"
            value="Submit"
          >
            Update
          </button>
        </Link>
        <Link to="/admin/get">
          <button id="cancel-btn">Cancel</button>
        </Link>
      </form>
    </div>
  );
};

export default UpdateData;
