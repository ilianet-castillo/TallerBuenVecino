package api.coin;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryCoin extends JpaRepository<EntityCoin, Integer> {
}
