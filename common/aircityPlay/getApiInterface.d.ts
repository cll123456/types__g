/**
 * api parent interface
 */
export interface ApiParentInterface {
    /**
     * Close the WebSocket connection
     *
     *  If the destroy method is not called, the WebSocket connection will automatically try to reconnect when it is closed passively,but
     *  If the destroy method is called, the connection will not try to reconnect after it is disconnected, and you need to refresh the *page before the connection will continue.
     * @returns
     */
    destroy: () => void
    /**
     * Get the full version number of the SDK, for example: 5.3.0413
     * @returns   5.3.0413
     */
    getVersion: () => string
    /**
     * Register the JS script to be executed when each frame is rendered
     *
     * @param url HTML page running in the renderer
     * @param debugOptions when is set to true, the TickMarker will be displayed with the default value
     */
    registerTick(url: string, debugOptions?: boolean): void
    /**
     * Register the JS script to be executed when each frame is rendered
     *
     * @param url HTML page running in the renderer
     * @param debugOptions you can use all Marker properties except id, popupURL, and autoHidePopupWindow to set TickMarker, for example,  you can display TickMarker at the desired position, you can set the size of the window, etc.
     */
    //  TODO debugOptions type is marker
    registerTick(url: string, debugOptions?: object): void
    /**
     * Remove JS scripts that are executed at each rendering frame
     */
    removeTick(): void
    /**
     * Reset the scene (reset to the state where the project was just opened)
     * @param fn For optional callback functions, please refer toAsynchronous interface call method
     */
    reset(fn?: (...arg: unknown[]) => unknown): void
    /**
     * quit instance connect
     */
    quit(): void
    /**
     * Save the scene (only the scene settings are saved, not the objects created by the interface)
      Note: This interface has concurrency problem, please make sure that the calling order of each client is synchronized.
     * @param fn For optional callback functions, please refer toAsynchronous interface call method
     */
    saveProject(fn?: (...arg: unknown[]) => unknown): void
    /**
     * Set callback functions for 3D events (e.g. camera flight start, end, Actor's click, etc.)
     * @param fn Event callback functions
     */
    setEventCallback(fn: (...arg: unknown[]) => unknown): void

    /**
     * Set the host address
     * @param ip IP address or host name
     * @param port Port number of the WebSocket service
     */
    setHost(ip: string, port: number): void
}
