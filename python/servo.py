import time
from adafruit_pca9685 import PCA9685
from board import SCL, SDA
import busio
from adafruit_motor import servo

i2c_bus = busio.I2C(SCL, SDA)
# 使用默认地址初始化PWM设备
pwm = PCA9685(i2c_bus)
# 将频率设置为50 Hz
pwm.frequency = 50
# 指定第12通道的舵机（从0开始）
servo_12 = servo.Servo(pwm.channels[12])
# 指定第15通道的舵机
servo_15 = servo.Servo(pwm.channels[15])
print('Moving servo on channel 0, press Ctrl-C to quit...')
servo_12.angle = 90
servo_15.angle = 90
while True:
    x = int(input('x is(1 or -1): '))
    y = int(input('y is(1 or -1): '))
    if x == 1 :
        while servo_12.angle < 180 :
            print(servo_12.angle,"\n")
            servo_12.angle =min(servo_12.angle + 10, 180)
            time.sleep(0.1)
    if x == -1:
        while servo_12.angle > 0 :
            print(servo_12.angle,"\n")
            servo_12.angle =max(servo_12.angle - 10, 0)
            time.sleep(0.1)
    if y==1 :
        while servo_15.angle < 180 :
            print(servo_15.angle,"\n")
            servo_15.angle =min(servo_15.angle + 10, 180)
            time.sleep(0.1)
    if y == -1:
        while servo_15.angle > 0 :
            print(servo_15.angle,"\n")
            servo_15.angle =max(servo_15.angle - 10, 0)
            time.sleep(0.1)
    time.sleep(1)