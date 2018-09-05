package com.neu.dao;

import com.neu.bean.Order;

import java.util.List;

public interface IOrderDao {
    void insertOrder(Order order);
    List<Order> seltctAllOrder();
    Order selectOrderByCusId(int id);
}
