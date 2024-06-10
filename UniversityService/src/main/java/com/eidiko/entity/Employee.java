package com.eidiko.entity;

import java.util.List;


import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;


@Entity
@Data
@Table(name="Employee_DETAILS_TABLE")
public class Employee {

	
	  @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Integer id;
	    
	    private String username;
	    private String password;
	    private String email;
	    
	    @Enumerated(EnumType.STRING)
	    private Role role;
	    
	    @JsonManagedReference
	    @OneToMany(mappedBy = "employee", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	    private List<Address> addresses;
}
