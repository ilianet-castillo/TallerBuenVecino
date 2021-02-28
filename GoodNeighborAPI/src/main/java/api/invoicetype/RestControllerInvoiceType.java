package api.invoicetype;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"invoice_type"})
@CrossOrigin("*")
public class RestControllerInvoiceType {

    @Autowired
    private ServiceInvoiceType serviceType;

    @PostMapping
    public EntityInvoiceType addType(@RequestBody EntityInvoiceType invoiceType) {
        return serviceType.save(invoiceType);
    }

    @GetMapping(path = "{id}")
    public ResponseEntity<EntityInvoiceType> showType(@PathVariable int id) {
        return serviceType.getForId(id)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping(path = "{id}")
    public ResponseEntity<EntityInvoiceType> editType(@PathVariable int id, @RequestBody EntityInvoiceType invoiceType) {
        return serviceType.update(id, invoiceType)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity<EntityInvoiceType> deleteType(@PathVariable int id) {
        return serviceType.delete(id)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public List<EntityInvoiceType> showListType() {
        return serviceType.listAll();
    }

}
