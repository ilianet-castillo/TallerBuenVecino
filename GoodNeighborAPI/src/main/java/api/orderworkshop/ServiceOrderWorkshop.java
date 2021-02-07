package api.orderworkshop;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ServiceOrderWorkshop {

    @Autowired
    private RepositoryOrderWorkshop repositoryOrderWorkshop;

    public EntityOrderWorkshop save(EntityOrderWorkshop orderWorkshop) {
        return repositoryOrderWorkshop.save(orderWorkshop);
    }

    public Optional<EntityOrderWorkshop> getForId(int id) {
        return repositoryOrderWorkshop.findById(id);
    }

    public Optional<EntityOrderWorkshop> update(int id, EntityOrderWorkshop orderWorkshop) {

        return getForId(id).map(record -> {
            record.setEmployee(orderWorkshop.getEmployee());
            record.setType(orderWorkshop.getType());
            record.setDateEntrance(orderWorkshop.getDateEntrance());
            record.setDateExit(orderWorkshop.getDateExit());
            record.setDateOrder(orderWorkshop.getDateOrder());
            record.setState(orderWorkshop.getState());
            return save(record);
        });
    }

    public Optional<EntityOrderWorkshop> delete(int id) {
        return getForId(id).map(record -> {
            repositoryOrderWorkshop.delete(record);
            return record;
        });
    }

    public List<EntityOrderWorkshop> listAll() {
        return repositoryOrderWorkshop.findAll();
    }
}