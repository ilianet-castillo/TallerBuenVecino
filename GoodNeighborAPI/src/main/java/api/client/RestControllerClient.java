package api.client;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"client"})
@CrossOrigin("*")
public class RestControllerClient {

    @Autowired
    private ServiceClient serviceClient;

    @PostMapping
    public EntityClient addClient(@RequestBody EntityClient client) {
        return serviceClient.save(client);
    }

    @GetMapping(path = "{id}")
    public ResponseEntity<EntityClient> showClient(@PathVariable int id) {
        return serviceClient.getForId(id)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping(path = "{id}")
    public ResponseEntity<EntityClient> editClient(@PathVariable int id, @RequestBody EntityClient client) {
        return serviceClient.update(id, client)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity<EntityClient> deleteClient(@PathVariable int id) {
        return serviceClient.delete(id)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public List<EntityClient> showListClient() {
        return serviceClient.listAll();
    }

}
