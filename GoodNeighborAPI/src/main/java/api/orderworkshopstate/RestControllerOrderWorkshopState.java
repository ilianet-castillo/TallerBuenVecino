package api.orderworkshopstate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"order_workshop_state"})
@CrossOrigin("*")
public class RestControllerOrderWorkshopState {

    @Autowired
    private ServiceOrderWorkshopState serviceOrderWorkshopState;

    @PostMapping
    public EntityOrderWorkshopState addPosition(@RequestBody EntityOrderWorkshopState orderWorkshopState) {
        return serviceOrderWorkshopState.save(orderWorkshopState);
    }

    @GetMapping(path = "{id}")
    public ResponseEntity<EntityOrderWorkshopState> showPosition(@PathVariable int id) {
        return serviceOrderWorkshopState.getForId(id)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping(path = "{id}")
    public ResponseEntity<EntityOrderWorkshopState> editPosition(@PathVariable int id, @RequestBody EntityOrderWorkshopState orderWorkshopState) {
        return serviceOrderWorkshopState.update(id, orderWorkshopState)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity<EntityOrderWorkshopState> deletePosition(@PathVariable int id) {
        return serviceOrderWorkshopState.delete(id)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public List<EntityOrderWorkshopState> showListPosition() {
        return serviceOrderWorkshopState.listAll();
    }

}
