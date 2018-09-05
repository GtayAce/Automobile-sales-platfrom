package com.neu.service;
import com.neu.bean.TestOrder;

import java.util.List;

public interface IReachOrderSevice {
    List<TestOrder> findAllReachOrder();
    List<TestOrder> findAllReachrOrder(String numbers);
    List<TestOrder> findAllReachrrOrder(String name);
    void modifySign(String numbers);
}
