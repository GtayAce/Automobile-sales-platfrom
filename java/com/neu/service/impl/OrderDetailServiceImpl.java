package com.neu.service.impl;

import com.neu.bean.OrderDetail;
import com.neu.dao.IOrderDetailDao;
import com.neu.service.IOrderDeatailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service("orderDetailService")
public class OrderDetailServiceImpl implements IOrderDeatailService {
    @Autowired
    @Qualifier("IOrderDetailDao")

    private IOrderDetailDao orderDetailDao;

    @Override
    public void addOrderDetail(OrderDetail orderDetail) {
        orderDetailDao.insertOrderDetail(orderDetail);
    }
}
