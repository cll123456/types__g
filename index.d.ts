import { ApiParentInterface } from 'common/aircityPlay/getApiInterface'
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
 * Its interface is generally called via the global variable __g.
 *
 * Only after new AirCityAPI, the global variable __g is valid.
 */
declare namespace __g {
    const version: number
}

declare global {
    interface Window {
        AirCityPlayer: new (host: string, options: AirCityPlayerOptions) => AirCityPlayerClass
    }
}

declare type AirCityPlayerTypes = AirCityPlayerClass
declare type ApiParentInterfaceTypes = ApiParentInterface
declare type AirCityAPIOptionsTypes = AirCityAPIOptions
declare type AirCityPlayerOptionsTypes = AirCityPlayerOptions
