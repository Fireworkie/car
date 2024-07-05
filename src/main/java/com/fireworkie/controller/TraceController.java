package com.fireworkie.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.OutputStream;
import java.net.Socket;

@Controller
public class TraceController {
    String serverAddress = "localhost";
    int serverPort = 8004;

    @RequestMapping(value = "/trace",method = RequestMethod.GET )
    public void trace(@RequestParam("traceid")String traceid) {
        try {
            Socket socket = new Socket(serverAddress, serverPort);
            String jsonData="{\"traceid\":\""+traceid+"\"}";
            OutputStream outputStream = socket.getOutputStream();
            outputStream.write(jsonData.getBytes());
            socket.close();
        }catch (Exception e) {
            e.printStackTrace();
        }
    }
}
