package api.vehicle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ServiceVehicle {

    @Autowired
    private RepositoryVehicle repositoryVehicle;

    public EntityVehicle save(EntityVehicle vehicle) {
        return repositoryVehicle.save(vehicle);
    }

    public Optional<EntityVehicle> getForId(int id) {
        return repositoryVehicle.findById(id);
    }

    public Optional<EntityVehicle> update(int id, EntityVehicle vehicle) {
        return getForId(id).map(record -> {
            record.setMarkModel(vehicle.getMarkModel());
            record.setSheet(vehicle.getSheet());
            record.setKms(vehicle.getKms());
            record.setColor(vehicle.getColor());
            record.setComments(vehicle.getComments());
            record.setClient(vehicle.getClient());
            return save(record);
        });
    }

    public Optional<EntityVehicle> delete(int id) {
        return getForId(id).map(record -> {
            repositoryVehicle.delete(record);
            return record;
        });
    }

    public List<EntityVehicle> listAll() {
        return repositoryVehicle.findAll();
    }

}
