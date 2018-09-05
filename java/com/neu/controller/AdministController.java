package com.neu.controller;

import com.neu.bean.Administ;
import com.neu.service.IAdministService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;

@Controller
public class AdministController {
    @Autowired
    @Qualifier("administService")
    private IAdministService service;

    public void setService(IAdministService service){
        this.service=service;
    }
    @RequestMapping("/adminlogin.do")
    public ModelAndView dologin(Administ administ, HttpSession session){
        administ=service.checkLogin(administ.getAdminName(),administ.getAdminPassword());
        if(administ!=null){
            session.setAttribute("administ",administ.getAdminName());
            return new ModelAndView("redirect:/HTML/adminManager.jsp");
        }
        return new ModelAndView("redirect:/fail.jsp");
    }
    @RequestMapping("/outadminlogin.do")
    public String outLogin(HttpSession session){
        session.invalidate();
        return "/HTML/admin.jsp";
    }

}
