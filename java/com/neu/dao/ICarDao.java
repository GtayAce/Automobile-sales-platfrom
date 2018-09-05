package com.neu.dao;

import com.neu.bean.Car;

import java.util.List;

public interface ICarDao {
    void insertCar(Car crs);
    void updateCar(Car crs);
    void deleteCar(int id);
    List<Car> selectAllCrs();
    Car selectCrsById(int id);
    List<Car> selectCrsByName(String name);
    List<Car> selectCrsByNameReach(String name);
    void lessCar(int id);
}

