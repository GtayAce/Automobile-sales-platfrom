package com.neu.controller;
/**
 * @version 1.0
 * @description Carsystem
 * @authonr Demon
 * @date 2018/7/18
 */
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.neu.bean.CarType;
import com.neu.service.ICarTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class CarTypeController {
    @Autowired
    @Qualifier("carTypeService")
    private ICarTypeService service;

    private void setService(ICarTypeService service) {
        this.service = service;
    }

    @RequestMapping("/addcarType1.do")
    public String doInsertCarType(CarType cty) {
        service.addCarType(cty);
        return "listCarType.do";
    }
    @RequestMapping("/getCarType.do")
    public String doGetCarType(int id, Model model){
        CarType c=service.findCtyById(id);
        model.addAttribute("cty",c);
        return "editCarTypenew.jsp";
    }
    @RequestMapping("/updateCarType")
    public String doUpdateCarType(CarType carType, Model model)
    {
        service.modifyCarType(carType);
        return "listCarType.do";
    }
    @RequestMapping("/deleteCarType")
    public String doDeleteCarType(int id, Model mode1)
    {
        service.removeCarType(id);
        return  "listCarType.do";
    }
    @RequestMapping("/listCarType.do")
    public String doListCar(@RequestParam(value = "pn", defaultValue = "1") Integer pn, Model model){
        //引入分页挂件pagehelper
        //在查询之前只需用调用传入页码以每页的大小
        int pageSize = 5;
        PageHelper.startPage(pn, pageSize);
        //startPage紧跟查询，这个查询就是一个分页查询
        List<CarType> carTypes=service.findAllCty();
        for(CarType cty:carTypes){
            System.out.println(cty);
        }
        PageInfo page = new PageInfo(carTypes, 5);
        model.addAttribute("pageInfo", page);
        return "listCarType.jsp";
    }
    @RequestMapping("/listCarTypeReach.do")
    public String doListCar(String name, @RequestParam(value = "pn", defaultValue = "1") Integer pn, Model model){
        //引入分页挂件pagehelper
        //在查询之前只需用调用传入页码以每页的大小
        int pageSize = 5;
        PageHelper.startPage(pn, pageSize);
        //startPage紧跟查询，这个查询就是一个分页查询
        //name="宝马";
        List<CarType> carTypes=service.findCtyByNameReach(name);
        for(CarType cty:carTypes){
            System.out.println(cty);
        }
        PageInfo page = new PageInfo(carTypes, 5);
        model.addAttribute("pageInfo", page);
        return "listCarType.jsp";
    }
}

