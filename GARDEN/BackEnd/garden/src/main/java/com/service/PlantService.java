package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.Plant;
import com.repository.PlantRepository;

@Service
public class PlantService {
	
	@Autowired
	PlantRepository plantRepository;  
	
	public String savePlant(Plant request){
        var plant = Plant.builder()
        .commonName(request.getCommonName())
        .scientificName(request.getScientificName())
        .description(request.getDescription())
        .plantFamily(request.getPlantFamily())
        .plantType(request.getPlantType())
        .growingConditions(request.getGrowingConditions())
        .wateringNeeds(request.getWateringNeeds())
        .fertilization(request.getFertilization())
        .maintenance(request.getMaintenance())
        .pestAndDiseaseManagement(request.getPestAndDiseaseManagement())
        .harvesting(request.getHarvesting())
        .plantingSeason(request.getPlantingSeason())
        .harvestingAge(request.getHarvestingAge())
        .expectedYield(request.getExpectedYield())
        .companionPlants(request.getCompanionPlants())
        .varieties(request.getVarieties())
        .averageRating(request.getAverageRating())
        .sourceAndOrigin(request.getSourceAndOrigin())
        .plantImage(request.getPlantImage())
        .build();
        plantRepository.save(plant);
        return "Plant Added Successfully";
    }

    public Optional<Plant> getPlant(long id){
        return plantRepository.findById(id);
    }

    public List<Plant> getAllPlant(){
        return plantRepository.findAll();
    }

    public String updatePlant(long id, Plant request){
        Plant plant = plantRepository.findByplantId(id);
        if(plant!=null){
        	
        	plant.setCommonName(request.getCommonName());
        	plant.setScientificName(request.getScientificName());
        	plant.setDescription(request.getDescription());
        	plant.setPlantFamily(request.getPlantFamily());
        	plant.setPlantType(request.getPlantType());
        	plant.setGrowingConditions(request.getGrowingConditions());
        	plant.setWateringNeeds(request.getWateringNeeds());
        	plant.setFertilization(request.getFertilization());
        	plant.setMaintenance(request.getMaintenance());
        	plant.setPestAndDiseaseManagement(request.getPestAndDiseaseManagement());
        	plant.setHarvesting(request.getHarvesting());
        	plant.setPlantingSeason(request.getPlantingSeason());
        	plant.setHarvestingAge(request.getHarvestingAge());
        	plant.setExpectedYield(request.getExpectedYield());
        	plant.setCompanionPlants(request.getCompanionPlants());
        	plant.setVarieties(request.getVarieties());
        	plant.setAverageRating(request.getAverageRating());
        	plant.setSourceAndOrigin(request.getSourceAndOrigin());
        	plant.setPlantImage(request.getPlantImage());;
            plantRepository.save(plant);
            return "Plant Updated";
        }
        return null;
    }

    public void deletePlant(long id){
        Plant plant = plantRepository.findByplantId(id);
        if(plant!=null){
        	plantRepository.deleteById(id);
        }
    }
}
