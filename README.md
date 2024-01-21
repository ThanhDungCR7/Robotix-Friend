# Robotix-Friend
A small ESP32 Project for the major assignment of class Embedded System - 143800

A detailed report can be found in [Final_report.docx](/Final_report.docx)

# Libraries
This repository utilizes the following libraries:

- [IRremote](https://github.com/Arduino-IRremote/Arduino-IRremote): Library for infrared remote control communication.
- [ESP32Servo](https://github.com/jkb-git/ESP32Servo): Library for controlling servo motors with ESP32.
- [Wire](https://github.com/esp8266/Arduino/tree/master/libraries/Wire): Library for I2C communication.
- [Adafruit_GFX](https://github.com/adafruit/Adafruit-GFX-Library): Core graphics library for displays.
- [Adafruit_SH110X](https://github.com/adafruit/Adafruit_SH110X): Library for controlling SH110X-based OLED displays.
- [SPI](https://github.com/espressif/arduino-esp32/tree/master/libraries/SPI): Library for SPI communication.

# Components Used
Adafruit_SH1106G Display: An OLED display based on the SH1106 controller.

Servo Motor: A motor used for precise control of angular position.

IR Receiver: A sensor for receiving infrared signals from a remote control.

# Installation
To use this code, follow these steps:

Install the Arduino IDE from the [official website](https://www.arduino.cc/en/software).

Clone or download this repository to your local machine.

Install the required libraries, using source code from github or directly in the ide library browser.

Connect the Adafruit_SH1106G display, servo motor, and IR receiver to the ESP32 board as per the wiring instructions provided in the code.

Open the Arduino IDE and navigate to the downloaded repository.

Open the main project file and upload it to your ESP32 board.

Monitor the serial output to observe the program's behavior.

Feel free to modify the code to suit your project requirements.

# Usage
Once the code is uploaded to the ESP32 board, it will perform the desired functionality using the Adafruit_SH1106G display, servo motor, and IR receiver. You may need to adjust the code according to your specific project needs.

# Member
This project is created by:
- [Mai Trung Kiên - 20200301](https://github.com/Asphode1)
- [Phạm Thành Dũng - 20204644](https://github.com/ThanhDungCR7)
