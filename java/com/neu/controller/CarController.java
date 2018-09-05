package com.neu.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.neu.bean.Car;
import com.neu.service.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class CarController {
    @Autowired
    @Qualifier("carService")
    private ICarService service;

    private void setService(ICarService service) {
        this.service = service;
    }

    @RequestMapping("/addcar1.do")
    public String doInsertCar(Car crs) {
        service.addCar(crs);
        return "listCar.do";
    }
    @RequestMapping("/getCar.do")
    public String doGetCar(int id, Model model){
        Car c=service.findCrsById(id);
        model.addAttribute("crs",c);
        return "editCarnew.jsp";
    }
    @RequestMapping("/updateCar1.do")
    public String doUpdateCar(Car car, Model model)
    {
        service.modifyCar(car);
        return "listCar.do";
    }
    @RequestMapping("/deleteCar")
    public String doDeleteCar(int id, Model mode1)
    {
        service.removeCar(id);
        return  "listCar.do";
    }
    @RequestMapping("/listCar.do")
    public String doListCar(@RequestParam(value = "pn", defaultValue = "1") Integer pn, Model model){
        //引入分页挂件pagehelper
        //在查询之前只需用调用传入页码以每页的大小
        int pageSize = 5;
        PageHelper.startPage(pn, pageSize);
        //startPage紧跟查询，这个查询就是一个分页查询
        List<Car> cars=service.findAllCrs();
        for(Car crs:cars){
            System.out.println(crs);
        }
        PageInfo page = new PageInfo(cars, 5);
        model.addAttribute("pageInfo", page);
        return "listCar.jsp";
    }
    @RequestMapping("/listCarReach.do")
    public String doListCar(String name, @RequestParam(value = "pn", defaultValue = "1") Integer pn, Model model){
        //引入分页挂件pagehelper
        //在查询之前只需用调用传入页码以每页的大小
        int pageSize = 5;
        PageHelper.startPage(pn, pageSize);
        //startPage紧跟查询，这个查询就是一个分页查询
        //name="23";;
        List<Car> cars=service.findCrsByNameReach(name);
        for(Car crs:cars){
            System.out.println(crs);
        }
        PageInfo page = new PageInfo(cars, 5);
        model.addAttribute("pageInfo", page);
        return "listCar.jsp";
    }

}


