package com.fireworkie.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class car {

    @RequestMapping(value = "/executePython", method = RequestMethod.GET)
    @ResponseBody
    public String executePythonProgram() {
        // 在此处执行 Python 程序
        // ...
        return "小车动了";
    }
}