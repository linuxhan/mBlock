/**
 * 发送下位机的指令集
 * Created by zhangkun on 2016/12/22.
 */
module.exports = {
  auriga: {
    bluetooth_model: [0xff, 0x55, 0x05, 0x00, 0x02, 0x3c, 0x11, 0x00],
    ultrasonic_obstacle_avoidance_mode: [0xff, 0x55, 0x05, 0x00, 0x02, 0x3c, 0x11, 0x01],
    find_line_mode: [0xff, 0x55, 0x05, 0x00, 0x02, 0x3c, 0x11, 0x04],
    self_balanced_model: [0xff, 0x55, 0x05, 0x00, 0x02, 0x3c, 0x11, 0x02]
  }
}