package com.neu.service.impl;

import com.neu.bean.TestOrder;
import com.neu.dao.IReachOrderDao;
import com.neu.service.IReachOrderSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("ReachOrderService")
public class ReachOrderServiceImpl implements IReachOrderSevice {
    @Autowired
    @Qualifier("IReachOrderDao")
    private IReachOrderDao OrderDao;
    public void setReachOrderDao(IReachOrderDao orderDao){
        this.OrderDao=orderDao;
    }

    @Override
    public List<TestOrder> findAllReachOrder() {
        List<TestOrder> mapper=OrderDao.seltctAllReachOrder();
        return mapper;
    }

    @Override
    public List<TestOrder> findAllReachrOrder(String numbers) {
        List<TestOrder> mapper=OrderDao.seltctAllReachrOrder(numbers);
        return mapper;
    }
    @Override
    public List<TestOrder> findAllReachrrOrder(String name) {
        List<TestOrder> mapper=OrderDao.seltctAllReachrrOrder(name);
        return mapper;
    }
    @Override
    public void modifySign(String numbers) {
        OrderDao.insertSign(numbers);
    }
}
