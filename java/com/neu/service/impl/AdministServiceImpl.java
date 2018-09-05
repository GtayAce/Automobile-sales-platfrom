package com.neu.service.impl;

import com.neu.bean.Administ;
import com.neu.dao.IAdministDao;
import com.neu.service.IAdministService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service("administService")
public class AdministServiceImpl implements IAdministService {
    @Autowired
    @Qualifier("IAdministDao")
    private IAdministDao administDao;

    public void setAdministDao(IAdministDao administDao){
        this.administDao=administDao;
    }
    @Override
    public Administ checkLogin(String name, String password) {
        Administ administ=administDao.selectLoginName(name);
        if(administ!=null&&administ.getAdminPassword().equals(password)){
            return administ;
        }
        return null;
    }
}
