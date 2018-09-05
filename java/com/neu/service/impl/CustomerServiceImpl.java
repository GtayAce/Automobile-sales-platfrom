package com.neu.service.impl;

import com.neu.bean.Customer;
import com.neu.dao.ICustomerDao;
import com.neu.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("customerService")
public class CustomerServiceImpl implements ICustomerService {
    @Autowired
    @Qualifier("ICustomerDao")
    private ICustomerDao cusDao;

    public void setCustomerDao(ICustomerDao cusDao){
        this.cusDao=cusDao;
    }

    @Override
    public void addCustomer(Customer cus) {
        cusDao.insertCustomer(cus);
    }

    @Override
    public void modify(Customer cus) {
         cusDao.updateCustomer(cus);
    }

    @Override
    public void remove(int id) {
        cusDao.deleteCustomer(id);
    }

    @Override
    public List<Customer> findAllCus() {
        List<Customer> cus=cusDao.selectAllCus();
        return cus;
    }

    @Override
    public Customer findCusById(int id) {
        Customer cus=cusDao.selectCusById(id);
        return cus;
    }

    @Override
    public List<Customer> findCusByName(String name) {
        List<Customer> cus=cusDao.selectCusByName(name);
        return cus;
    }

    @Override
    public Customer checkLogin(String name,String password) {
        Customer cus=cusDao.selectLoginName(name);
        if(cus!=null&&cus.getCusPassword().equals(password)){
            return cus;
        }
        return null;
    }

    @Override
    public boolean registerNameOnly(String name) {
        Customer cus=cusDao.selectLoginName(name);
        if(cus!=null){
            return false;
        }
        return true;
    }
    @Override
    public List<Customer> findCusByNameReach(String name) {
        List<Customer> cus = cusDao.selectCusByNameReach(name);
        return cus;
    }

    @Override
    public void modifyCusPassword(int id, String password) {
        cusDao.updateCusPassword(id,password);
    }
}
