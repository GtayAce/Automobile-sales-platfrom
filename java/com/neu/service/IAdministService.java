package com.neu.service;

import com.neu.bean.Administ;

public interface IAdministService {
    Administ checkLogin(String name,String password);
}
