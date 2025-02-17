package de.kkm_niendorf.kkm_backend;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "kkm_sellerdetails")
public class SellerDetails {
    
    @Id
    private String id;
    private String firstname;
    private String lastname;
    private String emailadress;
    private String phonenumber;
    private Integer sellernumber;
}
