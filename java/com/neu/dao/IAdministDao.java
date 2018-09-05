package com.neu.dao;

import com.neu.bean.Administ;

public interface IAdministDao {
    Administ selectLoginName(String name);
}
