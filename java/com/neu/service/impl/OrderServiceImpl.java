package com.neu.service.impl;

import com.neu.bean.Order;
import com.neu.dao.IOrderDao;
import com.neu.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("orderService")
public class OrderServiceImpl implements IOrderService {
    @Autowired
    @Qualifier("IOrderDao")
    private IOrderDao orderDao;

    public void setOrderDao(IOrderDao orderDao){
        this.orderDao=orderDao;
    }
    @Override
    public void addOrder(Order order) {
        orderDao.insertOrder(order);
    }

    @Override
    public Order findOrderByCusId(int id) {
        Order order=orderDao.selectOrderByCusId(id);
        return order;
    }

    @Override
    public List<Order> findAllOrder() {
        List<Order> orders=orderDao.seltctAllOrder();
        return orders;
    }
}
