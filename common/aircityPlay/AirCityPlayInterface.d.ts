import { MouseKeyEventEnum } from '../utils/conmmonEnum'
import { CommonObject } from '../utils/common'

/**
 * AirCityAPI class options
 */
export interface AirCityAPIOptions {
    /**
     *  The callback function after the project is loaded successfully is the only time the API can be called.
     *  If the API is called before the project is opened, there is a risk of crash or erro
     * @returns {void}
     */
    onReady?: () => void
    /**
     *  Method for assigning output logs to AirCityAPI
     * @param e {string} callback string to output in console
     * @returns
     */
    onLog?: (e: string) => void
    /**
     * default: false
     * Specifies whether to set the color tag () when generating logs, which can be used to display colored log output on the page.
     */
    useColorLog?: boolean
    /**
     *The callback function used to set event handling can also be set via the setEventCallback method
     * @returns {void}
     */
    onEvent?: (e: EventType) => void
    /**
     *  Callback method for receiving version information from the cloud rendering server
     * @returns
     */
    onApiVersion?: () => void
    /**
     * Set the language, optional value "zh", "en", currently support Simplified Chinese, English, the default is Chinese,
     * to use English, please set the property to "en"
     */
    language?: 'zh' | 'en'
    /**
     * the options event hander
     */
    actionEventHander?: MouseKeyListenerObj
}

/**
 * aircityAPI onEvent function param types， such as:
 *
 * BoundsMax:  [490828.03125, 2490567, 323.2605285644531]
 *
 * BoundsMin: [488693.875, 2487317.25, 3.600332021713257]
 *
 * Id: "189305B54DB36271655A898F45C0A2B2"
 *
 * MouseClickPoint:  [490442.8125, 2488964.25, 106.99308776855469]
 *
 * ObjectID: "bafde5907e422125ff466b8f0665badc_RN_141680"
 *
 * PropertyName: "植物"
 *
 * Type: "TileLayer"
 *
 * eventtype: "LeftMouseButtonClick"
 *
 */
export interface EventType {
    /**
     * Maximum range coordinate of click, such as [0, 0, 0]
     */
    BoundsMax?: string[] | undefined
    /**
     * Minimum range coordinate of click, such as [0, 0, 0]
     */
    BoundsMin?: string[] | undefined
    /**
     * ID of the currently selected layer or object
     */
    Id?: string | undefined
    /**
     * Coordinates of the currently clicked point. as [0, 0, 0]
     */
    MouseClickPoint?: string[] | undefined
    /**
     * Sub-Id of the currently clicked object
     */
    ObjectID?: string | undefined
    /**
     *The name of the currently clicked layer or object
     */
    PropertyName?: string | undefined
    /**
     * The type of the currently clicked layer or object
     */
    Type?: 'Model' | 'TileLayer'
    /**
     * The type event of the currently clicked layer or object
     */
    eventtype: 'LeftMouseButtonClick' | 'camerabeginmove'
}

/**
 * AirCityPlayer options interface
 */
export interface AirCityPlayerOptions {
    /**
     * HTML element ID (it will be used as the parent of the Video tag to be created), if this parameter is not set,
     * no video stream will be transmitted, only API calls will be made
     */
    domId?: string
    /**
     * ID of the cloud rendering instance, this attribute is available in two cases.
     *
     * (1) For connections with video streaming (where the domId attribute is specified), this attribute is optional,
     * and if no iid is specified, then a free instance is automatically assigned
     *
     * (2) For API calls without video streaming, this property is required and the cloud rendering instance must be specified to make the API call
     */
    iid?: string
    /**
     * pecify the project ID of the instance to be loaded.
     *
     * Note: If the project file is locked in the instance setting, here if the specified pid is another project, it will cause the switch project to fail.
     */
    pid?: number | null
    /**
     * Specifies whether to reset the instance. If reset is set to true, every connection (including refresh) will get a brand new instance
     *
     * Note: If set to true, each page refresh will also cause the instance to restart.
     *
     * default: false
     */
    reset?: boolean
    /**
     * Used to set the visibility of the interface component.
     */
    ui?: AirCityPlayerOptionsUI
    /**
     * Used to specify the initialization options of AirCityAPI, please refer to the specific property value AirCityAPI
     *
     *  AirCityAPI object will be created automatically when initializing AirCityPlayer, so you don't need to create it separately, you can get it by getAPI() later.
     */
    apiOptions?: AirCityAPIOptions
    /**
     *  Used to set some event callback functions, currently the following properties can be set.
     */
    events?: AirCityPlayerOptionsUIEvent
    /**
     * This property is used to set the keyboard's role object: video tag (video), web document (document), disabled (none). Users can set the appropriate keyboard interaction object according to their own application scenarios.
     *
     * default: 'video'
     *
     */
    /** @deprecated the keyEventReceiver is deprecated, please use keyEventTarget  */
    keyEventReceiver?: 'document' | 'video' | 'none'
    /**
     *  This property is used to set the keyboard's role object: video tag (video), web document (document), disabled (none). Users can set the appropriate keyboard interaction object according to their own application scenarios.
     *
     * default: 'video'
     */
    keyEventTarget?: 'document' | 'video' | 'none'
    /**
     *  Set the access password of the instance, if the service sets the password, then the client needs to provide the correct password to connect to the instance
     */
    password?: string
    /**
     * Used to add additional information to the URL of the WebSocket connection (e.g. authentication authorization information, etc.)
     */
    urlExtraInfo?: CommonObject
    /**
     *Set whether to use the built-in cursor, if set to false, the video window will always display the arrow style cursor without using the built-in cursor.
     *
     * default: true
     */
    useBuiltinCursors?: boolean
    /**
     * Specify explicitly the use of HTTPS for WebSocket connections. If you are using Nginx to reverse proxy AirCityCloud's Http service via Https, you need to set the useHttps property to true when initializing AirCityPlayer in order to establish the connection correctly.
     *
     * default: false
     */
    useHttps?: boolean
    /**
     * Set the language, optional value "zh", "en", currently support Simplified Chinese, English, the default is Chinese, to use English, please set the property to "en"
     *
     * default: zh
     */
    language?: 'zh' | 'en'
    /**
     * the callback of aircity connect close
     * @param e
     * @returns
     */
    onclose?: (e: CloseEventParms) => void
    /**
     * the callback of aircity connect loaded
     * @returns
     */
    onloaded?: () => void
}

/**
 * AirCityPlayer options UI interface
 */
export interface AirCityPlayerOptionsUI {
    /**
     *  whether to display the detailed information during the initialization.
     *
     * default true
     */
    startupInfo?: boolean
    /**
     * The blinking status indicator in the upper left corner can tell the current status from different colors, please refer to the specific meaning CloudStatus.
     *
     * default true
     */
    statusIndicator?: boolean
    /**
     * Whether to display the information button in the lower left corner. When clicked, it will display the real-time operation status of the current connection in the small window; when the mouse is hovered, it will display the detailed information of the currently connected instance.
     *
     * default：false
     */
    statusButton?: boolean
    /**
     * Whether to display the "Full Screen" button in the lower left corner
     *
     * default：false
     */
    fullscreenButton?: boolean
    /**
     * Whether to display the "Back to initial position" button in the lower left corner
     *
     * default：false
     */
    homeButton?: boolean
    /**
     * Whether to display the "Task Queue (API Call Queue)" information below, with the following values.
     *
     * 0: Never show
     *
     * 1: Displayed when executing a more time-consuming operation
     *
     * 2: Always show
     *
     * default: 1
     */
    taskListBar?: 0 | 1 | 2
    /**
     * whether to display touch event details (for debugging only)
     *
     * default: false
     */
    debugTouchPanel?: boolean
    /**
     *  whether to show Cloud toolbar. It can also be set via settings.setMainUIVisibility()
     *
     *  Note: Show if set to true, hide if set to false, or leave as is if not set.
     *
     *  No default value
     */
    mainUI?: boolean
    /**
     * if or not show the north compass. It can also be set via settings.setCampassVisible()
     *
     * Note: Show if set to true, hide if set to false, or leave as is if not set.
     *
     * No default value
     */
    campass?: boolean
}

/**
 * AirCity player options UI event interface
 */
export interface AirCityPlayerOptionsUIEvent {
    /**
     *  Callback function for service connection disconnection, with function parameter event (disconnection event)
     *
     * useless
     * @returns
     */
    onConnClose: (e: any) => void
    /**
     * Triggered when the video stream is loaded successfully (loadedmetadata)
     *
     * useless
     * @returns
     */
    onVideoLoaded: (e: any) => void
    /**
     * Used to receive status information about the video stream, e.g. frame rate, bit rate, QP, etc.
     *
     * @returns
     */
    onRtcStatsReport: (e: RtcStatsReportParams) => void
    /**
     * Used to set keyboard and mouse interaction events, which can be readily accessed later via the AirCityPlayer#setActionEventEnabled Perform switch.
     *
     * useless
     */
    mouseKeyListener?: MouseKeyListenerObj
}

/**
 * onRtcStatsReport params interface
 *
 * bitrate: 5775.848
 *
 *   bytesReceived: 1123999
 *
 *    frameHeight: 1080
 *
 *    frameWidth: 1920
 *
 *    framesDecoded: 43
 *
 *    framesDropped: 0
 *
 *    framesPerSecond: 24
 *
 *    framesReceived: 44
 *
 *    keyFramesDecoded: 1
 *
 *    packetsLost: 0
 *
 *    receiveToCompositeMs: 23.90000000000009
 *
 *    timestamp: 1674033182220
 *
 *    timestampStart: 1674033181220
 *
 */
export interface RtcStatsReportParams {
    /**
     * bitrate of vedio stream
     */
    bitrate: number
    /**
     * current bytes Receivedof vedio stream
     */
    bytesReceived: number
    /**
     * current screen height of vedio stream
     */
    frameHeight: number
    /**
     * current screen width of vedio stream
     */
    frameWidth: number
    /**
     * current frames decoded of vedio stream
     */
    framesDecoded: number
    /**
     * current frames dropped of vedio stream
     */
    framesDropped: number
    /**
     * current per second of vedio stream
     */
    framesPerSecond: number
    /**
     * current frames received of vedio stream
     */
    framesReceived: number
    /**
     *current keyFrames decoded of vedio stream
     */
    keyFramesDecoded: number
    /**
     * current packets lost of vedio stream
     */
    packetsLost: number
    /**
     *current receive to composite message of vedio stream
     */
    receiveToCompositeMs: number
    /**
     * current timestamp of vedio stream
     */
    timestamp: number
    /**
     * current timestamp start of vedio stream
     */
    timestampStart: number
}

/**
 * mouseKeyListener interface
 */
export interface MouseKeyListenerObj {
    /**
     * mouse enter callback function
     * @param e {MouseKeyListenerEvent}
     * @returns
     */
    onMouseEnter: (e: MouseKeyListenerEvent) => void
    /**
     * mouse leave callback function
     * @param e {MouseKeyListenerEvent}
     * @returns
     */
    onMouseLeave: (e: MouseKeyListenerEvent) => void
    /**
     * mouse move callback function
     * @param e {MouseKeyListenerEvent}
     * @returns
     */
    onMouseMove: (e: MouseKeyListenerEvent) => void
    /**
     * mouse down callback function
     * @param e {MouseKeyListenerEvent}
     * @returns
     */
    onMouseDown: (e: MouseKeyListenerEvent) => void
    /**
     * mouse up callback function
     * @param e {MouseKeyListenerEvent}
     * @returns
     */
    onMouseUp: (e: MouseKeyListenerEvent) => void
    /**
     * key down callback function
     * @param e {MouseKeyListenerEvent}
     * @returns
     */
    onKeyDown: (e: MouseKeyListenerEvent) => void
    /**
     * key up callback function
     * @param e {MouseKeyListenerEvent}
     * @returns
     */
    onKeyUp: (e: MouseKeyListenerEvent) => void
    /**
     * key press callback function
     * @param e {MouseKeyListenerEvent}
     * @returns
     */
    onKeyPress: (e: MouseKeyListenerEvent) => void
}

/**
 * mouse and keyboard listener event
 */
export interface MouseKeyListenerEvent extends MouseEvent {
    /**
     * operate type
     */
    type: MouseKeyEventEnum
}

/**
 * connect close param
 */
export interface CloseEventParms {
    /**
     * is trusted
     *
     * default: true
     */
    isTrusted: boolean
    /**
     * is bubbles
     *
     * default: false
     */
    bubbles: boolean
    /**
     * is cancel bubble
     *
     * default: false
     */
    cancelBubble: boolean
    /**
     * is cancel lable
     *
     * default: false
     */
    cancelable: boolean
    /**
     * close status code
     *
     * values: [1006, 1008, 1013, 4e3, 4001, 4002, 4003, 4004, 4005, 4006, 4007, 4008, 4009, 4100, 4101, 4102, 4103, 4105, 4107]
     */
    code: number
    /**
     * is composed
     *
     * default: false
     */
    composed: boolean
    /**
     * current target
     */
    currentTarget: WebSocket
    /**
     * is default prevent
     *
     * default: false
     */
    defaultPrevented: boolean
    /**
     * the event phase
     *
     * default: 0
     */
    eventPhase: number
    /**
     * close reason
     *
     */
    reason: string
    /**
     * is return value
     *
     * default: true
     */
    returnValue: boolean
    /**
     * src element
     */
    srcElement: WebSocket
    /**
     * target dom
     */
    target: WebSocket
    /**
     * time stamp
     */
    timeStamp: string
    /**
     * close type
     *
     * default: close
     */
    type: string
    /**
     * is clean
     *
     * default: true
     */
    wasClean: boolean
}
