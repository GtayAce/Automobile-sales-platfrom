package com.neu.bean;
/**
 * @version 1.0
 * @description Carsystem
 * @authonr Demon
 * @date 2018/7/18
 */
public class CarType {

        private Integer id;
        private String carTypeName;
        public Integer getId() {
            return id;
        }

        public void setId(Integer id) {
            this.id = id;
        }

        public String getCarTypeName() {
            return carTypeName;
        }

        public void setCarTypeName(String carTypeName) {
            this.carTypeName = carTypeName;
        }
        @Override
        public String toString() {
            return "carType{" +
                    "id=" + id +
                    ", carTypeName='" + carTypeName + '\'' +
                    '}';
        }


    }


