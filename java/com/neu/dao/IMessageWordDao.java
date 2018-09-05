package com.neu.dao;

import com.neu.bean.MessageWord;

import java.util.List;

public interface IMessageWordDao {
    void insertMessage(MessageWord messageWord);
    List<MessageWord> selectAllMessageWord();
    List<MessageWord> selectMessageWordByCarId(int carId);
    List<MessageWord> selectMessageWordByCusId(int cusId);
    int selectMessageWordCountByCarId(int carId);
}
