package api.invoice;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryInvoice extends JpaRepository<EntityInvoice, Integer> {
}
