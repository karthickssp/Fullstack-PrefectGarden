import { useEffect, useState } from 'react';
import PlantService from '../../Service/PlantService';
import '../../assets/styles/ViewData.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const ViewData = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState('');
  const service =  new PlantService();
  const navigate = useNavigate();

  const deletePlant = (plantId) => {
    alert('Confirm to delete the Plant');
    service.deletePlant(plantId)
    .catch((error) => {
      console.log(error);
    });
    navigate("/admin/get");
  };
  const getPlant = async () => {
    try {
      const response = await service.getPlantById(id);
      setPlant(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPlant();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!plant) {
    return <div><center>The requested Plant is not found!</center></div>;
  }

  return (
    <div className="view-plant">
      <div className='view-form'>
        <h1>Plant Data</h1>
        <div className='form-group'>
          <label>Common Name:
            <span className="span1">{plant.commonName}</span>
          </label>
        </div>
        <div className='form-group'>
          <label>Scientific Name:
            <span className="span1">{plant.scientificName}</span>
          </label>
        </div>
        <div className='form-group'>
          <label>Description:
            <span className="span1">{plant.description}</span>
          </label>
        </div>
        <div className='form-group'>
          <label>Plant Family:
            <span className="span1">{plant.plantFamily}</span>
          </label>
        </div>
        <div className='form-group'>
          <label>Plant Type:
            <span className="span1">{plant.plantType}</span>
          </label>
        </div>
        <div className='form-group'>
          <label>Growing Conditions:
            <span className="span1">{plant.growingConditions}</span>
          </label>
        </div>
        <div className='form-group'>
          <label>Watering Needs:
            <span className="span1">{plant.wateringNeeds}</span>
          </label>
        </div>
        <div className='form-group'>
          <label>Fertilization:
            <span className="span1">{plant.fertilization}</span>
          </label>
        </div>
        <div className='form-group'>
          <label>Maintenance:
            <span className="span1">{plant.maintenance}</span>
          </label>
        </div>
        <div className='form-group'>
          <label>Pest and Disease Management:
            <span className="span1">{plant.pestAndDiseaseManagement}</span>
          </label>
        </div>
        <div className='form-group'>
          <label>Harvesting:
            <span className="span1">{plant.harvesting}</span>
          </label>
        </div>
        <div className='form-group'>
          <label>Planting Season:
            <span className="span1">{plant.plantingSeason}</span>
          </label>
        </div>
        <div className='form-group'>
          <label>Harvesting Age (in days):
            <span className="span1">{plant.harvestingAge}</span>
          </label>
        </div>
        <div className='form-group'>
          <label>Expected Yield:
            <span className="span1">{plant.expectedYield}</span>
          </label>
        </div>
        <div className='form-group'>
          <label>Companion Plants:
            <span className="span1">{plant.companionPlants}</span>
          </label>
        </div>
        <div className='form-group'>
          <label>Varieties:
            <span className="span1">{plant.varieties}</span>
          </label>
        </div>
        <div className='form-group'>
          <label>Average Rating (out of 10):
            <span className="span1">{plant.averageRating}</span>
          </label>
        </div>
        <div className='form-group'>
          <label>Source:
            <span className="span1">{plant.sourceAndOrigin}</span>
          </label>
        </div>
        <div className='form-group'>
          <label>Plant Image URL:
            <span className="span1">{plant.plantImage}</span>
          </label>
        </div>
        <div className="button-container">
          <Link to={`/admin/edit/${plant.plantId}`}><button className="update"><UpgradeIcon /></button></Link>
          <button onClick={() => deletePlant(plant.plantId)} className="delete"><DeleteForeverIcon /></button>
        </div>
        <Link to="/admin/get"><button className="back"><KeyboardBackspaceIcon /></button></Link>
      </div>
    </div>
  );
};

export default ViewData;
