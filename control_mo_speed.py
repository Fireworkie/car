import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BOARD)

ENA = 33
IN1 = 35
IN2 = 37

GPIO.setup(ENA, GPIO.OUT)
GPIO.setup(IN1, GPIO.OUT)
GPIO.setup(IN2, GPIO.OUT)

frequency = 500

duty = 0
pwm = GPIO.PWM(ENA, frequency)
try:
	pwm.start(duty)
	while True:
		GPIO.output(IN1, False)
		GPIO.output(IN2, True)
		
		for duty in range(0, 100, 5):
			pwm.ChangeDutyCycle(duty)
			time.sleep(1)
		
		GPIO.output(IN1, False)
		GPIO.output(IN2, True)
		
		for duty in range(0, 100, 5):
			pwm.ChangeDutyCycle(duty)
			time.sleep(1)
except Exception as e:
	print('An exception has happened', e)
finally:
	pwm.stop()
	GPIO.cleanup()