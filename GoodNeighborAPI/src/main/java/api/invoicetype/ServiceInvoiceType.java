package api.invoicetype;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ServiceInvoiceType {

    @Autowired
    private RepositoryInvoiceType repositoryType;

    public EntityInvoiceType save(EntityInvoiceType invoiceType) {
        return repositoryType.save(invoiceType);
    }

    public Optional<EntityInvoiceType> getForId(int id) {
        return repositoryType.findById(id);
    }

    public Optional<EntityInvoiceType> update(int id, EntityInvoiceType invoiceType) {
        return getForId(id).map(record -> {
            record.setType(invoiceType.getType());
            record.setTitle(invoiceType.getTitle());
            return save(record);
        });
    }

    public Optional<EntityInvoiceType> delete(int id) {
        return getForId(id).map(record -> {
            repositoryType.delete(record);
            return record;
        });
    }

    public List<EntityInvoiceType> listAll() {
        return repositoryType.findAll();
    }

}
