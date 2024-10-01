package com.example.demo;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import java.util.List;




@Service
public class ContractService {

    @Autowired
    private  ContractRepository contractRepository;


    public List<Contract> getAllContracts() {
        return contractRepository.findAll();
    }



    public Contract getContractById(Long id) {
        return contractRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Contract not found"));
    }

    public Contract createContract(Contract contract) {
        return contractRepository.save(contract);
    }

    // Update and delete methods

    public Contract updateContract(Long id, Contract contractDetails) {
        Contract contract = contractRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Contract not found"));

        contract.setId(contractDetails.getId());
        contract.setNumber(contractDetails.getNumber());
        contract.setDirection(contractDetails.getDirection());
        contract.setAmount(contractDetails.getAmount());
        contract.setCurrency(contractDetails.getCurrency());
        contract.setObject(contractDetails.getObject());
        contract.setYear(contractDetails.getYear());
        // Update other fields as necessary

        return contractRepository.save(contract);
    }

    public void deleteContract(Long id) {
        Contract contract = contractRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Contract not found"));
        contractRepository.delete(contract);
    }
}