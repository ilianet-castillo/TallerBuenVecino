package api.orderworkshoptype;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ServiceOrderWorkshopType {

    @Autowired
    private RepositoryOrderWorkshopType repositoryOrderWorkshopType;

    public EntityOrderWorkshopType save(EntityOrderWorkshopType entityOrderWorkshopType) {
        return repositoryOrderWorkshopType.save(entityOrderWorkshopType);
    }

    public Optional<EntityOrderWorkshopType> getForId(int id) {
        return repositoryOrderWorkshopType.findById(id);
    }

    public Optional<EntityOrderWorkshopType> update(int id, EntityOrderWorkshopType entityOrderWorkshopType) {
        return getForId(id).map(record -> {
            record.setName(entityOrderWorkshopType.getName());
            return save(record);
        });
    }

    public Optional<EntityOrderWorkshopType> delete(int id) {
        return getForId(id).map(record -> {
            repositoryOrderWorkshopType.delete(record);
            return record;
        });
    }

    public List<EntityOrderWorkshopType> listAll() {
        return repositoryOrderWorkshopType.findAll();
    }

}
