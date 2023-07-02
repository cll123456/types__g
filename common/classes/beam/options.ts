import { EColor } from 'common/utils/common'
import { BaseOptions } from '../base/index'

/**
 * 
 * id (string) 字符串类型的ID

groupId (string) 可选，Group分组

userData (string) 可选，用户自定义数据

duration (number) 光流粒子的生命周期，取值范围：[0.1~3.0]，单位：秒

thickness (number) 光流线的宽度，取值范围： [0.01~10.0]，单位：因Beam是粒子加上自发光不能精确单位,故目前按比例显示,需要精确单位的推荐使用Polyline

interval (number) 光流粒子发射间隔，取值范围：[1.0~10.0]，单位：秒

velocity (number) 光流粒子的速度，取值范围：[0.1~5.0]

color (Color) 光流的颜色，支持四种格式，取值示例

coordinates (array) 光流的polyline的坐标数组
 */
export interface IBeamOptions extends BaseOptions {
    /**
     * 光流粒子的生命周期，取值范围：[0.1~3.0]，单位：秒
     */
    duration?: number
    /**
     * 光流线的宽度，取值范围： [0.01~10.0]，单位：因Beam是粒子加上自发光不能精确单位,故目前按比例显示,需要精确单位的推荐使用Polyline
     */
    thickness?: number
    /**
     *  光流粒子发射间隔，取值范围：[1.0~10.0]，单位：秒
     */
    interval?: number
    /**
     * 光流粒子的速度，取值范围：[0.1~5.0]
     */
    velocity?: number
    /**
     * 光流的颜色，支持四种格式，取值示例
     * 
     * //常量颜色 
        var constColor = Color.Red;

        //RGB颜色
        var rgbColor = 'RGB(255,255,255)';

        //16进制颜色
        var hexColor =  '#FFFEEE';

        //数组颜色 支持透明度设置
        var colorArr = [0.5,0.5,0.5,1];

     */
    color?: EColor
    /**
     * 光流的polyline的坐标数组
     */
    coordinates?: [number, number, number][]
}
