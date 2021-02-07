package api.invoice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ServiceInvoice {

    @Autowired
    private RepositoryInvoice repositoryInvoice;

    public EntityInvoice save(EntityInvoice invoice) {
        return repositoryInvoice.save(invoice);
    }

    public Optional<EntityInvoice> getForId(int id) {
        return repositoryInvoice.findById(id);
    }

    public Optional<EntityInvoice> update(int id, EntityInvoice invoice) {
        return getForId(id).map(record -> {
            record.setActivity(invoice.getActivity());
            record.setContact(invoice.getContact());
            record.setDate(invoice.getDate());
            record.setEmployee(invoice.getEmployee());
            record.setSignature(invoice.getSignature());
            record.setType(invoice.getType());
            record.setClient(invoice.getClient());
            return save(record);
        });
    }

    public Optional<EntityInvoice> delete(int id) {
        return getForId(id).map(record -> {
            repositoryInvoice.delete(record);
            return record;
        });
    }

    public List<EntityInvoice> listAll() {
        return repositoryInvoice.findAll();
    }
}
