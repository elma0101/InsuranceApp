package com.example.demo;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.ManyToOne;

import java.sql.Date;


@Entity
public class Policy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private Contract contract;
    private String number_policy;
    private String label;
    private boolean required;
    private String status;
    private Date startDate;
    private Date endDate;

    public void setNumber(String number_policy) {
        this.number_policy = number_policy;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setRequired(boolean required) {
        this.required = required;
    }

    public void setLabel(String label) {
        this.label = label;
    }



    public String getNumber() {
        return number_policy;
    }

    public Date getEndDate() {
        return endDate;
    }

    public Date getStartDate() {
        return startDate;
    }

    public String getStatus() {
        return status;
    }

    public boolean isRequired() {
        return required;
    }

    public String getLabel() {
        return label;
    }

    // Other fields, getters, setters
    public Policy() {
    }
    public Policy(Contract contract) {
        this.contract = contract;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Contract getContract() {
        return contract;
    }
    public void setContract(Contract contract) {
        this.contract = contract;
    }

}
