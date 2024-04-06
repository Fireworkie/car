package com.fireworkie.controller;

//import jakarta.servlet.ServletContext;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.context.ServletContextAware;

import java.io.*;
import java.net.Socket;
import java.util.Objects;

@Controller
public class CarMovingController {
    String serverAddress = "localhost";
    int serverPort = 8001;
//    private Process pythonProcess;

    //        @Override
//    public void setServletContext(ServletContext servletContext) {
//        this.servletContext = servletContext;
//    }
    @RequestMapping(value = "/runningcar", method = RequestMethod.GET)
    public void RunningCar(@RequestParam("buttonid") String buttonid) {
        try {
            Socket socket = new Socket(serverAddress, serverPort);
            String jsonData = "{\"command\":\"stop\"}";
            if (Objects.equals(buttonid, "straight")) {
                jsonData = "{\"command\":\"forward\"}";
            } else if (Objects.equals(buttonid, "backward")) {
                jsonData = "{\"command\":\"backward\"}";
            } else if (Objects.equals(buttonid, "left")) {
                jsonData = "{\"command\":\"left\"}";
            } else if (Objects.equals(buttonid, "right")) {
                jsonData = "{\"command\":\"right\"}";
            } else if (Objects.equals(buttonid, "turn_left")) {
                jsonData = "{\"command\":\"turn_left\"}";
            } else if (Objects.equals(buttonid, "turn_right")) {
                jsonData = "{\"command\":\"turn_right\"}";
            }
//            else if (Objects.equals(buttonid, "back_left")) {
//                jsonData = "{\"command\":\"back_left\"}";
//            } else if (Objects.equals(buttonid, "back_right")) {
//                jsonData = "{\"command\":\"back_right\"}";
//            }
            OutputStream outputStream = socket.getOutputStream();
            outputStream.write(jsonData.getBytes());
            socket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @RequestMapping(value = "/stopcar", method = RequestMethod.GET)
    public void StopCar() {
        try {
            Socket socket = new Socket(serverAddress, serverPort);
            String jsonData = "{\"command\":\"stop\"}";
            OutputStream outputStream = socket.getOutputStream();
            outputStream.write(jsonData.getBytes());
            socket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @RequestMapping(value = "/speedchange", method = RequestMethod.GET)
    public void SpeedUp(@RequestParam("speed") String speed) {
        try {
            Socket socket = new Socket(serverAddress, serverPort);
            String jsonData = "{\"command\":\"speedup\"}";
            if (Objects.equals(speed, "down")) {
                jsonData = "{\"command\":\"speeddown\"}";
            }
            OutputStream outputStream = socket.getOutputStream();
            outputStream.write(jsonData.getBytes());
            socket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

//    @RequestMapping(value = "/startcar", method = RequestMethod.GET)
//    public void StartingCar() {
//        String pythonScriptPath = "/home/fireworkie/car/apache-tomcat-10.1.20/webapps/FwkCar/WEB-INF/classes/py/motor.py";
//        try {
//            ProcessBuilder processBuilder = new ProcessBuilder("python", pythonScriptPath);
//            pythonProcess = processBuilder.start();
//
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//    }

//    @RequestMapping(value = "/shutdowncar", method = RequestMethod.GET)
//    public void ShutdownCar() {
////        try {
////            Socket socket = new Socket(serverAddress, serverPort);
////            String jsonData = "{\"command\":\"shutdown\"}";
////            OutputStream outputStream = socket.getOutputStream();
////            outputStream.write(jsonData.getBytes());
////            socket.close();
////        } catch (IOException e) {
////            e.printStackTrace();
////        }
////        pythonProcess.waitFor();
//        if (pythonProcess != null) {
//            pythonProcess.destroy();
//        }
//    }
}