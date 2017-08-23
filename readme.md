# Impairment Monitoring for GM AI Hackathon (June 2017)

Safe driving needs all the help it can get from modern technology. With an aging population, more substance abuse due to more liberal laws and just plain distracted driving owing to mobile phones our roadways still take lives and destroy families.

This open-source project leverages another (https://github.com/JohnnyOpcode/OSSDC_SmartCamGen1) of my projects for a Smart Camera. This hardware is designed to move as much of the deeper AI processing closer to the actual vision sensor. It uses a Xilinx SoC (Zynq) which contains both a dual-ARM Cortex and FPGA fabric on the same silicon.

The concept is simple. The Smart Camera is aimed inward, towards the driver. It runs a TWN (ternary weight network) that is a slightly less accurate than a DNN (deep neural network). TWN(s) are perfectly suited for a FPGA because of both power and cost constraints. We are not trying to drive the car, but we are trying to close the loop wherein the vehicle AI can become more aware of the driver. This becomes particularly important when Level-2 ADAS features are being used. Disengagement events and driver awareness levels are important to safe driving and will play a crucial role as we travel the path to fully autonomous vehicles.

The role of the GM Infotainment System is to act as a user interface between the AI (in the Smart Camera) and the driver primarily thru voice announcements. The audio interface is expected to be the UI vector of the future and the NGI SDK enables our AI to interface seamlessly with the driver in just such a fashion. The current UX of our project is to display outputs from the TWN initially for the testing phase. We expect the actual implementation to be strictly a background process.

![NGI Simulator Image](https://github.com/JohnnyOpcode/ImGM/blob/master/ScreenCapture.JPG)
