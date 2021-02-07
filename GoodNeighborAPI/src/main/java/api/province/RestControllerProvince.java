package api.province;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"province"})
@CrossOrigin("*")
public class RestControllerProvince {

    @Autowired
    private ServiceProvince serviceProvince;

    @PostMapping
    public EntityProvince addProvince(@RequestBody EntityProvince province) {
        return serviceProvince.save(province);
    }

    @GetMapping("{id}")
    public ResponseEntity<EntityProvince> showProvince(@PathVariable int id) {
        return serviceProvince.getForId(id)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("{id}")
    public ResponseEntity<EntityProvince> editPosition(@PathVariable int id, @RequestBody EntityProvince province) {
        return serviceProvince.update(id, province)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping
    public ResponseEntity<EntityProvince> deleteProvince(@PathVariable int id) {
        return serviceProvince.delete(id)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public List<EntityProvince> showListProvince() {
        return serviceProvince.listAll();
    }

}
