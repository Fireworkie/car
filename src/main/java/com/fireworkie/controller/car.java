package com.fireworkie.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class car {
    @RequestMapping(value = "/runningcar", method = RequestMethod.GET)
    public void RunningCar(@RequestParam("buttonid") String buttonid) {
        System.out.println(buttonid + "被按下");
    }

    @RequestMapping(value = "/stopcar", method = RequestMethod.GET)
    public void StopCar() {
        System.out.println("按钮松开");
    }

    @RequestMapping(value = "/startcar", method = RequestMethod.GET)
    public void StartingCar() {
        System.out.println("小车启动");
    }

    @RequestMapping(value = "/shutdowncar", method = RequestMethod.GET)
    public void ShutdownCar() {
        System.out.println("小车关闭");
    }
}