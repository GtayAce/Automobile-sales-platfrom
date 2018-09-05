package com.neu.service.impl;

import com.neu.bean.MessageWord;
import com.neu.dao.IMessageWordDao;
import com.neu.service.IMessageWordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
@Service("messageWordService")
public class MessageWordServiceImpl implements IMessageWordService {
    @Autowired
    @Qualifier("IMessageWordDao")
    private IMessageWordDao messageWordDao;

    public void setMessageWordDao(IMessageWordDao messageWordDao){
        this.messageWordDao=messageWordDao;
    }
    @Override
    public void addMessageWord(MessageWord messageWord) {
        messageWordDao.insertMessage(messageWord);
    }

    @Override
    public List<MessageWord> findAllMessageWord() {
        List<MessageWord> messageWords=messageWordDao.selectAllMessageWord();
        return messageWords;
    }

    @Override
    public List<MessageWord> findMessageWordByCusId(int cusId) {
        List<MessageWord> messageWords=messageWordDao.selectMessageWordByCusId(cusId);
        return messageWords;
    }

    @Override
    public List<MessageWord> findMessageWordByCarId(int carId) {
        List<MessageWord> messageWords=messageWordDao.selectMessageWordByCarId(carId);
        return messageWords;
    }

    @Override
    public int findMessageWordCountByCarId(int carId) {
        return messageWordDao.selectMessageWordCountByCarId(carId);
    }
}
