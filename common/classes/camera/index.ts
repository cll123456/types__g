import { BaseResult } from '../base/index'
export interface ICamera {
    // TODO 写一行是为了，没有和最新的api同步，避免报错问题
    [key: string]: unknown | any
    /**
     * 进入世界（三维场景），即从地球飞入到三维场景
     *
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    enterWorld: (fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 退出世界（三维场景），即从三维场景飞入到地球
     *
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    exitWorld: (fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 相机环绕指定位置旋转一周
     *
     * @param location 必选，相机环绕位置：[X,Y,Z]，取值示例，数组元素类型：(number)，取值范围：[任意数值]
     * @param rotation 可选，相机旋转的欧拉角：[Pitch,Yaw,Roll]，数组元素类型：(number)，取值范围：Pitch[-90~90] Yaw[-180~180] Roll[0]，默认值：[0,90,0]
     * @param distance 可选，相机观察距离，单位：米，默认值：[1000]
     * @param time 可选，相机环绕一周的时间，取值范围：[0~任意正数]，单位：秒，默认值10秒
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    flyAround: (location: number[], rotation?: number[], distance?: number, time?: number, fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 获取当前的相机位置
     *
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    get: (fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 根据导览名称获取对应导览缩略图的base64字符串，默认图片格式png，尺寸：128*128
     *
     * @param name 导览名称，可以根据getAnimationList()方法获取
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    getAnimationImage: (name: string, fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 获取当前acp里所有导览的信息
     *
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    getAnimationList: (fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 锁定相机的交互范围，仅允许在BBox内交互
     *
     * @param bbox 即3D Bounding Box，3D物体的包围盒，用于表示三维物体坐标的取值边界，格式示例：[minX,minY,minZ,maxX,maxY,maxZ]
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    lockByBBox: (bbox: number[], fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 通过观察点设置相机位置
     *
     * @param x 观察点坐标X
     * @param y 观察点坐标Y
     * @param z 观察点坐标Z
     * @param distance 可选参数，观察点距离目标点（被拍摄物体）的距离，取值范围：[0.01~任意正数]，如果设置为0或者不设置，系统自动计算
     * @param pitch 上下旋转角度（俯仰），单位是度。可选参数，如果没有设置或者设置为0，系统会自动设置默认值。
     * @param yaw 左右旋转角度（航向），单位是度。可选参数，如果没有设置或者设置为0，系统会自动设置默认值。
     * @param flyTime 可选参数，相机飞行的时间，取值范围：[0~任意正数]，单位：秒，默认值2秒
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    lookAt: (x: number, y: number, z: number, distance?: number, pitch?: number, yaw?: number, flyTime?: number, fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 通过BBox设置相机
     *
     * @param bbox bounding box
     * @param pitch 上下旋转角度（俯仰），单位是度。 此参数可选，如果没有设置或者设置为0，系统会自动设置默认值。
     * @param yaw 左右旋转角度（航向），单位是度。 此参数可选，如果没有设置或者设置为0，系统会自动设置默认值。
     * @param flyTime 可选参数，相机飞行的时间，取值范围：[0~任意正数]，单位：秒，默认值2秒
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    lookAtBBox: (bbox: number[], pitch?: number, yaw?: number, flyTime?: number, fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 后退
     *
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    moveBackward: (fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 下降
     *
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    moveDown: (fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 前进
     *
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    moveForward: (fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 左移
     *
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    moveLeft: (fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 右移
     *
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    moveRight: (fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 上升
     *
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    moveUp: (fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 暂停播放动画导航
     *
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    pauseAnimation: (fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 开始播放动画导航
     *
     * @param id 动画导航的编号
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    playAnimation: (id: number, fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 恢复播放动画导航
     *
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    resumeAnimation: (fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 设置相机位置，这是最常见的参数形式，另外两种参数形式，请参考二次开发：关于设置相机位置的三种形式
     *
     * @param x 坐标X
     * @param y 坐标Y
     * @param z 坐标Z
     * @param pitch 上下旋转角度（俯仰），单位是度。 此参数可选，如果没有设置或者设置为0，系统会自动设置默认值。
     * @param yaw 左右旋转角度（航向），单位是度。 此参数可选，如果没有设置或者设置为0，系统会自动设置默认值。
     * @param flyTime 可选参数，相机飞行的时间，取值范围：[0~任意正数]，单位：秒，默认值2秒
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    set: (x: number, y: number, z: number, pitch?: number, yaw?: number, flyTime?: number, fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 停止
     *
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    stop: (fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 停止播放动画导航
     *
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    stopAnimation: (fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 低头
     *
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    turnDown: (fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 左转
     *
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    turnLeft: (fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 右转
     *
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    turnRight: (fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 抬头
     *
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    turnUp: (fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 解锁相机的交互范围，恢复自由交互
     *
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    unlock: (fn?: (() => void) | null) => Promise<BaseResult>
}
