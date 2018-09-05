package com.neu.service.impl;

import com.neu.bean.Car;
import com.neu.dao.ICarDao;
import com.neu.service.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("carService")
public class CarServiceImpl implements ICarService {
    @Autowired
    @Qualifier("ICarDao")
    private ICarDao crsDao;

    public void setCarDao(ICarDao crsDao){
        this.crsDao=crsDao;
    }

    @Override
    public void addCar(Car crs) {
        crsDao.insertCar(crs);
    }

    @Override
    public void modifyCar(Car crs) {
        crsDao.updateCar(crs);
    }

    @Override
    public void removeCar(int id) {
        crsDao.deleteCar(id);
    }

    @Override
    public List<Car> findAllCrs() {
        List<Car> crs=crsDao.selectAllCrs();
        return crs;
    }

    @Override
    public Car findCrsById(int id) {
        Car crs=crsDao.selectCrsById(id);
        return crs;
    }

    @Override
    public List<Car> findCrsByName(String name) {
        List<Car> crs=crsDao.selectCrsByName(name);
        return crs;
    }
    @Override
    public List<Car> findCrsByNameReach(String name) {
        List<Car> crs = crsDao.selectCrsByNameReach(name);
        return crs;
    }

    @Override
    public void removeoCarNum(int id) {
        crsDao.lessCar(id);
    }
}

