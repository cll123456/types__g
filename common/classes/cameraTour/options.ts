/**
 * 相机导览关键帧
 * 
 * index	number	
索引

time	number	
帧播放抵达时间，单位：秒

location	array	
关键帧位置坐标：[X,Y,Z]，取值示例，数组元素类型：(float)，取值范围：[任意数值]

rotation	array	
可选参数，关键帧相机朝向坐标：[Pitch,Yaw,Roll]，数组元素类型：(float)，取值范围：[任意数值]，注意：不传入此参数则根据相机位置自动计算
 */
interface CameraTourKeyFrame {
    /**
     * 索引
     */
    index: number
    /**
     * 帧播放抵达时间，单位：秒
     */
    time: number
    /**
     * 关键帧位置坐标：[X,Y,Z]，取值示例，数组元素类型：(float)，取值范围：[任意数值]
     */
    location: number[]
    /**
     * 可选参数，关键帧相机朝向坐标：[Pitch,Yaw,Roll]，数组元素类型：(float)，取值范围：[任意数值]，注意：不传入此参数则根据相机位置自动计算
     */
    rotation?: number[]
}

/**
 * 相机导览数据对象
 * 
 * id	string	
字符串类型的ID

name	string	
名称

keyFrames	array	
关键帧对象数组 对象结构示例
 */
export interface ICameraTourOptions {
    /**
     * 字符串类型的ID
     */
    index: string
    /**
     * 名称
     */
    time: string
    /**
     * 关键帧对象数组 对象结构示例
     */
    keyFrames: CameraTourKeyFrame[]
}
