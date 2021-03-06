package api.contact;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ServiceContact {

    @Autowired
    private RepositoryContact repositoryContact;

    public EntityContact save(EntityContact contact) {
        return repositoryContact.save(contact);
    }

    public Optional<EntityContact> getForId(int id) {
        return repositoryContact.findById(id);
    }

    public Optional<EntityContact> update(int id, EntityContact contact) {
        return getForId(id).map(record -> {
            record.setName(contact.getName());
            record.setAddress(contact.getAddress());
            record.setEmail(contact.getEmail());
            record.setPhone(contact.getPhone());
            record.setTcp(contact.getTcp());
            record.setNit(contact.getNit());
            record.setAccountNumberCUP(contact.getAccountNumberCUP());
            record.setAccountNumberCUC(contact.getAccountNumberCUC());
            return save(record);
        });
    }

    public Optional<EntityContact> delete(int id) {
        return getForId(id).map(record -> {
            repositoryContact.delete(record);
            return record;
        });
    }

    public List<EntityContact> listAll() {
        return repositoryContact.findAll();
    }

}
