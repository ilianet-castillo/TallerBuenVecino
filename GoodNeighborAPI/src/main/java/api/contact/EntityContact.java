package api.contact;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
@Table(name = "tbcontact")
public class EntityContact {
    @Id
    @GeneratedValue
    private int id;

    private String name;
    private String address;
    private String email;
    private String phone;
    private String tcp;
    private String nit;
    private String accountNumberCUP;
    private String accountNumberCUC;

    // remove from here


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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getTcp() {
        return tcp;
    }

    public void setTcp(String tcp) {
        this.tcp = tcp;
    }

    public String getNit() {
        return nit;
    }

    public void setNit(String nit) {
        this.nit = nit;
    }

    public String getAccountNumberCUP() {
        return accountNumberCUP;
    }

    public void setAccountNumberCUP(String accountNumberCUP) {
        this.accountNumberCUP = accountNumberCUP;
    }

    public String getAccountNumberCUC() {
        return accountNumberCUC;
    }

    public void setAccountNumberCUC(String accountNumberCUC) {
        this.accountNumberCUC = accountNumberCUC;
    }

}
