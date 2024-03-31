package com.fireworkie.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.*;
import java.net.Socket;
import java.util.Objects;

@Controller
public class car {
    private Process pythonProcess;
    String serverAddress="localhost";
    int serverPort= 8001;
    @RequestMapping(value = "/runningcar", method = RequestMethod.GET)
    public void RunningCar(@RequestParam("buttonid") String buttonid) {
        try {
            Socket socket =new Socket(serverAddress,serverPort);
            String jsonData="{\"command\":\"stop\"}";
            if (Objects.equals(buttonid, "straight"))
            {
                jsonData="{\"command\":\"forward\"}";
            } else if (Objects.equals(buttonid, "backward")) {
                jsonData="{\"command\":\"backward\"}";
            } else if (Objects.equals(buttonid, "left")) {
                jsonData="{\"command\":\"left\"}";
            } else if (Objects.equals(buttonid, "right")) {
                jsonData="{\"command\":\"right\"}";
            } else if (Objects.equals(buttonid,"turn_left")){
                jsonData="{\"command\":\"turn_left\"}";
            }else if (Objects.equals(buttonid,"turn_right")){
                jsonData="{\"command\":\"turn_right\"}";
            } else if (Objects.equals(buttonid,"back_left")) {
                jsonData="{\"command\":\"back_left\"}";
            } else if (Objects.equals(buttonid,"back_right")) {
                jsonData="{\"command\":\"back_right\"}";
            }
            OutputStream outputStream = socket.getOutputStream();
            outputStream.write(jsonData.getBytes());
            socket.close();
        } catch (IOException e){
            e.printStackTrace();
        }
    }

    @RequestMapping(value = "/stopcar", method = RequestMethod.GET)
    public void StopCar() {
        try {
            Socket socket =new Socket(serverAddress,serverPort);
            String jsonData="{\"command\":\"stop\"}";
            OutputStream outputStream = socket.getOutputStream();
            outputStream.write(jsonData.getBytes());
            socket.close();
        } catch (IOException e){
            e.printStackTrace();
        }
    }

    @RequestMapping(value = "/startcar", method = RequestMethod.GET)
    public void StartingCar() {
        String pythonScriptPath = "$CAR/motor.py";
        try {
            ProcessBuilder processBuilder = new ProcessBuilder("python3", pythonScriptPath);
            pythonProcess = processBuilder.start();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @RequestMapping(value = "/shutdowncar", method = RequestMethod.GET)
    public void ShutdownCar() {
        if (pythonProcess != null) {
            pythonProcess.destroy();
        }
    }
}