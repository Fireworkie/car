import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BOARD)
signal = 32
GPIO.setup(signal, GPIO.OUT)
frequency = 50
pwm = GPIO.PWM(signal, frequency)
def get_duty(direction):
     duty = (1/18)*direction + 2.5
     return duty
if __name__=='__main__':
    try:
        pwm.start(0)
        while True:
            direction = float(input("请输入一个1～180之间的角度"))
            duty = get_duty(direction)
            pwm.ChangeDutyCycle(duty)
    except Exception as e:
        print('An exception happen', e)
    finally:
        pwm.stop()
        GPIO.cleanup()
