package com.neu.service.impl;

import com.neu.bean.CarType;
import com.neu.dao.ICarTypeDao;
import com.neu.service.ICarTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @version 1.0
 * @description Carsystem
 * @authonr Demon
 * @date 2018/7/18
 */

@Service("carTypeService")
public class CarTypeSevicelmpl implements ICarTypeService {
    @Autowired
    @Qualifier("ICarTypeDao")
    private ICarTypeDao ctyDao;

    public void setCarDao(ICarTypeDao ctyDao){
        this.ctyDao=ctyDao;
    }

    @Override
    public void addCarType(CarType cty) {
        ctyDao.insertCarType(cty);
    }

    @Override
    public void modifyCarType(CarType cty) {
        ctyDao.updateCarType(cty);
    }

    @Override
    public void removeCarType(int id) {
        ctyDao.deleteCarType(id);
    }

    @Override
    public List<CarType> findAllCty() {
        List<CarType> cty=ctyDao.selectAllCty();
        return cty;
    }

    @Override
    public CarType findCtyById(int id) {
        CarType cty=ctyDao.selectCtyById(id);
        return cty;
    }

    @Override
    public List<CarType> findCtyByName(String name) {
        List<CarType> cty=ctyDao.selectCtyByName(name);
        return cty;
    }
    @Override
    public List<CarType> findCtyByNameReach(String name) {
        List<CarType> cty = ctyDao.selectCtyByNameReach(name);
        return cty;
    }
}

