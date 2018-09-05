package com.neu.service;
/**
 * @version 1.0
 * @description Carsystem
 * @authonr Demon
 * @date 2018/7/18
 */
import com.neu.bean.CarType;

import java.util.List;

public interface ICarTypeService {
    void addCarType(CarType cty);
    void modifyCarType(CarType cty);
    void removeCarType(int id);
    List<CarType> findAllCty();
    CarType findCtyById(int id);
    List<CarType> findCtyByName(String name);
    List<CarType> findCtyByNameReach(String name);
}
