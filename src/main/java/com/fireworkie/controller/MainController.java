package com.fireworkie.controller;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.fireworkie.entity.car;

@Controller
public class MainController {
    ApplicationContext context = new ClassPathXmlApplicationContext("application.xml");
    car car = context.getBean(car.class);

    @RequestMapping("/")
    public String index() {
        return "index";
    }
}
