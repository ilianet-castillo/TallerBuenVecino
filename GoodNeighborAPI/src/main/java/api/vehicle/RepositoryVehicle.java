package api.vehicle;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryVehicle extends JpaRepository<EntityVehicle, Integer> {
}
