import { Color } from 'common/utils/conmmonEnum'
import { IG } from './common/utils/commonInterface'
import { ApiAirCityParentInterface } from './common/aircityPlay/getApiInterface'
import { AirCityAPIOptions, AirCityPlayerClass, AirCityPlayerOptions } from './common/aircityPlay/AirCityPlayInterface'

/**
 * Construct an object of the AirCityAPI class for the initialization of the API interface.
 * 
Note: If the developed page comes with a cloud-rendered video stream display, only the AirCityPlayer needs to be initialized. The AirCityAPI does not need to be created by the user (it will be created automatically internally) and can be obtained through the getAPI() method of the AirCityPlayer.
 */
declare class AirCityAPI {
    /**
     * Server address in the following format IP:Port (where Port is the instance's WebSocket service port number)
     */
    host: string
    /**
     * Initialization options, supporting the following properties (all optional)
     */
    options: AirCityAPIOptions
}

/**
 * 构造一个DigitalTwinAPI类的对象，用于API接口的初始化。
 *注意：如果所开发的页面带有云渲染视频流展示，只需要初始化DigitalTwinPlayer即可，DigitalTwinAPI不需要用户创建（内部会自动*创建），可以通过DigitalTwinPlayer的getAPI()方法获取。
 */
declare class DigitalTwinAPI {
    /**
     * 服务器地址，格式如下 IP:Port（此处的Port是实例的WebSocket服务端口号）
     */
    host: string
    /**
     * 初始化选项，支持以下属性（都是可选）
     */
    options: AirCityAPIOptions
}

declare global {
    interface Window {
        /**
         * AirCityPlayer
         */
        AirCityPlayer: new (host: string, options: AirCityPlayerOptions) => AirCityPlayerClass
        /**
         * DigitalTwinAPI
         */
        DigitalTwinAPI: new (host: string, options: AirCityPlayerOptions) => AirCityPlayerClass

        Color: Color
    }

    const __g: IG
}

/**
 * AirCityPlayerType
 */
declare type AirCityPlayerType = AirCityPlayerClass
/**
 * AirCityAPIOptionsType
 */
declare type AirCityAPIOptionsType = AirCityAPIOptions
/**
 * AirCityPlayerOptionsType
 */
declare type AirCityPlayerOptionsType = AirCityPlayerOptions
/**
 * ApiParentInterfaceType
 */
declare type ApiParentInterfaceType = ApiAirCityParentInterface
/**
 * AircityApiType
 */
declare type AircityApiType = ApiAirCityParentInterface
/**
 * DigitalTwinApiType
 */
declare type DigitalTwinApiType = ApiAirCityParentInterface
/**
 * DigitalTwinPlayerType
 */
declare type DigitalTwinPlayerType = AirCityPlayerClass
/**
 * DigitalTwinApiOptionsType
 */
declare type DigitalTwinApiOptionsType = AirCityAPIOptions
/**
 * DigitalTwinPlayerOptionsType
 */
declare type DigitalTwinPlayerOptionsType = AirCityPlayerOptions
