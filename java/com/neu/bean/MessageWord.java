package com.neu.bean;

import java.util.Date;

public class MessageWord {
    private int id;
    private int mcusId;
    private int mcarId;
    private String mnote;
    private Date noteCreatTime;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getMcusId() {
        return mcusId;
    }

    public void setMcusId(int mcusId) {
        this.mcusId = mcusId;
    }

    public int getMcarId() {
        return mcarId;
    }

    public void setMcarId(int mcarId) {
        this.mcarId = mcarId;
    }

    public String getMnote() {
        return mnote;
    }

    public void setMnote(String mnote) {
        this.mnote = mnote;
    }

    public Date getNoteCreatTime() {
        return noteCreatTime;
    }

    public void setNoteCreatTime(Date noteCreatTime) {
        this.noteCreatTime = noteCreatTime;
    }

    @Override
    public String toString() {
        return "MessageWord{" +
                "id=" + id +
                ", mcusId=" + mcusId +
                ", mcarId=" + mcarId +
                ", mnote='" + mnote + '\'' +
                ", noteCreatTime=" + noteCreatTime +
                '}';
    }
}
