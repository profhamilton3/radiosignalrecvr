radio.onReceivedNumber(function (receivedNumber) {
    led.plotBarGraph(
    Math.abs(radio.receivedPacket(RadioPacketProperty.SignalStrength) + 42),
    128 - 42
    )
    if (receivedNumber == 0) {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    } else if (receivedNumber == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 130)
    } else {
        basic.showIcon(IconNames.Cow)
    }
})
radio.setGroup(127)
basic.showIcon(IconNames.SmallHeart)
