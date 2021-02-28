package api.position;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ServicePosition {

    @Autowired
    private RepositoryPosition repositoryPosition;

    public EntityPosition save(EntityPosition position) {
        return repositoryPosition.save(position);
    }

    public Optional<EntityPosition> getForId(int id) {
        return repositoryPosition.findById(id);
    }

    public Optional<EntityPosition> update(int id, EntityPosition position) {
        return getForId(id).map(record -> {
            record.setName(position.getName());
            return save(record);
        });
    }

    public Optional<EntityPosition> delete(int id) {
        return getForId(id).map(record -> {
            repositoryPosition.delete(record);
            return record;
        });
    }

    public List<EntityPosition> listAll() {
        return repositoryPosition.findAll();
    }

}

