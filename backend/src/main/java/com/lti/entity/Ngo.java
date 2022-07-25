package com.lti.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_ngo")
public class Ngo {

	@Id
	@SequenceGenerator(name = "ngo_seq", initialValue = 1000, allocationSize = 1)
	@GeneratedValue(generator = "ngo_seq", strategy = GenerationType.SEQUENCE)
	int ngoId;

	String ngoName;
	String email;
	String password;
	String address;
	String description;
	int ngoContact;
	boolean isVerified;

	@OneToMany(mappedBy = "ngoId")
	Courses course;

	@OneToOne(mappedBy = "ngoId")
	NgoDocuments ngoDoc;

	@OneToMany(mappedBy = "ngoId")
	Accomodation accomodation;

	public int getNgoId() {
		return ngoId;
	}

	public void setNgoId(int ngoId) {
		this.ngoId = ngoId;
	}

	public String getNgoName() {
		return ngoName;
	}

	public void setNgoName(String ngoName) {
		this.ngoName = ngoName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getNgoContact() {
		return ngoContact;
	}

	public void setNgoContact(int ngoContact) {
		this.ngoContact = ngoContact;
	}

	public boolean isVerified() {
		return isVerified;
	}

	public void setVerified(boolean isVerified) {
		this.isVerified = isVerified;
	}

	public Courses getCourse() {
		return course;
	}

	public void setCourse(Courses course) {
		this.course = course;
	}

	public NgoDocuments getNgoDoc() {
		return ngoDoc;
	}

	public void setNgoDoc(NgoDocuments ngoDoc) {
		this.ngoDoc = ngoDoc;
	}

	public Accomodation getAccomodation() {
		return accomodation;
	}

	public void setAccomodation(Accomodation accomodation) {
		this.accomodation = accomodation;
	}

}
