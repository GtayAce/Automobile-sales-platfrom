package com.neu.dao;

import com.neu.bean.Customer;

import java.util.List;

public interface ICustomerDao {
    void insertCustomer(Customer cus);
    void updateCustomer(Customer cus);
    void deleteCustomer(int id);
    void updateCusPassword(int id, String password) ;
    List<Customer> selectAllCus();
    Customer selectCusById(int id);
    List<Customer> selectCusByName(String name);
    Customer selectLoginName(String name);
    List<Customer> selectCusByNameReach(String name);

}
