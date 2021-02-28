package api.employee;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryEmployee extends JpaRepository<EntityEmployee, Integer> {
}
