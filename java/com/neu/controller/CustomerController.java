package com.neu.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.neu.bean.Car;
import com.neu.bean.Customer;
import com.neu.bean.MessageWord;
import com.neu.service.ICarService;
import com.neu.service.ICustomerService;
import com.neu.service.IMessageWordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
public class CustomerController {
    @Autowired
    @Qualifier("customerService")
    private ICustomerService service;

    @Autowired
    @Qualifier("carService")
    private ICarService carService;

    @Autowired
    @Qualifier("messageWordService")
    private IMessageWordService messageWordService;

    public void setService(ICustomerService service){
        this.service=service;
    }
    public void setCarService(ICarService carService){
        this.carService=carService;
    }
    public void setMessageWordService(IMessageWordService messageWordService){
        this.messageWordService=messageWordService;
    }

    @RequestMapping("/myajax.do")
    @ResponseBody
    public String registerUserName(String cusName){
        // Map<String,Object> resultMap = new HashMap<String, Object>();
        if(StringUtils.isEmpty(cusName)){
            return "empty";
        }
        boolean tf = service.registerNameOnly(cusName);
        if(tf==true){
            //resultMap.put("result", "success");
            System.out.println("ture");
            return "success";
        }else{
            //resultMap.put("result", "notsuccess");
            System.out.println("false");
            return "notsuccess";
        }
    }
    @RequestMapping("/register.do")
    public String doInsertCustomer(Customer cus){
        service.addCustomer(cus);
        return "/HTML/main.jsp";
    }
    @RequestMapping("/addcus1.do")
    public String doadminInsertCustomer(Customer cus){
        service.addCustomer(cus);
        return "listCustomer.do";
    }
    @RequestMapping("/getCus.do")
    public String dogetCustomer(int id, Model model){
        Customer c=service.findCusById(id);
        model.addAttribute("cus",c);
        return "editCustomer.jsp";
    }
@RequestMapping("/changepassword.do")
public String doupdatepassword(int arg0,String arg1){
    service.modifyCusPassword(arg0,arg1);
    return "outlogin.do";
}
    @RequestMapping("/getCus2.do")
    public String doget2Customer(int id, Model model){
        Customer c=service.findCusById(id);
        model.addAttribute("cuss",c);
        return "/HTML/modifypassword.jsp";
    }
    @RequestMapping("/getselfCus.do")
    public String dogetselfCustomer(int id, Model model){
        Customer c=service.findCusById(id);
        model.addAttribute("cusself",c);
        return "/HTML/modifyInfo.jsp";
    }
    @RequestMapping("/updateCus1.do")
    public String doupdateCustomer(Customer customer, Model model){
        service.modify(customer);
        //customer=service.findCusById(customer.getId());
        //System.out.println(customer.getId());
        //model.addAttribute("cus",customer);
        return "listCustomer.do";
    }
    @RequestMapping("/updateselfCus1.do")
    public String doupdateselfCustomer(Customer customer, Model model){
        service.modify(customer);
        //customer=service.findCusById(customer.getId());
        //System.out.println(customer.getId());
        //model.addAttribute("cus",customer);
        return "/HTML/main.jsp";
    }
    @RequestMapping("/deleteCus.do")
    public String dodeleteCustomer(int id, Model model){
        service.remove(id);
        //customer=service.findCusById(customer.getId());
        //System.out.println(customer.getId());
        //model.addAttribute("cus",customer);
        return "listCustomer.do";
    }
    @RequestMapping("/login.do")
    public ModelAndView dologin(Customer cus, HttpSession session){
        cus=service.checkLogin(cus.getCusName(),cus.getCusPassword());
        if(cus!=null){
            session.setAttribute("customer",cus);
            return new ModelAndView("redirect:/HTML/main.jsp");
        }
        return new ModelAndView("redirect:/fail.jsp");
    }
    @RequestMapping("/testlogin.do")
    public ModelAndView dologintest(Customer cus, HttpSession session){
        cus=service.checkLogin(cus.getCusName(),cus.getCusPassword());
        if(cus!=null){
            session.setAttribute("customer",cus);
            return new ModelAndView("redirect:/success.jsp");
        }
        return new ModelAndView("redirect:/fail.jsp");
    }
    @RequestMapping("/first.do")
    public String firstview(){
        return "/HTML/main.jsp";
    }
    @RequestMapping("/outlogin.do")
    public String outLogin(HttpSession session){
        session.invalidate();
        return "/HTML/main.jsp";
    }
    @RequestMapping("getCusbentianId.do")
    public String dogetBentianCusId(int id, HttpSession session){
        Customer cus=service.findCusById(id);
        //System.out.println(cus);
        session.setAttribute("Customer",cus);

        return "/HTML/Offcialwebsite/BenTian.jsp";
    }
    @RequestMapping("getCusfengtianId.do")
    public String dogetFengtianCusId(int id, HttpSession session){
        Customer cus=service.findCusById(id);
        //System.out.println(cus);
        session.setAttribute("Customer",cus);

        return "/HTML/Offcialwebsite/FengTian.jsp";
    }
    @RequestMapping("getCusdazhongId.do")
    public String dogetDazhongCusId(int id, HttpSession session){
        Customer cus=service.findCusById(id);
        //System.out.println(cus);
        session.setAttribute("Customer",cus);

        return "/HTML/Offcialwebsite/DaZhong.jsp";
    }
    @RequestMapping("getCusrichanId.do")
    public String dogetRichanCusId(int id, HttpSession session){
        Customer cus=service.findCusById(id);
        //System.out.println(cus);
        session.setAttribute("Customer",cus);

        return "/HTML/Offcialwebsite/RiChan.jsp";
    }
    @RequestMapping("getCusBWMId.do")
    public String dogetBWMCusId(int id, HttpSession session){
        Customer cus=service.findCusById(id);
        //System.out.println(cus);
        session.setAttribute("Customer",cus);

        return "/HTML/Offcialwebsite/BMW.jsp";
    }
    @RequestMapping("getCusfuteId.do")
    public String dogetFuteCusId(int id, HttpSession session){
        Customer cus=service.findCusById(id);
        //System.out.println(cus);
        session.setAttribute("Customer",cus);

        return "/HTML/Offcialwebsite/FuTe.jsp";
    }
    @RequestMapping("getCusbaoshijieId.do")
    public String dogetBaoshijieCusId(int id, HttpSession session){
        Customer cus=service.findCusById(id);
        //System.out.println(cus);
        session.setAttribute("Customer",cus);

        return "/HTML/Offcialwebsite/BaoShiJie.jsp";
    }
    @RequestMapping("getCuslanbojiniId.do")
    public String dogetLanbojiniCusId(int id, HttpSession session){
        Customer cus=service.findCusById(id);
        //System.out.println(cus);
        session.setAttribute("Customer",cus);

        return "/HTML/Offcialwebsite/LanBoJiNi.jsp";
    }
    @RequestMapping("getshopCusId.do")
    public String doshoppingCusId(int id, int carId, HttpSession session){
        Customer cus=service.findCusById(id);
        Car car=carService.findCrsById(carId);
        List<MessageWord> messageWords=messageWordService.findMessageWordByCarId(carId);
        int n=messageWordService.findMessageWordCountByCarId(carId);
        System.out.println(n);
        //System.out.println(car);
        session.setAttribute("Customer",cus);
        session.setAttribute("Car",car);
        session.setAttribute("MessageWord",messageWords);
        session.setAttribute("n",n);
        return "/HTML/ShopUI.jsp";
    }
    @RequestMapping("/listCustomer.do")
    public String doListCus(@RequestParam(value = "pn", defaultValue = "1") Integer pn, Model model){
        //引入分页挂件pagehelper
        //在查询之前只需用调用传入页码以每页的大小
        int pageSize = 5;
        PageHelper.startPage(pn, pageSize);
        //startPage紧跟查询，这个查询就是一个分页查询
        List<Customer> customers=service.findAllCus();
        for(Customer cus:customers){
            System.out.println(cus);
        }
        PageInfo page = new PageInfo(customers, 5);
        model.addAttribute("pageInfo", page);
        return "listCus.jsp";
    }
    @RequestMapping("/listCustomerReach.do")
    public String doListCar(String name, @RequestParam(value = "pn", defaultValue = "1") Integer pn, Model model){
        //引入分页挂件pagehelper
        //在查询之前只需用调用传入页码以每页的大小
        int pageSize = 5;
        PageHelper.startPage(pn, pageSize);
        //startPage紧跟查询，这个查询就是一个分页查询
        //name="12";
        List<Customer> Customers=service.findCusByNameReach(name);
        for(Customer cus:Customers){
            System.out.println(cus);
        }
        PageInfo page = new PageInfo(Customers, 5);
        model.addAttribute("pageInfo", page);
        return "listCus.jsp";
    }


}
