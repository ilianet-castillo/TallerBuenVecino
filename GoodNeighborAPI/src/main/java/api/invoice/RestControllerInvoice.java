package api.invoice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.ByteArrayInputStream;
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

    @GetMapping(path = {"pdf/{id}"}, produces = MediaType.APPLICATION_PDF_VALUE)
    public ResponseEntity<InputStreamResource> getInvoicePDF(@PathVariable int id) {
        ByteArrayInputStream byteArrayInputStream = serviceInvoice.getInvoicePDF(id);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "inline; filename=invoice.pdf");

        return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                .body(new InputStreamResource(byteArrayInputStream));
    }

}
