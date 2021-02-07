package api.type;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryType extends JpaRepository< EntityType, Integer> {
}
