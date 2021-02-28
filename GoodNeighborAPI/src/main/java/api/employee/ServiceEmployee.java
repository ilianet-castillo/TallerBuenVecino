package api.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ServiceEmployee {

    @Autowired
    private RepositoryEmployee repositoryEmployee;

    public EntityEmployee save(EntityEmployee employee) {
        return repositoryEmployee.save(employee);
    }

    public Optional<EntityEmployee> getForId(int id) {
        return repositoryEmployee.findById(id);
    }

    public Optional<EntityEmployee> update(int id, EntityEmployee employee) {
        return getForId(id).map(record -> {
            record.setName(employee.getName());
            record.setPhone(employee.getPhone());
            record.setIdentityNumber(employee.getIdentityNumber());
            record.setEmail(employee.getEmail());
            record.setAddress(employee.getAddress());
            record.setProvince(employee.getProvince());
            record.setPosition(employee.getPosition());
            return save(record);
        });
    }

    public Optional<EntityEmployee> delete(int id) {
        return getForId(id).map(record -> {
            repositoryEmployee.delete(record);
            return record;
        });
    }

    public List<EntityEmployee> listAll() {
        return repositoryEmployee.findAll();
    }

}
