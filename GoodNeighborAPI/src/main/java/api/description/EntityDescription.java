package api.description;

import api.invoice.EntityInvoice;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
@Table(name = "tbdescription")
public class EntityDescription {

    @Id
    @GeneratedValue
    private int id;

    private int no;
    private String workDescription;
    private int amount;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "tbinvoiceid", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private EntityInvoice invoice;

    // delete from here

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getNo() {
        return no;
    }

    public void setNo(int no) {
        this.no = no;
    }

    public String getWorkDescription() {
        return workDescription;
    }

    public void setWorkDescription(String workDescription) {
        this.workDescription = workDescription;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public EntityInvoice getInvoice() {
        return invoice;
    }

    public void setInvoice(EntityInvoice invoice) {
        this.invoice = invoice;
    }
}
