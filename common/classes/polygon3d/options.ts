import { EColor, EPolygon3DStyle } from 'common/utils/common'
import { BaseOptions } from '../base/index'

/**
 * id (string) 字符串类型的ID

groupId (string) 可选，Group分组

userData (string) 可选，用户自定义数据

color (Color) 颜色值，支持四种格式，取值示例

coordinates (array) 坐标点数组，取值示例

coordinateType (number) 坐标系类型，取值范围：0为Projection类型，1为WGS84类型，2为火星坐标系(GCJ02)，3为百度坐标系(BD09)，默认值：0

range (array) 可视范围: [近裁距离, 远裁距离]，取值范围: [任意负值, 任意正值]

thickness (number) 线宽，单位：米，默认值20

intensity (number) 亮度，取值范围：[0~1000]，默认值：0.5

flowRate (number) 流速，取值范围：[0~1.0]，默认值：0.5

depthTest (boolean) 是否做深度检测，默认为true，true会被遮挡，false不会被遮挡

shape (number) 样式，0：直线， 1：曲线，注意：设置为曲线坐标点多的时候会非常影响添加添加效率

style (PolylineStyle) 折线样式，箭头/光流/贴地/实线/虚线等，取值范围：[0~7]，详情参考 PolylineStyle

tiling (number) 可选参数，材质贴图平铺比例，和PolylineStyle取值有关，目前仅部分样式支持此参数，从起始位置开始平铺，超过的部分会按此比例生成新的区域，类似CSS的repeat。如果这个值 <= 0 使用自动计算按Polyline长度比例平铺， >0使用用户输入的值去平铺

material (string) 可选参数，自定义材质路径，即资源库PAK文件里材质文件的路径，设置自定义材质参数后style相关参数会失效

scalarParameters (array) 可选参数，仅在设置自定义材质路径后生效，自定义材质数值类型参数，包含name/value键值对的数组，其中value为数值，格式示例：[{"name":"不透明度","value":0.5},{"name":"UV重复","value":1.0}]

vectorParameters (array) 可选参数，仅在设置自定义材质路径后生效，自定义材质矢量类型参数，包含name/value键值对的数组，其中value为数组，格式示例：[{"name":"color1","value":[1,1,1,1]},{"name":"color2","value":[1,0,0,1]}]
 */

export interface IPolygon3dOptions extends BaseOptions {
    /**
     * color (Color) 颜色值，支持四种格式，取值示例
     */
    color?: EColor
    /**
     * coordinates (array) 坐标点数组，取值示例
     */
    coordinates?: number[][]
    /**
     * coordinateType (number) 坐标系类型，取值范围：0为Projection类型，1为WGS84类型，2为火星坐标系(GCJ02)，3为百度坐标系(BD09)，默认值：0
     */
    coordinateType?: number
    /**
     * range (array) 可视范围: [近裁距离, 远裁距离]，取值范围: [任意负值, 任意正值]
     */
    range?: number[]
    /**
     * 高度
     */
    height: number,
    /**
     * thickness (number) 线宽，单位：米，默认值20
     */
    thickness?: number
    /**
     * intensity (number) 亮度，取值范围：[0~1000]，默认值：0.5
     */
    intensity?: number
    /**
     * flowRate (number) 流速，取值范围：[0~1.0]，默认值：0.5
     */
    flowRate?: number
    /**
     * depthTest (boolean) 是否做深度检测，默认为true，true会被遮挡，false不会被遮挡
     */
    depthTest?: boolean
    /**
     * shape (number) 样式，0：直线， 1：曲线，注意：设置为曲线坐标点多的时候会非常影响添加添加效率
     */
    shape?: number
    /**
     * style (PolylineStyle) 折线样式，箭头/光流/贴地/实线/虚线等，取值范围：[0~7]，详情参考 PolylineStyle
     */
    style?: EPolygon3DStyle
    /**
     * tiling (number) 可选参数，材质贴图平铺比例，和PolylineStyle取值有关，目前仅部分样式支持此参数，从起始位置开始平铺，超过的部分会按此比例生成新的区域，类似CSS的repeat。如果这个值 <= 0 使用自动计算按Polyline长度比例平铺， >0使用用户输入的值去平铺
     */
    tiling?: number
    /**
     * material (string) 可选参数，自定义材质路径，即资源库PAK文件里材质文件的路径，设置自定义材质参数后style相关参数会失效
     */
    material?: string
    /**
     * scalarParameters (array) 可选参数，仅在设置自定义材质路径后生效，自定义材质数值类型参数，包含name/value键值对的数组，其中value为数值，格式示例：[{"name":"不透明度","value":0.5},{"name":"UV重复","value":1.0}]
     */
    scalarParameters?: { name: string; value: number }[]
    /**
     * vectorParameters (array) 可选参数，仅在设置自定义材质路径后生效，自定义材质矢量类型参数，包含name/value键值对的数组，其中value为数组，格式示例：[{"name":"color1","value":[1,1,1,1]},{"name":"color2","value":[1,0,0,1]}]
     */
    vectorParameters?: { name: string; value: number[] }[],
    /**
     * generateTop (boolean) 可选参数，设置自定义材质路径后生效，是否生成顶面，默认：true
     */
    generateTop?: boolean
    /**
     * generateSide (boolean) 可选参数，设置自定义材质路径后生效，是否生成侧面，默认：true
     */
    generateSide?: boolean
    /**
     * generateBottom (boolean) 可选参数，设置自定义材质路径后生效，是否生成底面，默认：true
     */
    generateBottom?: boolean
}

/**
 * id (string) 字符串类型的ID

groupId (string) 可选，Group分组

userData (string) 可选，用户自定义数据

coordinates (array) 多边形坐标数组，取值示例

color (Color) 颜色值，支持四种格式，取值示例

height (number) 3D多边形的高度，取值范围：[任意正数]

intensity (number) 亮度，取值范围：[0~1000]

style (number) 3DPolygon的样式，参考 Polygon3DStyle

tillingX (number) 可选参数，仅当3DPolygon的样式支持贴图显示时，设置贴图横向平铺，取值范围：[任意数值]

tillingY (number) 可选参数，仅当3DPolygon的样式支持贴图显示时，设置贴图纵向平铺，取值范围：[任意数值]

material (string) 可选参数，自定义材质路径，即资源库PAK文件里材质文件的路径，设置自定义材质参数后style相关参数会失效

scalarParameters (array) 可选参数，仅在设置自定义材质路径后生效，自定义材质数值类型参数，包含name/value键值对的数组，其中value为数值，格式示例：[{"name":"不透明度","value":0.5},{"name":"UV重复","value":1.0}]

vectorParameters (array) 可选参数，仅在设置自定义材质路径后生效，自定义材质矢量类型参数，包含name/value键值对的数组，其中value为数组，格式示例：[{"name":"color1","value":[1,1,1,1]},{"name":"color2","value":[1,0,0,1]}]

generateTop (boolean) 可选参数，设置自定义材质路径后生效，是否生成顶面，默认：true

generateSide (boolean) 可选参数，设置自定义材质路径后生效，是否生成侧面，默认：true

generateBottom (boolean) 可选参数，设置自定义材质路径后生效，是否生成底面，默认：true
 */

export interface I3DPolygonOptions {
    /**
     * coordinates (array) 多边形坐标数组，取值示例
     */
    coordinates: number[][]
    /**
     * color (Color) 颜色值，支持四种格式，取值示例
     */
    color?: EColor
    /**
     * height (number) 3D多边形的高度，取值范围：[任意正数]
     */
    height?: number
    /**
     * intensity (number) 亮度，取值范围：[0~1000]
     */
    intensity?: number
    /**
     * style (number) 3DPolygon的样式，参考 Polygon3DStyle
     */
    style?: EPolygon3DStyle
    /**
     * tillingX (number) 可选参数，仅当3DPolygon的样式支持贴图显示时，设置贴图横向平铺，取值范围：[任意数值]
     */
    tillingX?: number
    /**
     * tillingY (number) 可选参数，仅当3DPolygon的样式支持贴图显示时，设置贴图纵向平铺，取值范围：[任意数值]
     */
    tillingY?: number
    /**
     * material (string) 可选参数，自定义材质路径，即资源库PAK文件里材质文件的路径，设置自定义材质参数后style相关参数会失效
     */
    material?: string
    /**
     * scalarParameters (array) 可选参数，仅在设置自定义材质路径后生效，自定义材质数值类型参数，包含name/value键值对的数组，其中value为数值，格式示例：[{"name":"不透明度","value":0.5},{"name":"UV重复","value":1.0}]
     */
    scalarParameters?: { name: string; value: number }[]
    /**
     * vectorParameters (array) 可选参数，仅在设置自定义材质路径后生效，自定义材质矢量类型参数，包含name/value键值对的数组，其中value为数组，格式示例：[{"name":"color1","value":[1,1,1,1]},{"name":"color2","value":[1,0,0,1]}]
     */
    vectorParameters?: { name: string; value: number[] }[]
    /**
     * generateTop (boolean) 可选参数，设置自定义材质路径后生效，是否生成顶面，默认：true
     */
    generateTop?: boolean
    /**
     * generateSide (boolean) 可选参数，设置自定义材质路径后生效，是否生成侧面，默认：true
     */
    generateSide?: boolean
    /**
     * generateBottom (boolean) 可选参数，设置自定义材质路径后生效，是否生成底面，默认：true
     */
    generateBottom?: boolean
}
