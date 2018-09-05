package com.neu.bean;

import java.util.Date;

public class Order {
    private Integer id;
    private Integer cusId;
    private String numbers;
    private Date creatTime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getCusId() {
        return cusId;
    }

    public void setCusId(Integer cusId) {
        this.cusId = cusId;
    }

    public String getNumbers() {
        return numbers;
    }

    public void setNumbers(String numbers) {
        this.numbers = numbers;
    }

    public Date getCreatTime() {
        return creatTime;
    }

    public void setCreatTime(Date creatTime) {
        this.creatTime = creatTime;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", cusId=" + cusId +
                ", numbers='" + numbers + '\'' +
                ", creatTime=" + creatTime +
                '}';
    }
}
