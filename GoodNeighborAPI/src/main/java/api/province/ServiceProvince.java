package api.province;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ServiceProvince {

    @Autowired
    private RepositoryProvince repositoryProvince;

    public EntityProvince save(EntityProvince province) {
        return repositoryProvince.save(province);
    }

    public Optional<EntityProvince> getForId(int id) {
        return repositoryProvince.findById(id);
    }

    public Optional<EntityProvince> update(int id, EntityProvince province) {
        return getForId(id).map(record -> {
            record.setName(province.getName());
            return save(record);
        });
    }

    public Optional<EntityProvince> delete(int id) {
        return getForId(id).map(record -> {
            repositoryProvince.delete(record);
            return record;
        });
    }

    public List<EntityProvince> listAll() {
        return repositoryProvince.findAll();
    }
}
