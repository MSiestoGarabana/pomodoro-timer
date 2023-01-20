Pomodoro method.
There´s a couple bugs I need to fix in this one. First of all: on first mount the counter initializes to 0:00 and it should initialize to the workTime value. 
The second bug is about the mode const stored in useState. It´s mixed up. When it´s "work" mode, breakMinutes displays and whn it´s "break" mode, workMinutes displays
