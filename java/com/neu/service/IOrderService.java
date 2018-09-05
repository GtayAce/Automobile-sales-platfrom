package com.neu.service;

import com.neu.bean.Order;

import java.util.List;

public interface IOrderService{
    void addOrder(Order order);
    List<Order> findAllOrder();
    Order findOrderByCusId(int id);
}
