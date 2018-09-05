package com.neu.controller;

import com.neu.service.IMessageWordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;

@Controller
public class MessageWordController {
    @Autowired
    @Qualifier("messageWordService")
    private IMessageWordService messageWordService;

    public void setMessageWordService(IMessageWordService messageWordService){
        this.messageWordService=messageWordService;
    }

}
