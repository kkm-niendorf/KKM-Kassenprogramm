package de.kkm_niendorf.kkm_backend;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "kkm_saledetails")
public class SaleDetails {

    @Id
    private String id;
    private String sellernumber;
    private String summaryprice;
}
