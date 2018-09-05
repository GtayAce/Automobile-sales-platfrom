package com.neu.service;

import com.neu.bean.MessageWord;

import java.util.List;

public interface IMessageWordService {
    void addMessageWord(MessageWord messageWord);
    List<MessageWord> findAllMessageWord();
    List<MessageWord> findMessageWordByCusId(int cusId);
    List<MessageWord> findMessageWordByCarId(int carId);
    int findMessageWordCountByCarId(int carId);
}
