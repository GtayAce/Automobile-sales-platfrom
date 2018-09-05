package com.neu.dao;

import com.neu.bean.TestOrder;

import java.util.List;

public interface IReachOrderDao {
    List<TestOrder> seltctAllReachOrder();
    List<TestOrder> seltctAllReachrOrder(String numbers);
    List<TestOrder> seltctAllReachrrOrder(String numbers);
    void  insertSign(String numbers);
}
