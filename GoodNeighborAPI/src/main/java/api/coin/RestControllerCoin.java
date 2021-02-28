package api.coin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"coin"})
@CrossOrigin("*")
public class RestControllerCoin {

    @Autowired
    private ServiceCoin serviceCoin;

    @PostMapping
    public EntityCoin addCoin(@RequestBody EntityCoin coin) {
        return serviceCoin.save(coin);
    }

    @GetMapping(path = "{id}")
    public ResponseEntity<EntityCoin> showCoin(@PathVariable int id) {
        return serviceCoin.getForId(id)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping(path = "{id}")
    public ResponseEntity<EntityCoin> editCoin(@PathVariable int id, @RequestBody EntityCoin coin) {
        return serviceCoin.update(id, coin)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity<EntityCoin> deleteCoin(@PathVariable int id) {
        return serviceCoin.delete(id)
                .map(record -> ResponseEntity.ok(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public List<EntityCoin> showListCoin() {
        return serviceCoin.listAll();
    }

}
