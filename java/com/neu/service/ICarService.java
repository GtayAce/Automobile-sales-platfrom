package com.neu.service;

import com.neu.bean.Car;

import java.util.List;

public interface ICarService {

        void addCar(Car crs);
        void modifyCar(Car crs);
        void removeCar(int id);
        List<Car> findAllCrs();
        Car findCrsById(int id);
        List<Car> findCrsByName(String name);
        List<Car> findCrsByNameReach(String name);
        void removeoCarNum(int id);
}
