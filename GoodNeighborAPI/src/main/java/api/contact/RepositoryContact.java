package api.contact;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryContact extends JpaRepository<EntityContact, Integer> {
}
