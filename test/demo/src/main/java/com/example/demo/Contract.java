package com.example.demo;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
public class Contract {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String number_contract;
    private String object;
    private String direction;
    private int amount;
    private String currency;
    private int contract_year;

    // Other fields, getters, setters

    public String getNumber() {
        return number_contract;
    }

    public void setNumber(String number_contract) {
        this.number_contract = number_contract;
    }

    public void setYear(int contract_year) {
        this.contract_year = contract_year;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public void setDirection(String direction) {
        this.direction = direction;
    }

    public void setObject(String object) {
        this.object = object;
    }

    public int getYear() {
        return contract_year;
    }

    public String getCurrency() {
        return currency;
    }

    public int getAmount() {
        return amount;
    }

    public String getDirection() {
        return direction;
    }

    public String getObject() {
        return object;
    }


    public Contract() {
    }

    public Contract(Long id, String number_contract, String object, String direction, int amount, String currency, int contract_year) {
        this.id = id;
        this.number_contract = number_contract;
        this.object = object;
        this.direction = direction;
        this.amount = amount;
        this.currency = currency;
        this.contract_year = contract_year;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    @Override
    public String toString() {
        return "Contract{" +
                "id=" + id +
                ", number='" + number_contract + '\'' +
                ", object='" + object + '\'' +
                ", direction='" + direction + '\'' +
                ", amount=" + amount +
                ", currency='" + currency + '\'' +
                ", year=" + contract_year +
                '}';
    }

   
}