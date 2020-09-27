import { message, notification } from 'ant-design-vue'

namespace.reg('WXZ.MsgUtils');


// message 全局配置
message.config({
  // top: `100px`, // 消息距离顶部的位置
  duration: 2, // 默认自动关闭延时，秒
  maxCount: 5, // 最大显示数, 超过限制时，最早的消息会被自动关闭
});

// notification 全局配置
notification.config({
  placement: 'bottomRight', // 弹出位置 topLeft topRight bottomLeft bottomRight
  // bottom: '24px', // 消息从底部弹出时，距离底部的位置，单位像素
  // top: '24px', // 	消息从顶部弹出时，距离顶部的位置，单位像素
  duration: 4, // 默认自动关闭延时，秒
});

/** 显示全局信息
 * @param {String} type 信息类型 success error info warning open
 * @param {String|Object} options 显示信息参数
 */
const show = (options, type = 'info') => {
  if(typeof options === 'object') {
    if(options.content) options.description= options.content;
    if(options.title) options.message= options.title;
    notification[type](options);
  }else {
    message[type](options)
  }
}


WXZ.Message = {
  show
};