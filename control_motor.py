import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BOARD)

ENA = 33
IN1 = 35
IN2 = 37

GPIO.setup(ENA,GPIO.OUT)
GPIO.setup(IN1,GPIO.OUT)
GPIO.setup(IN2,GPIO.OUT)

try:
    while True:
        GPIO.output(IN1,False)
        GPIO.output(IN2,True)
        GPIO.output(ENA,True)

        time.sleep(5)

        GPIO.output(ENA,False)
        time.sleep(2)

        GPIO.output(IN1,True)
        GPIO.output(IN2,False)
        GPIO.output(ENA,True)

        time.sleep(5)

        GPIO.output(ENA,False)
        time.sleep(2)

except Exception as e:
    print('An exception has happened', e)

finally:
    
    GPIO.cleanup()