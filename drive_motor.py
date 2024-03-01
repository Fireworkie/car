import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BOARD)

ENA = 33
IN1 = 35
IN2 = 37

GPIO.setup(ENA,GPIO.OUT)
GPIO.setup(IN1,GPIO.OUT)
GPIO.setup(IN2,GPIO.OUT)

GPIO.output(ENA,True)
GPIO.output(IN1,False)
GPIO.output(IN2,True)

time.sleep(10)
GPIO.cleanup()