package api.invoice;

import api.activity.EntityActivity;
import api.client.EntityClient;
import api.contact.EntityContact;
import api.employee.EntityEmployee;
import api.type.EntityType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "tbinvoice")
public class EntityInvoice {

    @Id
    @GeneratedValue
    private int id;

    private Date date;

    private String signature;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "tbtypeid", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private EntityType type;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "tbcontactd", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private EntityContact contact;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "tbemployeid", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private EntityEmployee employee;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "tbactivityid", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private EntityActivity activity;


    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "tbclientid", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private EntityClient client;


    // delete from here


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getSignature() {
        return signature;
    }

    public void setSignature(String signature) {
        this.signature = signature;
    }

    public EntityType getType() {
        return type;
    }

    public void setType(EntityType type) {
        this.type = type;
    }

    public EntityContact getContact() {
        return contact;
    }

    public void setContact(EntityContact contact) {
        this.contact = contact;
    }

    public EntityEmployee getEmployee() {
        return employee;
    }

    public void setEmployee(EntityEmployee employee) {
        this.employee = employee;
    }

    public EntityActivity getActivity() {
        return activity;
    }

    public void setActivity(EntityActivity activity) {
        this.activity = activity;
    }

    public EntityClient getClient() {
        return client;
    }

    public void setClient(EntityClient client) {
        this.client = client;
    }
}
