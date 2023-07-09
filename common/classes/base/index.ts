import { APIErrorCode } from './../../utils/conmmonEnum'
/**
 * 返回结果的基类
 */
export interface BaseResult {
    /**
     * 当前调用的唯一索引
     */
    callbackIndex: number
    /**
     * 当前执行操作的代码编号
     */
    command: number
    /**
     * 执行后的结构
     */
    result: APIErrorCode
    /**
     * 三维返回的消息结构
     */
    resultMessage: string
    /**
     * 时间戳
     */
    timestamp: number
    /**
     * 返回的详细信息
     */
    data?: any
}

/**
 * 所有类的基础
 */
export interface BaseOptions {
    /**
     * 字符串类型的ID
     */
    id: string | number | symbol | any
    /**
     * 可选，Group分组
     */
    groupId?: string
    /**
     * 可选，用户自定义数据
     */
    userData?: string
}
