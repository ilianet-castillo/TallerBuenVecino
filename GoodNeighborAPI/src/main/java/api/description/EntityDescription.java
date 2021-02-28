package api.description;

import api.invoice.EntityInvoice;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "tb_description")
public class EntityDescription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String workDescription;

    @Column(nullable = false)
    private int amount;

    @ManyToOne
    @JoinColumn(name = "invoice_id", nullable = false)
    private EntityInvoice invoice;

}
