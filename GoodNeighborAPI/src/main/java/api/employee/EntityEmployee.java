package api.employee;

import api.position.EntityPosition;
import api.province.EntityProvince;
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
@Table(name = "tbemployee")
public class EntityEmployee {
    @Id
    @GeneratedValue
    private int id;

    private String name;
    private int phone;
    private long identityNumber;
    private String email;
    private String address;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "tbpositionid", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private EntityPosition position;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "tbprovinceid", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private EntityProvince province;

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

    public int getPhone() {
        return phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }

    public long getIdentityNumber() {
        return identityNumber;
    }

    public void setIdentityNumber(long identityNumber) {
        this.identityNumber = identityNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public EntityPosition getPosition() {
        return position;
    }

    public void setPosition(EntityPosition position) {
        this.position = position;
    }

    public EntityProvince getProvince() {
        return province;
    }

    public void setProvince(EntityProvince province) {
        this.province = province;
    }
}
