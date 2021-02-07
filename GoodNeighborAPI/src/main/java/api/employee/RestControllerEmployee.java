package api.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"employee"})
@CrossOrigin("*")
public class RestControllerEmployee {

    @Autowired
    private ServiceEmployee serviceEmployee;

    @PostMapping
    public EntityEmployee addEmployee(@RequestBody EntityEmployee employee) {
        return serviceEmployee.save(employee);
    }

    @GetMapping(path = "{id}")
    public ResponseEntity<EntityEmployee> showEmployee(@PathVariable int id) {
        return serviceEmployee.getForId(id)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping(path = "{id}")
    public ResponseEntity<EntityEmployee> editEmployee(@PathVariable int id, @RequestBody EntityEmployee employee) {
        return serviceEmployee.update(id, employee)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());

    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity<EntityEmployee> deleteEmployee(@PathVariable int id) {
        return serviceEmployee.delete(id)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());

    }

    @GetMapping
    public List<EntityEmployee> showListEmployee() {
        return serviceEmployee.listAll();
    }
}
