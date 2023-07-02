/**
 * api parent interface
 */
export interface ApiAirCityParentInterface {
    /**
     * 关闭视频流连接
     *
     *  If the destroy method is not called, the WebSocket connection will automatically try to reconnect when it is closed passively,but
     *  If the destroy method is called, the connection will not try to reconnect after it is disconnected, and you need to refresh the *page before the connection will continue.
     * @returns
     */
    destroy(): void
    /**
     * 获取当前SDK的版本, for example: 5.3.0413
     * @returns   5.3.0413
     */
    getVersion(): string
    /**
     * 注册每个帧渲染时要执行的JS脚本
     *
     * @param url HTML page running in the renderer
     * @param debugOptions when is set to true, the TickMarker will be displayed with the default value
     */
    registerTick(url: string, debugOptions?: boolean): void
    /**
     * 注册每个帧渲染时要执行的JS脚本
     *
     * @param url HTML page running in the renderer
     * @param debugOptions you can use all Marker properties except id, popupURL, and autoHidePopupWindow to set TickMarker, for example,  you can display TickMarker at the desired position, you can set the size of the window, etc.
     */
    //  TODO debugOptions type is marker
    registerTick(url: string, debugOptions?: object): void
    /**
     * 移除每帧渲染时执行的JS脚本
     */
    removeTick(): void
    /**
     * 对三维场景执行重置操作
     * @param fn For optional callback functions, please refer toAsynchronous interface call method
     */
    reset(fn?: (...arg: unknown[]) => unknown): void
    /**
     * quit instance connect
     */
    quit(): void
    /**
     * S保存场景（只保存场景设置，不保存接口创建的对象）
     *  注意：此接口有并发问题，请务必保证各客户端的调用顺序是同步的。
     * @param fn For optional callback functions, please refer toAsynchronous interface call method
     */
    saveProject(fn?: (...arg: unknown[]) => unknown): void
    /**
     * 设置三维事件（例如相机飞行开始、结束、Actor的点击等）的回调函数
     * @param fn Event callback functions
     */
    setEventCallback(fn: (...arg: unknown[]) => unknown): void

    /**
     * 设置主机地址
     * @param ip IP address or host name
     * @param port Port number of the WebSocket service
     */
    setHost(ip: string, port: number): void
    /**
     * 显示/隐藏tick调试窗口。 该方法既可以在客户端调用，也可以在tick调试窗口调用
     * @param visible {boolean} 是否可见
     * @param fn
     */
    showTickWindow(visible: boolean, fn: () => unknown): void
}

/**
 * DigitalTwinAPI api options
 */
export interface ApiDigitalTwinAPIInterface extends ApiAirCityParentInterface {}
