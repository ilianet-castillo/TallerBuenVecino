package api.client;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ServiceClient {

    @Autowired

    private RepositoryClient repositoryClient;

    public EntityClient save(EntityClient client) {
        return repositoryClient.save(client);
    }

    public Optional<EntityClient> getForId(int id) {
        return repositoryClient.findById(id);
    }

    public Optional<EntityClient> update(int id, EntityClient client) {

        return getForId(id).map(record -> {
            record.setAddress(client.getAddress());
            record.setComment(client.getComment());
            record.setEnterpriseName(client.getEnterpriseName());
            record.setPhone(client.getPhone());
            return save(record);
        });
    }

    public Optional<EntityClient> delete(int id) {
        return getForId(id).map(record -> {
            repositoryClient.delete(record);
            return record;
        });
    }

    public List<EntityClient> listAll() {
        return repositoryClient.findAll();
    }
}
