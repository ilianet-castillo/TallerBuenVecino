package api.orderworkshop;

import api.employee.EntityEmployee;
import api.orderworkshopstate.EntityOrderWorkshopState;
import api.orderworkshoptype.EntityOrderWorkshopType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "tb_order_workshop")
public class EntityOrderWorkshop {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private Date dateEntrance = new Date(System.currentTimeMillis());

    private Date dateExit;

    @ManyToOne
    @JoinColumn(name = "order_workshop_state_id", nullable = false)
    private EntityOrderWorkshopState orderWorkshopState;

    @ManyToOne
    @JoinColumn(name = "order_workshop_type_id", nullable = false)
    private EntityOrderWorkshopType orderWorkshopType;

    @ManyToOne
    @JoinColumn(name = "employee_id", nullable = false)
    private EntityEmployee employee;

}
