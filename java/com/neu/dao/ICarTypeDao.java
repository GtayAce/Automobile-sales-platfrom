package com.neu.dao;
/**
 * @version 1.0
 * @description Carsystem
 * @authonr Demon
 * @date 2018/7/18
 */
import com.neu.bean.CarType;

import java.util.List;

public interface ICarTypeDao {
    void insertCarType(CarType cty);
    void updateCarType(CarType cty);
    void deleteCarType(int id);
    List<CarType> selectAllCty();
    CarType selectCtyById(int id);
    List<CarType> selectCtyByName(String name);
    List<CarType> selectCtyByNameReach(String name);
}
