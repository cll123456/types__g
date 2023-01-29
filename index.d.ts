import { AirCityAPIOptions, AirCityPlayerOptions } from './common/aircityPlay/AirCityPlayInterface'

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

declare class AirCityPlayer {
    /**
     * Server address in the following format IP:Port (where Port is the instance's WebSocket service port number)
     */
    host: string
    /**
     * Initialization options, supporting the following properties (all optional)
     */
    options: AirCityPlayerOptions
    /**
     *
     * @param host  service address, in the following format IP:Port, for example: '192.168.1.29:8082';
     * @param options initialization option
     */
    constructor(host: string, options: AirCityPlayerOptions)
}

/**
 * Its interface is generally called via the global variable __g.
 *
 * Only after new AirCityAPI, the global variable __g is valid.
 */
declare namespace __g {
    const version: number
}

/**
 * rewrite Window type
 */
declare var Window: {
    prototype: Window
    new (): Window
    /**
     * AirCityPlayer
     */
    AirCityPlayer: AirCityPlayer
}
