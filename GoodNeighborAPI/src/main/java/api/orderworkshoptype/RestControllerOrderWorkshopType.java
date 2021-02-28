package api.orderworkshoptype;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"order_workshop_type"})
@CrossOrigin("*")
public class RestControllerOrderWorkshopType {

    @Autowired
    private ServiceOrderWorkshopType serviceOrderWorkshopType;

    @PostMapping
    public EntityOrderWorkshopType addPosition(@RequestBody EntityOrderWorkshopType orderWorkshopType) {
        return serviceOrderWorkshopType.save(orderWorkshopType);
    }

    @GetMapping(path = "{id}")
    public ResponseEntity<EntityOrderWorkshopType> showPosition(@PathVariable int id) {
        return serviceOrderWorkshopType.getForId(id)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping(path = "{id}")
    public ResponseEntity<EntityOrderWorkshopType> editPosition(@PathVariable int id, @RequestBody EntityOrderWorkshopType orderWorkshopType) {
        return serviceOrderWorkshopType.update(id, orderWorkshopType)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity<EntityOrderWorkshopType> deletePosition(@PathVariable int id) {
        return serviceOrderWorkshopType.delete(id)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public List<EntityOrderWorkshopType> showListPosition() {
        return serviceOrderWorkshopType.listAll();
    }

}
