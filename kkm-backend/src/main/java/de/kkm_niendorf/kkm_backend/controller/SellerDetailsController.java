package de.kkm_niendorf.kkm_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import de.kkm_niendorf.kkm_backend.SellerDetails;
import de.kkm_niendorf.kkm_backend.services.SellerDetailsService;
import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/kkm/sellerdetails")
@RequiredArgsConstructor
public class SellerDetailsController {

    @Autowired
    private SellerDetailsService sellerservice;

    @GetMapping
    public List<SellerDetails> getAllSellerDetails(){
        return sellerservice.getAllSellerDetails();
    }

    @GetMapping("/{id}")
    public ResponseEntity<SellerDetails> getSellerDetailById(@PathVariable String id){
        return sellerservice.getSellerDetailById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/addsellerdetails")
    public SellerDetails createNewSellerDetailsEntry(@RequestBody SellerDetails sellerdetail){
        sellerdetail.setId(null);
        return sellerservice.createNewSellerDetails(sellerdetail);
    }

    @PutMapping("/updatesellerdetail/{id}")
    public ResponseEntity<SellerDetails> updateDetailOfSellerDetailEntry(@PathVariable String id, @RequestBody SellerDetails sellerdetail){
        try{
            return ResponseEntity.ok(sellerservice.updateExistingSellerDetails(id, sellerdetail));
        }catch(RuntimeException exception){
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteAllSellerDetails(){
        sellerservice.deleteAllSellerDetails();
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSellerDetailById(@PathVariable String id){
        sellerservice.deleteSellerDetailById(id);
        return ResponseEntity.noContent().build();
    }

    
}
