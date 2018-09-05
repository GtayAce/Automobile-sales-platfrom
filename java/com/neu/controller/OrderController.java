package com.neu.controller;

import com.neu.bean.*;
import com.neu.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Date;

@Controller
public class OrderController {
    @Autowired
    @Qualifier("orderService")

    private IOrderService service;
    @Autowired
    @Qualifier("orderDetailService")
    private IOrderDeatailService orderDeatailService;

    @Autowired
    @Qualifier("carService")
    private ICarService carService;

    @Autowired
    @Qualifier("customerService")
    private ICustomerService customerService;

    @Autowired
    @Qualifier("messageWordService")
    private IMessageWordService messageWordService;

    public void setService(IOrderService service){
        this.service=service;
    }
    public void setOrderDeatailService(IOrderDeatailService orderDeatailService){
        this.orderDeatailService=orderDeatailService;
    }
    public void setCarService(ICarService carService){
        this.carService=carService;
    }

    @RequestMapping("getorder.do")
    public String dogetOrder(Order order, OrderDetail orderDetail, int id, int carId, HttpSession session, HttpServletRequest request){
        Customer customer=customerService.findCusById(id);
        Car car=carService.findCrsById(carId);
        session.setAttribute("cus",customer);
        session.setAttribute("car",car);
        String s=request.getParameter("num");
        session.setAttribute("count",s);
        //System.out.println(s);
        return "/HTML/Order.jsp";
    }

    @RequestMapping("addorder.do")
    public String doaddOrder(Order order, OrderDetail orderDetail, Car car, MessageWord messageWord, int id, int carId, String textarea, HttpSession session, HttpServletRequest request){
        order.setCusId(id);
        order.setCreatTime(new Date());
        int a=(int)((Math.random())*10000);
        System.out.println(a);
        String num=String.valueOf(a);
        order.setNumbers(num);
        service.addOrder(order);
        int orderid=order.getId();
        //System.out.println(orderid);

        messageWord.setMnote(textarea);
        String ms=messageWord.getMnote();
        if(ms!=null&&ms!=""){
            messageWord.setMcusId(id);
            messageWord.setMcarId(carId);
            messageWord.setNoteCreatTime(new Date());
            messageWordService.addMessageWord(messageWord);
        }
        String s=request.getParameter("carnum");
        int i=Integer.parseInt(s);
        orderDetail.setOrderId(orderid);
        orderDetail.setCarId(carId);
        orderDetail.setCarNum(i);
        orderDeatailService.addOrderDetail(orderDetail);
        //System.out.println(s);
        for(int n=0;n<i;n++){
            carService.removeoCarNum(carId);
        }
        return "/HTML/main.jsp";
    }
}
