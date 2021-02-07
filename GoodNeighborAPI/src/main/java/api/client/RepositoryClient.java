package api.client;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryClient extends JpaRepository<EntityClient, Integer> {
}
