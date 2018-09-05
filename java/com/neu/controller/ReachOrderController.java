package com.neu.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.neu.bean.TestOrder;
import com.neu.service.IReachOrderSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class ReachOrderController {
    @Autowired
    @Qualifier("ReachOrderService")
    private IReachOrderSevice Service;
    public void setService(IReachOrderSevice Service){
        this.Service=Service;
    }
    @RequestMapping("/listorder.do")
    public String doListorder(@RequestParam(value = "pn", defaultValue = "1") Integer pn, Model model){
        //引入分页挂件pagehelper
        //在查询之前只需用调用传入页码以每页的大小
        int pageSize = 5;
        PageHelper.startPage(pn, pageSize);
        //startPage紧跟查询，这个查询就是一个分页查询
        //name="23";;
        List<TestOrder> Orderss=Service.findAllReachOrder();
        for(TestOrder mapper:Orderss){
            System.out.println(mapper);
        }
        PageInfo page = new PageInfo(Orderss, 20);
        model.addAttribute("pageInfo", page);
        return "listorder.jsp";
    }
    @RequestMapping("/listorder1.do")
    public String doListrorder(String numbers, @RequestParam(value = "pn", defaultValue = "1") Integer pn, Model model){
        //引入分页挂件pagehelper
        //在查询之前只需用调用传入页码以每页的大小
        int pageSize = 5;
        PageHelper.startPage(pn, pageSize);
        //startPage紧跟查询，这个查询就是一个分页查询
        //name="23";;
        List<TestOrder> Orderss=Service.findAllReachrOrder(numbers);
        for(TestOrder mapper:Orderss){
            System.out.println(mapper);
        }
        PageInfo page = new PageInfo(Orderss, 20);
        model.addAttribute("pageInfo", page);
        return "listorder.jsp";
        }
    @RequestMapping("/listordername.do")
    public String doListrorder1(String name, @RequestParam(value = "pn", defaultValue = "1") Integer pn, Model model){
        //引入分页挂件pagehelper
        //在查询之前只需用调用传入页码以每页的大小
        int pageSize = 5;
        PageHelper.startPage(pn, pageSize);
        //startPage紧跟查询，这个查询就是一个分页查询
        //name="23";;
        List<TestOrder> Orderss=Service.findAllReachrrOrder(name);
        for(TestOrder mapper:Orderss){
            System.out.println(mapper);
        }
        PageInfo page = new PageInfo(Orderss, 20);
        model.addAttribute("pageInfo", page);
        return "/HTML/MyOrder.jsp";
    }
    @RequestMapping("/updatesign.do")
    public String doUpdateCar(String numbers, Model model)
    {
        Service.modifySign(numbers);
        return "listorder.do";
    }
    }
