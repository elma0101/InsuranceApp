package com.example.demo;


import jakarta.persistence.*;


@Entity
public class Supplier {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String ice;
    private String if_supplier;
    private String name_supplier;
    private String address;
    private String city;

    // Other fields, getters, setters
    public Supplier() {
    }


    public Supplier(Long id, String city, String address, String name_supplier, String if_supplier, String ice) {
        this.id = id;
        this.city = city;
        this.address = address;
        this.name_supplier = name_supplier;
        this.if_supplier = if_supplier;
        this.ice = ice;
    }

    public void setIf(String if_supplier) {
        this.if_supplier = if_supplier;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setName(String name_supplier) {
        this.name_supplier = name_supplier;
    }

    public String getIf() {
        return if_supplier ;
    }

    public String getCity() {
        return city;
    }

    public String getAddress() {
        return address;
    }

    public String getName() {
        return name_supplier;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getIce() {
        return ice;
    }
    public void setIce(String ice) {
        this.ice = ice;
    }

}