package com.neu.controller;

import com.neu.service.IOrderDeatailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;

@Controller
public class OrderDetailController {
    @Autowired
    @Qualifier("orderDetailService")
    private IOrderDeatailService orderDeatailService;

    public void setOrderDeatailService(IOrderDeatailService orderDeatailService){
        this.orderDeatailService=orderDeatailService;
    }
    /*@RequestMapping("/getorderdetail.do")
    public String dogetOrdertail(HttpSession session){
        Order order=(Order) session.getAttribute("order");
        System.out.println(order);
        return "showorder.jsp";
    }*/

}
