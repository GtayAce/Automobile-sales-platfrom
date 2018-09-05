package com.neu.bean;

import java.util.Date;

public class TestOrder {
    private String numbers;
    private String cusName;
    private String cusRealName;
    private String cusAddress;
    private String cusTelephone;
    private String carName;
    private Double carPrice;
    private Date creatTime;
    private int sign;

    @Override
    public String toString() {
        return "TestOrder{" +
                "numbers='" + numbers + '\'' +
                ", cusName='" + cusName + '\'' +
                ", cusRealName='" + cusRealName + '\'' +
                ", cusAddress='" + cusAddress + '\'' +
                ", cusTelephone='" + cusTelephone + '\'' +
                ", carName='" + carName + '\'' +
                ", carPrice=" + carPrice +
                ", creatTime=" + creatTime +
                ", sign=" + sign +
                ", carNum=" + carNum +
                '}';
    }

    public Date getCreatTime() {
        return creatTime;
    }

    public void setCreatTime(Date creatTime) {
        this.creatTime = creatTime;
    }

    public int getSign() {
        return sign;
    }

    public void setSign(int sign) {
        this.sign = sign;
    }

    public String getNumbers() {
        return numbers;
    }

    public void setNumbers(String numbers) {
        this.numbers = numbers;
    }

    public String getCusName() {
        return cusName;
    }

    public void setCusName(String cusName) {
        this.cusName = cusName;
    }
    public String getCusRealName() {
        return cusRealName;
    }

    public void setCusRealName(String cusRealName) {
        this.cusRealName = cusRealName;
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

    public String getCarName() {
        return carName;
    }

    public void setCarName(String carName) {
        this.carName = carName;
    }

    public Double getCarPrice() {
        return carPrice;
    }

    public void setCarPrice(Double carPrice) {
        this.carPrice = carPrice;
    }

    public int getCarNum() {
        return carNum;
    }

    public void setCarNum(int carNum) {
        this.carNum = carNum;
    }

    private int  carNum;


}
