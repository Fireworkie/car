# #!/bin/bash
cd $WEBSITE
./startup.sh
cd $PY
python3 motor.py 1> motor.log &
python3 servo.py 1> servo.log &
