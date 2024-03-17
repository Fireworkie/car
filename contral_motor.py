import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BOARD)
signal = 32
GPIO.setup(signal, GPIO.OUT)
frequency = 50
pwm = GPIO.PWM(signal, frequency)
def get_duty(direction):
     duty = (direction/18 +2)
     print('duty:',duty)
     return duty
if __name__=='__main__':
    try:
        while True:
            pwm.start(0)
            time.sleep(1)
            direction = float(input("请输入一个1～180之间的角度"))
            duty = get_duty(direction)
            pwm.ChangeDutyCycle(duty)
            time.sleep(1)
    except Exception as e:
        print('An exception happen', e)
    finally:
        print("exit")
        pwm.stop()
        GPIO.cleanup()
#!/usr/bin/env python3
#-- coding: utf-8 --
# import RPi.GPIO as GPIO
# import time
#
#
# #Set function to calculate percent from angle
# def angle_to_percent (angle) :
#     if angle > 180 or angle < 0 :
#         return False
#
#     start = 2.5
#     end = 12.5
#     ratio = (end - start)/180 #Calcul ratio from angle to percent
#
#     angle_as_percent = angle * ratio
#
#     return start + angle_as_percent
#
#
# GPIO.setmode(GPIO.BOARD) #Use Board numerotation mode
# GPIO.setwarnings(False) #Disable warnings
#
# #Use pin 12 for PWM signal
# pwm_gpio = 32
# frequence = 50
# GPIO.setup(pwm_gpio, GPIO.OUT)
# pwm = GPIO.PWM(pwm_gpio, frequence)
#
# #Init at 0°
# pwm.start(angle_to_percent(0))
# time.sleep(1)
#
# #Go at 90°
# pwm.ChangeDutyCycle(angle_to_percent(90))
# time.sleep(1)
#
# #Finish at 180°
# pwm.ChangeDutyCycle(angle_to_percent(180))
# time.sleep(1)
#
# #Close GPIO & cleanup
# pwm.stop()
# GPIO.cleanup()