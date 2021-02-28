package api.vehicle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"vehicle"})
@CrossOrigin("*")
public class RestControllerVehicle {

    @Autowired
    private ServiceVehicle serviceVehicle;

    @PostMapping
    public EntityVehicle addVehicle(@RequestBody EntityVehicle vehicle) {
        return serviceVehicle.save(vehicle);
    }

    @GetMapping(path = "{id}")
    public ResponseEntity<EntityVehicle> showVehicle(@PathVariable int id) {
        return serviceVehicle.getForId(id)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping(path = "{id}")
    public ResponseEntity<EntityVehicle> editVehicle(@PathVariable int id, @RequestBody EntityVehicle vehicle) {
        return serviceVehicle.update(id, vehicle)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity<EntityVehicle> deleteVehicle(@PathVariable int id) {
        return serviceVehicle.delete(id)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public List<EntityVehicle> showListVehicle() {
        return serviceVehicle.listAll();
    }

}
