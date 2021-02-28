package api.description;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"description"})
@CrossOrigin("*")
public class RestControllerDescription {

    @Autowired
    private ServiceDescription serviceDescription;

    @PostMapping
    public EntityDescription addDescription(@RequestBody EntityDescription description) {
        return serviceDescription.save(description);
    }

    @GetMapping(path = "{id}")
    public ResponseEntity<EntityDescription> showDescription(@PathVariable int id) {
        return serviceDescription.getForId(id)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping(path = "{id}")
    public ResponseEntity<EntityDescription> editDescription(@PathVariable int id, @RequestBody EntityDescription description) {
        return serviceDescription.update(id, description)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity<EntityDescription> deleteDescription(@PathVariable int id) {
        return serviceDescription.delete(id)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public List<EntityDescription> showListDescription() {
        return serviceDescription.listAll();
    }

}
