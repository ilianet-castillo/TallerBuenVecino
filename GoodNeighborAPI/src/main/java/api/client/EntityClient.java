package api.client;

import api.vehicle.EntityVehicle;
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
@JsonIdentityInfo(property = "jsonId", generator = ObjectIdGenerators.IntSequenceGenerator.class, scope = EntityClient.class)
@Entity
@Table(name = "tb_client")
public class EntityClient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String enterpriseName;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private long phone;

    @Column(nullable = false)
    private String comment;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "client")
    private Set<EntityVehicle> vehicles;

}
