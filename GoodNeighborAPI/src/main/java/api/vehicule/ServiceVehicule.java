package api.vehicule;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ServiceVehicule {

    @Autowired
    private RepositoryVehicule repositoryVehicule;

    public EntityVehicule save(EntityVehicule vehicule) {
        return repositoryVehicule.save(vehicule);
    }

    public Optional<EntityVehicule> getForId(int id) {
        return repositoryVehicule.findById(id);
    }

    public Optional<EntityVehicule> update(int id, EntityVehicule vehicule) {
        return getForId(id).map(record -> {
            record.setClient(vehicule.getClient());
            record.setColor(vehicule.getColor());
            record.setComent(vehicule.getComent());
            record.setKm(vehicule.getKm());
            record.setMarkModel(vehicule.getMarkModel());
            record.setSheet(vehicule.getSheet());
            return save(record);
        });
    }

    public Optional<EntityVehicule> delete(int id) {
        return getForId(id).map(record -> {
            repositoryVehicule.delete(record);
            return record;
        });
    }

    public List<EntityVehicule> listAll() {
        return repositoryVehicule.findAll();
    }
}
