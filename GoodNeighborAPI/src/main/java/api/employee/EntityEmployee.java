package api.employee;

import api.orderworkshop.EntityOrderWorkshop;
import api.position.EntityPosition;
import api.province.EntityProvince;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@JsonIdentityInfo(property = "jsonId", generator = ObjectIdGenerators.IntSequenceGenerator.class, scope = EntityEmployee.class)
@Entity
@Table(name = "tb_employee")
public class EntityEmployee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    private int phone;

    private long identityNumber;

    private String email;

    private String address;

    @ManyToOne
    @JoinColumn(name = "province_id", nullable = false)
    private EntityProvince province;

    @ManyToOne
    @JoinColumn(name = "position_id", nullable = false)
    private EntityPosition position;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "employee")
    private Set<EntityOrderWorkshop> orderWorkshops;

}
