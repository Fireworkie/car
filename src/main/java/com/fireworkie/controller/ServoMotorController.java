package com.fireworkie.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.IOException;
import java.io.OutputStream;
import java.net.Socket;
import java.util.Objects;

@Controller
public class ServoMotorController {
    String serverAddress = "localhost";
    int serverPort = 8002;

    @RequestMapping(value = "/servomove")
    public void ServoMove(@RequestParam("buttonid") String buttonid) {
        try {
            Socket socket = new Socket(serverAddress, serverPort);
            String jsonData = "{\"vx\":\"0\",\"vy\":\"0\"}";
            if (Objects.equals(buttonid, "servo_up")) {
                jsonData = "{\"vx\":\"0\",\"vy\":\"1\"}";
            } else if (Objects.equals(buttonid, "servo_down")) {
                jsonData = "{\"vx\":\"0\",\"vy\":\"-1\"}";
            } else if (Objects.equals(buttonid, "servo_left")) {
                jsonData = "{\"vx\":\"1\",\"vy\":\"0\"}";
            } else if (Objects.equals(buttonid, "servo_right")) {
                jsonData = "{\"vx\":\"-1\",\"vy\":\"0\"}";
            }
            OutputStream outputStream = socket.getOutputStream();
            outputStream.write(jsonData.getBytes());
            socket.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @RequestMapping(value = "/servostop")
    public void ServoStop() {
        try {
            Socket socket = new Socket(serverAddress, serverPort);
            String jsonData = "{\"vx\":\"0\",\"vy\":\"0\"}";
            OutputStream outputStream = socket.getOutputStream();
            outputStream.write(jsonData.getBytes());
            socket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}