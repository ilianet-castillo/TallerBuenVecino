package api.coin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ServiceCoin {

    @Autowired
    private RepositoryCoin repositoryCoin;

    public EntityCoin save(EntityCoin coin) {
        return repositoryCoin.save(coin);
    }

    public Optional<EntityCoin> getForId(int id) {
        return repositoryCoin.findById(id);
    }

    public Optional<EntityCoin> update(int id, EntityCoin coin) {
        return getForId(id).map(record -> {
            record.setName(coin.getName());
            record.setAcronym(coin.getAcronym());
            return save(record);

        });
    }

    public Optional<EntityCoin> delete(int id) {
        return getForId(id).map(record -> {
            repositoryCoin.delete(record);
            return record;
        });
    }

    public List<EntityCoin> listAll() {
        return repositoryCoin.findAll();
    }

}
