package api.activity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"activity"})
@CrossOrigin("*")
public class RestControllerActivity {

    @Autowired
    private ServiceActivity serviceActivity;

    @PostMapping
    public EntityActivity addActivity(@RequestBody EntityActivity activity) {
        return serviceActivity.save(activity);
    }

    @GetMapping(path = "{id}")
    public ResponseEntity<EntityActivity> showActivity(@PathVariable int id) {
        return serviceActivity.getForId(id)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping(path = "{id}")
    public ResponseEntity<EntityActivity> editActivity(@PathVariable int id, @RequestBody EntityActivity activity) {
        return serviceActivity.update(id, activity)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity<EntityActivity> deleteActivity(@PathVariable int id) {
        return serviceActivity.delete(id)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public List<EntityActivity> showListActivity() {
        return serviceActivity.listAll();
    }
}
