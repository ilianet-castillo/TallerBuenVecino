package api.orderworkshop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"orderworkshop"})
@CrossOrigin("*")
public class RestControllerOrderWorkshop {

    @Autowired
    private ServiceOrderWorkshop serviceOrderWorkshop;

    @PostMapping
    public EntityOrderWorkshop addOrderWorkshop(@RequestBody EntityOrderWorkshop orderWorkshop) {
        return serviceOrderWorkshop.save(orderWorkshop);
    }

    @GetMapping(path = "{id}")
    public ResponseEntity<EntityOrderWorkshop> showOrderWorkshop(@PathVariable int id) {
        return serviceOrderWorkshop.getForId(id)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping(path = "{id}")
    public ResponseEntity<EntityOrderWorkshop> editOrderWorkshop(@PathVariable int id, @RequestBody EntityOrderWorkshop orderWorkshop) {
        return serviceOrderWorkshop.update(id, orderWorkshop)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity<EntityOrderWorkshop> deleteOrderWorkshop(@PathVariable int id) {
        return serviceOrderWorkshop.delete(id)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public List<EntityOrderWorkshop> showListOrderworkshop() {
        return serviceOrderWorkshop.listAll();
    }
}

