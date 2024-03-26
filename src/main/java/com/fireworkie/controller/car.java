package com.fireworkie.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class car {
//    int num=0;
    @RequestMapping(value = "/runningcar", method = RequestMethod.GET)
    public void RunningCar(@RequestParam("buttonid") String buttonid) {
        // 给python传代号
        // ...
//        num++;
        System.out.println(buttonid+"被按下");
    }

    @RequestMapping(value ="/stopcar",method = RequestMethod.GET)
    public void StopCar(){
        System.out.println("按钮松开");
    };
}