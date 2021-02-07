package api.description;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ServiceDescription {

    @Autowired
    private RepositoryDescription repositoryDescription;

    public EntityDescription save(EntityDescription description) {
        return repositoryDescription.save(description);
    }

    public Optional<EntityDescription> getForId(int id) {
        return repositoryDescription.findById(id);
    }

    public Optional<EntityDescription> update(int id, EntityDescription description) {

        return getForId(id).map(record -> {
            record.setAmount(description.getAmount());
            record.setInvoice(description.getInvoice());
            record.setNo(description.getNo());
            record.setWorkDescription(description.getWorkDescription());
            return save(record);
        });
    }

    public Optional<EntityDescription> delete(int id) {
        return getForId(id).map(record -> {
            repositoryDescription.delete(record);
            return record;
        });
    }

    public List<EntityDescription> listAll() {
        return repositoryDescription.findAll();
    }
}
