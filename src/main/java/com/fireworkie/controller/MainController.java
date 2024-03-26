package com.fireworkie.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MainController {
    @ResponseBody
    @RequestMapping("/")
    public ModelAndView hello() {
        return new ModelAndView("index");
    }
}
