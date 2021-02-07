package api.vehicule;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"vehicule"})
@CrossOrigin("*")
public class RestControllerVehicule {

    @Autowired
    private ServiceVehicule serviceVehicule;

    @PostMapping
    public EntityVehicule addVehicule(@RequestBody EntityVehicule vehicule) {
        return serviceVehicule.save(vehicule);
    }

    @GetMapping(path = "{id}")
    public ResponseEntity<EntityVehicule> showVehicule(@PathVariable int id) {
        return serviceVehicule.getForId(id)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping(path = "{id}")
    public ResponseEntity<EntityVehicule> editVehicule(@PathVariable int id, @RequestBody EntityVehicule vehicule) {
        return serviceVehicule.update(id, vehicule)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity<EntityVehicule> deleteVehicule(@PathVariable int id) {
        return serviceVehicule.delete(id)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public List<EntityVehicule> showListVehicule() {
        return serviceVehicule.listAll();
    }
}
