package com.example.demo;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;


@RestController
@RequestMapping("/api/contracts")
public class ContractController {

    @Autowired
    private  ContractService contractService;



    @GetMapping
    public List<Contract> getAllContracts() {
        return contractService.getAllContracts();
    }


    @GetMapping("/{id}")
    public Contract getContractById(@PathVariable Long id) {
        return contractService.getContractById(id);
    }


    @PostMapping
    public Contract createContract(@RequestBody Contract contract) {
        return contractService.createContract(contract);
    }

    // PUT and DELETE endpoints
    @PutMapping("/{id}")
    public Contract updateContract(@PathVariable Long id, @RequestBody Contract contractDetails) {
        return contractService.updateContract(id, contractDetails);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteContract(@PathVariable Long id) {
        try {
            contractService.deleteContract(id);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

}
