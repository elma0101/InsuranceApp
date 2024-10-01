package com.example.demo;



import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import java.util.List;



@Service
public class PolicyService {

    @Autowired
    private PolicyRepository policyRepository;


    private ContractRepository contractRepository;
    private SupplierRepository supplierRepository;

    public List<Policy> getAllPolicies() {
        return policyRepository.findAll();
    }

    public Policy getPolicyById(Long id) {
        return policyRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Policy not found"));
    }

    public Policy createPolicy(Policy policy) {
        return policyRepository.save(policy);
    }

    // Update and delete methods
    public Policy updatePolicy(Long id, Policy policyDetails) {
        Policy policy = policyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Policy not found"));

        policy.setContract(policyDetails.getContract());
        policy.setId(policyDetails.getId());
        policy.setNumber(policyDetails.getNumber());
        policy.setLabel(policyDetails.getLabel());
        policy.setRequired(policyDetails.isRequired());
        policy.setStatus(policyDetails.getStatus());
        policy.setStartDate(policyDetails.getStartDate());
        policy.setEndDate(policyDetails.getEndDate());


        // Update other fields as necessary

        return policyRepository.save(policy);
    }

    public void deletePolicy(Long id) {
        Policy policy = policyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Policy not found"));
        


        policyRepository.delete(policy);
        //contractRepository.delete(contract);
    }
}