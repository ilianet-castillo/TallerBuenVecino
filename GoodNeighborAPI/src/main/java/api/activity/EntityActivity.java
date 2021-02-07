package api.activity;

import api.client.EntityClient;
import api.coin.EntityCoin;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "tbactivity")
public class EntityActivity {

    @Id
    @GeneratedValue
    private int id;

    private String name;
    private String noInvoice;
    private String noReferenceOt;
    private String referenceOt;
    private Date date;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "tbclientid", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private EntityClient client;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "tbcoinid", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private EntityCoin coin;

    // delete from here


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNoInvoice() {
        return noInvoice;
    }

    public void setNoInvoice(String noInvoice) {
        this.noInvoice = noInvoice;
    }

    public String getNoReferenceOt() {
        return noReferenceOt;
    }

    public void setNoReferenceOt(String noReferenceOt) {
        this.noReferenceOt = noReferenceOt;
    }

    public String getReferenceOt() {
        return referenceOt;
    }

    public void setReferenceOt(String referenceOt) {
        this.referenceOt = referenceOt;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public EntityClient getClient() {
        return client;
    }

    public void setClient(EntityClient client) {
        this.client = client;
    }

    public EntityCoin getCoin() {
        return coin;
    }

    public void setCoin(EntityCoin coin) {
        this.coin = coin;
    }
}
