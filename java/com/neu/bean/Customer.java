package com.neu.bean;

public class Customer {
    private Integer id;
    private String cusName;
    private String cusBirthday;
    private String cusPassword;
    private String cusRealName;
    private String cusIdCard;
    private String cusAddress;
    private String cusTelephone;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCusName() {
        return cusName;
    }

    public void setCusName(String cusName) {
        this.cusName = cusName;
    }

    public String getCusBirthday() {
        return cusBirthday;
    }

    public void setCusBirthday(String cusBirthday) {
        this.cusBirthday = cusBirthday;
    }

    public String getCusPassword() {
        return cusPassword;
    }

    public void setCusPassword(String cusPassword) {
        this.cusPassword = cusPassword;
    }

    public String getCusRealName() {
        return cusRealName;
    }

    public void setCusRealName(String cusRealName) {
        this.cusRealName = cusRealName;
    }

    public String getCusIdCard() {
        return cusIdCard;
    }

    public void setCusIdCard(String cusIdCard) {
        this.cusIdCard = cusIdCard;
    }

    public String getCusAddress() {
        return cusAddress;
    }

    public void setCusAddress(String cusAddress) {
        this.cusAddress = cusAddress;
    }

    public String getCusTelephone() {
        return cusTelephone;
    }

    public void setCusTelephone(String cusTelephone) {
        this.cusTelephone = cusTelephone;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "id=" + id +
                ", cusName='" + cusName + '\'' +
                ", cusBirthday='" + cusBirthday + '\'' +
                ", cusPassword='" + cusPassword + '\'' +
                ", cusRealName='" + cusRealName + '\'' +
                ", cusIdCard='" + cusIdCard + '\'' +
                ", cusAddress='" + cusAddress + '\'' +
                ", cusTelephone='" + cusTelephone + '\'' +
                '}';
    }
}
