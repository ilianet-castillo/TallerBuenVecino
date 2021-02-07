package api.vehicule;

import api.client.EntityClient;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "tbvehicule")
public class EntityVehicule {

    @Id
    @GeneratedValue
    private int id;

    private String markModel;
    private String sheet;
    private int km;
    private String color;
    private String coment;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
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

    public String getMarkModel() {
        return markModel;
    }

    public void setMarkModel(String markModel) {
        this.markModel = markModel;
    }

    public String getSheet() {
        return sheet;
    }

    public void setSheet(String sheet) {
        this.sheet = sheet;
    }

    public int getKm() {
        return km;
    }

    public void setKm(int km) {
        this.km = km;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getComent() {
        return coment;
    }

    public void setComent(String coment) {
        this.coment = coment;
    }

    public EntityClient getClient() {
        return client;
    }

    public void setClient(EntityClient client) {
        this.client = client;
    }
}
