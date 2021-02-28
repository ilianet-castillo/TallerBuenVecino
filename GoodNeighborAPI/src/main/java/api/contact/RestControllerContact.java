package api.contact;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"contact"})
@CrossOrigin("*")
public class RestControllerContact {

    @Autowired
    private ServiceContact serviceContact;

    @PostMapping
    public EntityContact addContact(@RequestBody EntityContact contact) {
        return serviceContact.save(contact);
    }

    @GetMapping(path = "{id}")
    public ResponseEntity<EntityContact> showContact(@PathVariable int id) {
        return serviceContact.getForId(id)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping(path = "{id}")
    public ResponseEntity<EntityContact> editContact(@PathVariable int id, @RequestBody EntityContact contact) {
        return serviceContact.update(id, contact)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity<EntityContact> deleteContact(@PathVariable int id) {
        return serviceContact.delete(id)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public List<EntityContact> showListContact() {
        return serviceContact.listAll();
    }

}
