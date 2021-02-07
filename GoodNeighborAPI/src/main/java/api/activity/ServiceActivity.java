package api.activity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ServiceActivity {

    @Autowired
    private RepositoryActivity repositoryActivity;

    public EntityActivity save(EntityActivity activity) {
        return repositoryActivity.save(activity);
    }

    public Optional<EntityActivity> getForId(int id) {
        return repositoryActivity.findById(id);
    }

    public Optional<EntityActivity> update(int id, EntityActivity activity) {
        return getForId(id).map(record -> {
            record.setName(activity.getName());
            return save(record);
        });
    }

    public Optional<EntityActivity> delete(int id) {
        return getForId(id).map(record -> {
            repositoryActivity.delete(record);
            return record;
        });
    }

    public List<EntityActivity> listAll() {
        return repositoryActivity.findAll();
    }
}
