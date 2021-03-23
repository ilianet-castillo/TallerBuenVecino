package api.orderworkshop;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ServiceOrderWorkshop {

    @Autowired
    private RepositoryOrderWorkshop repositoryOrderWorkshop;

    public EntityOrderWorkshop save(EntityOrderWorkshop orderWorkshop) {
        orderWorkshop.setDateEntrance(new Date());
        return repositoryOrderWorkshop.save(orderWorkshop);
    }

    public Optional<EntityOrderWorkshop> getForId(int id) {
        return repositoryOrderWorkshop.findById(id);
    }

    public Optional<EntityOrderWorkshop> update(int id, EntityOrderWorkshop orderWorkshop) {
        return getForId(id).map(record -> {
            record.setDateExit(orderWorkshop.getDateExit());
            record.setOrderWorkshopState(orderWorkshop.getOrderWorkshopState());
            record.setOrderWorkshopType(orderWorkshop.getOrderWorkshopType());
            record.setEmployee(orderWorkshop.getEmployee());
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
