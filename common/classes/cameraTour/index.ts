import { BaseResult } from '../base/index'
import { ICameraTourOptions } from './options'
export interface ICameraTour {
    // TODO 写一行是为了，没有和最新的api同步，避免报错问题
    [key: string]: unknown | any
    /**
     * 创建一个或多个CameraTour对象
     *
     * @param data CameraTourData类的对象或者数组
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    add: (data: ICameraTourOptions | ICameraTourOptions[], fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 删除一个或多个CameraTour对象
     *
     * @param ids 要删除的CameraTour对象的ID或者ID数组（可以删除一个或者多个）
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    delete: (ids: string | string[], fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 暂停播放导览动画
     *
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    pause: (fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 开始播放导览动画
     *
     * @param id 相机导览的ID
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    play: (id: string, fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 恢复播放导览动画
     *
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    resume: (fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 设置时间长度
     *
     * @param id 相机导览的ID
     * @param val 新值
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    setDuration: (id: string, val: number, fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 设置导览动画关键帧
     *
     * @param id 相机导览的ID
     * @param val 新值
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    setKeyFrames: (id: string, val: number, fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 设置名称
     *
     * @param id 相机导览的ID
     * @param val 新值
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    setName: (id: string, val: number, fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 设置用户数据
     *
     * @param id 相机导览的ID
     * @param val 新值
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    setUserData: (id: string, val: number, fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 停止播放导览动画
     *
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    stop: (fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 修改一个或多个CameraTour对象
     *
     * @param data CameraTourData类的对象或者数组
     * @param fn 可选的回调函数，请参考二次开发：异步接口调用方式
     * @returns
     */
    update: (data: ICameraTourOptions | ICameraTourOptions[], fn?: (() => void) | null) => Promise<BaseResult>
}
