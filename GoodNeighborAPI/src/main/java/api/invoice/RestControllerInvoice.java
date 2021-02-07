package api.invoice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"invoice"})
@CrossOrigin("*")
public class RestControllerInvoice {

    @Autowired
    private ServiceInvoice serviceInvoice;

    @PostMapping
    public EntityInvoice addInvoice(@RequestBody EntityInvoice invoice) {
        return serviceInvoice.save(invoice);
    }

    @GetMapping(path = "{id}")
    public ResponseEntity<EntityInvoice> showInvoice(@PathVariable int id) {
        return serviceInvoice.getForId(id)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping(path = "{id}")
    public ResponseEntity<EntityInvoice> editInvoice(@PathVariable int id, @RequestBody EntityInvoice invoice) {
        return serviceInvoice.update(id, invoice)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity<EntityInvoice> deleteInvoice(@PathVariable int id) {
        return serviceInvoice.delete(id)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public List<EntityInvoice> showListInvoice() {
        return serviceInvoice.listAll();
    }
}
