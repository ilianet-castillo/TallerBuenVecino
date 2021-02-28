package api.orderworkshopstate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ServiceOrderWorkshopState {

    @Autowired
    private RepositoryOrderWorkshopState repositoryOrderWorkshopState;

    public EntityOrderWorkshopState save(EntityOrderWorkshopState entityOrderWorkshopState) {
        return repositoryOrderWorkshopState.save(entityOrderWorkshopState);
    }

    public Optional<EntityOrderWorkshopState> getForId(int id) {
        return repositoryOrderWorkshopState.findById(id);
    }

    public Optional<EntityOrderWorkshopState> update(int id, EntityOrderWorkshopState entityOrderWorkshopState) {
        return getForId(id).map(record -> {
            record.setName(entityOrderWorkshopState.getName());
            return save(record);
        });
    }

    public Optional<EntityOrderWorkshopState> delete(int id) {
        return getForId(id).map(record -> {
            repositoryOrderWorkshopState.delete(record);
            return record;
        });
    }

    public List<EntityOrderWorkshopState> listAll() {
        return repositoryOrderWorkshopState.findAll();
    }

}
