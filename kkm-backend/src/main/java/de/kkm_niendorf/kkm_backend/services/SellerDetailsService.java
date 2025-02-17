package de.kkm_niendorf.kkm_backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import de.kkm_niendorf.kkm_backend.SellerDetails;
import de.kkm_niendorf.kkm_backend.repositorys.SellerDetailsRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SellerDetailsService {
    
    @Autowired
    private SellerDetailsRepository sellerrepository;

    public List<SellerDetails> getAllSellerDetails(){
        return sellerrepository.findAll();
    }

    public Optional<SellerDetails> getSellerDetailById(String id) {
        return sellerrepository.findById(id);
    }

    public SellerDetails createNewSellerDetails(SellerDetails sellerdetail){
        return sellerrepository.save(sellerdetail);
    }

    public SellerDetails updateExistingSellerDetails(String id, SellerDetails updatedSellerDetails){
        return sellerrepository.findById(id).map(existingSellerDetail -> {
            existingSellerDetail.setFirstname(updatedSellerDetails.getFirstname());
            existingSellerDetail.setLastname(updatedSellerDetails.getLastname());
            existingSellerDetail.setPhonenumber(updatedSellerDetails.getPhonenumber());
            existingSellerDetail.setEmailadress(updatedSellerDetails.getEmailadress());
            existingSellerDetail.setSellernumber(updatedSellerDetails.getSellernumber());
            return existingSellerDetail;
        }).map(sellerrepository::save).orElseThrow(() -> new RuntimeException("Detail mit id " + id + " wurde nicht gefunden."));
    }

    public void deleteAllSellerDetails(){
        sellerrepository.deleteAll();
    }

    public void deleteSellerDetailById(String id){
        sellerrepository.deleteById(id);
    }


}
