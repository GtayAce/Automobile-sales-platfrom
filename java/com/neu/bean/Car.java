package com.neu.bean;
public class Car {
    private Integer id;
    private int carTypeId;
    private String carName;
    private double carPrice;
    private String carPic;
    private int carNum;
    private String carNote;
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCarName() {
        return carName;
    }

    public void setCarName(String carName) {
        this.carName = carName;
    }

    public double getCarPrice() {
        return carPrice;
    }

    public void setCarPrice(double carPrice) {
        this.carPrice = carPrice;
    }

    public String getCarPic() {
        return carPic;
    }

    public void setCarPic(String carPic) {
        this.carPic = carPic;
    }

    public int getCarTypeId() {
        return carTypeId;
    }

    public void setCarTypeId(int carTypeId) {
        this.carTypeId = carTypeId;
    }

    public int getCarNum() {
        return carNum;
    }

    public void setCarNum(int carNum) {
        this.carNum = carNum;
    }

    public String getCarNote() {
        return carNote;
    }

    public void setCarNote(String carNote) {
        this.carNote = carNote;
    }


    @Override
    public String toString() {
        return "Car{" +
                "id=" + id +
                ", carName='" + carName + '\'' +
                ", carPrice=" + carPrice +
                ", carPic='" + carPic + '\'' +
                ", carTypeId='" + carTypeId + '\'' +
                ", carNum=" + carNum +
                ", carNote='" + carNote + '\''+
                '}';
    }


}


