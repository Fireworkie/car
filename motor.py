import RPi.GPIO as GPIO
import time

class MotorDriver():
    def __init__(self, duty = 50, ENA = 33, IN1 = 35, IN2 = 37, ENB = 12, IN3 = 13, IN4 = 15):
        self.ENA = ENA
        self.IN1 = IN1
        self.IN2 = IN2
        self.ENB = ENB
        self.IN3 = IN3
        self.IN4 = IN4
        self.duty = duty

        GPIO.setwarnings(False)
        GPIO.setmode(GPIO.BOARD)
        GPIO.setup(self.ENA,GPIO.OUT)
        GPIO.setup(self.IN1,GPIO.OUT)
        GPIO.setup(self.IN2,GPIO.OUT)
        GPIO.setup(self.ENB,GPIO.OUT)
        GPIO.setup(self.IN3,GPIO.OUT)
        GPIO.setup(self.IN4,GPIO.OUT)
        GPIO.output(self.ENA, 1)
        GPIO.output(self.ENB, 1)

        self.pwm1 = GPIO.PWM(self.ENA, 500)
        self.pwm2 = GPIO.PWM(self.ENB, 500)
        self.pwm1.start(duty)
        self.pwm2.start(duty)

    def forward(self):
            GPIO.output(self.IN1, 1)
            GPIO.output(self.IN2, 0)
            GPIO.output(self.IN3, 1)
            GPIO.output(self.IN4, 0)
    def back(self):
            GPIO.output(self.IN1, 0)
            GPIO.output(self.IN2, 1)
            GPIO.output(self.IN3, 0)
            GPIO.output(self.IN4, 1)
    def right(self):
            GPIO.output(self.IN1, 0)
            GPIO.output(self.IN2, 1)
            GPIO.output(self.IN3, 1)
            GPIO.output(self.IN4, 0)
    def left(self):
            GPIO.output(self.IN1, 1)
            GPIO.output(self.IN2, 0)
            GPIO.output(self.IN3, 0)
            GPIO.output(self.IN4, 1)
    def stop(self):
            GPIO.output(self.IN1, 0)
            GPIO.output(self.IN2, 0)
            GPIO.output(self.IN3, 0)
            GPIO.output(self.IN4, 0)
    def up(self):
        if self.duty <= 100:
            self.duty += 10
            self.pwm1.ChangeDutyCycle(self.duty)
            self.pwm1.ChangeDutyCycle(self.duty)
        else:
                print('get max')
    def down(self):
        if self.duty >= 0:
            self.duty -= 10
            self.pwm1.ChangeDutyCycle(self.duty)
            self.pwm1.ChangeDutyCycle(self.duty)
        else:
            print('get min')
if __name__ == "__main__":
    motor = MotorDriver()
    try:
        while True:
            cmd = input("输入w(forward) or s(back) or a(left) or d(right) or q(up) or z(down)or x(stop): ")
            if cmd == "w":
                motor.forward()
            if cmd == "s":
                motor.back()
            if cmd == "a":
                motor.left()
            if cmd == "d":
                motor.right()
            if cmd == "x":
                motor.stop()
            if cmd == "q":
                motor.up()
            if cmd == "z":
                motor.down()
    except KeyboardInterrupt: #用户输入中断键（Ctrl + C），退出
        GPIO.cleanup()