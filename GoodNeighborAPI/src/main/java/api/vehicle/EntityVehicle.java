package api.vehicle;

import api.client.EntityClient;
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
@Table(name = "tb_vehicle")
public class EntityVehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String markModel;

    @Column(nullable = false, unique = true)
    private String sheet;

    @Column(nullable = false)
    private String color;

    @Column(nullable = false)
    private String comments;

    @ManyToOne
    @JoinColumn(name = "client_id", nullable = false)
    private EntityClient client;

}
