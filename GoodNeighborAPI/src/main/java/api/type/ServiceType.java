package api.type;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ServiceType {

    @Autowired
    private RepositoryType repositoryType;

    public EntityType save(EntityType type) {
        return repositoryType.save(type);
    }

    public Optional<EntityType> getForId(int id) {
        return repositoryType.findById(id);
    }

    public Optional<EntityType> update(int id, EntityType type) {
        return getForId(id).map(record -> {

            record.setTitle(type.getTitle());
            record.setType(type.getType());
            return save(record);
        });
    }

    public Optional<EntityType> delete(int id) {
        return getForId(id).map(record -> {
            repositoryType.delete(record);
            return record;
        });
    }

    public List<EntityType> listAll() {
        return repositoryType.findAll();
    }
}
