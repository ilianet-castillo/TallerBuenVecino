package api.type;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"type"})
@CrossOrigin("*")
public class RestControllerType {

    @Autowired
    private ServiceType serviceType;

    @PostMapping
    public EntityType addType(@RequestBody EntityType type) {
        return serviceType.save(type);
    }

    @GetMapping(path = "{id}")
    public ResponseEntity<EntityType> showType(@PathVariable int id) {
        return serviceType.getForId(id)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());

    }

    @PutMapping(path = "{id}")
    public ResponseEntity<EntityType> editType(@PathVariable int id, @RequestBody EntityType type) {
        return serviceType.update(id, type)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());

    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity<EntityType> deleteType(@PathVariable int id) {
        return serviceType.delete(id)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public List<EntityType> showListType() {
        return serviceType.listAll();
    }
}
