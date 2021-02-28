package api.position;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"position"})
@CrossOrigin("*")
public class RestControllerPosition {

    @Autowired
    private ServicePosition servicePosition;

    @PostMapping
    public EntityPosition addPosition(@RequestBody EntityPosition position) {
        return servicePosition.save(position);
    }

    @GetMapping(path = "{id}")
    public ResponseEntity<EntityPosition> showPosition(@PathVariable int id) {
        return servicePosition.getForId(id)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping(path = "{id}")
    public ResponseEntity<EntityPosition> editPosition(@PathVariable int id, @RequestBody EntityPosition position) {
        return servicePosition.update(id, position)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity<EntityPosition> deletePosition(@PathVariable int id) {
        return servicePosition.delete(id)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public List<EntityPosition> showListPosition() {
        return servicePosition.listAll();
    }

}
