package com.neu.service;

import com.neu.bean.Customer;

import java.util.List;

public interface ICustomerService {
    void addCustomer(Customer cus);
    void modify(Customer cus);
     void modifyCusPassword(int id, String password) ;
    void remove(int id);
    List<Customer> findAllCus();
    Customer findCusById(int id);
    List<Customer> findCusByName(String name);
    Customer checkLogin(String name, String password);
    boolean registerNameOnly(String name);
    List<Customer> findCusByNameReach(String name);
}
