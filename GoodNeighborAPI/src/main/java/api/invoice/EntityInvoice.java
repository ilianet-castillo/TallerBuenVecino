package api.invoice;

import api.client.EntityClient;
import api.contact.EntityContact;
import api.description.EntityDescription;
import api.employee.EntityEmployee;
import api.invoicetype.EntityInvoiceType;
import api.vehicle.EntityVehicle;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@JsonIdentityInfo(property = "jsonId", generator = ObjectIdGenerators.IntSequenceGenerator.class, scope = EntityInvoice.class)
@Entity
@Table(name = "tb_invoice")
public class EntityInvoice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "invoice_type_id", nullable = false)
    private EntityInvoiceType invoiceType;

    @ManyToOne
    @JoinColumn(name = "contact_id", nullable = false)
    private EntityContact contact;

    @ManyToOne
    @JoinColumn(name = "client_id", nullable = false)
    private EntityClient activityClient;

    @ManyToOne
    @JoinColumn(name = "vehicle_id", nullable = false)
    private EntityVehicle activityVehicle;

    // TODO one to one
    @Column(nullable = false)
    private long activityReferenceOt;

    @Column(nullable = false)
    private Date activityDate;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "invoice")
    private List<EntityDescription> descriptions;

    @ManyToOne
    @JoinColumn(name = "employee_invoice_id", nullable = false)
    private EntityEmployee employeeInvoice;

}
