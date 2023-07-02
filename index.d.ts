import { ICustomTag } from './common/classes/customTag/index'
import { ICustomObject } from './common/classes/customObject/index'
import { IWeather } from './common/classes/weather/index'
import { IWaterMesh } from './common/classes/waterMesh/index'
import { IWaterFlowField } from './common/classes/waterFlowField/index'
import { IVideoProjection } from './common/classes/videoProjection/index'
import { IVehicle } from './common/classes/vehicle/index'
import { ITools } from './common/classes/tools/index'
import { ITileLayer } from './common/classes/tileLayer/index'
import { ITag } from './common/classes/tag/index'
import { IShapeFileLayer } from './common/classes/shapeFileLayer/index'
import { ISettingsPanel } from './common/classes/settingsPanel/index'
import { ISettings } from './common/classes/settings/index'
import { IRadiationPoint } from './common/classes/radiationPoint/index'
import { IPolyline } from './common/classes/polyline/index'
import { IPolygon3d } from './common/classes/polygon3d/index'
import { IPolygon } from './common/classes/polygon/index'
import { IPanorama } from './common/classes/panorama/index'
import { IOdline } from './common/classes/odline/index'
import { IMisc } from './common/classes/misc/index'
import { IMarker3d } from './common/classes/marker3d/index'
import { IMarker } from './common/classes/marker/index'
import { ILight } from './common/classes/light/index'
import { IInfoTree } from './common/classes/infoTree/index'
import { IImageryLayer } from './common/classes/imageryLayer/index'
import { IHighlightArea } from './common/classes/highlightArea/index'
import { IHeatmap3d } from './common/classes/heatmap3d/index'
import { IHeatmap } from './common/classes/heatmap/index'
import { IGeoJSONLayer } from './common/classes/geoJSONLayer/index'
import { IFloodFill } from './common/classes/floodFill/index'
import { IEditHelper } from './common/classes/editHelper/index'
import { IDynamicWater } from './common/classes/dynamicWater/index'
import { IDecal } from './common/classes/decal/index'
import { ICustomMesh } from './common/classes/customMesh/index'
import { ICoord } from './common/classes/coord/index'
import { ICesium3DTileset } from './common/classes/cesium3DTileset/index'
import { ICameraTour } from './common/classes/cameraTour/index'
import { ICamera } from './common/classes/camera/index'
import { ApiAirCityParentInterface } from './common/aircityPlay/getApiInterface'
import { AirCityAPIOptions, AirCityPlayerClass, AirCityPlayerOptions } from './common/aircityPlay/AirCityPlayInterface'
import { IBeam } from './common/classes/beam/index'

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

/**
 *只有new DigitalTwinAPI以后，全局变量 __g 才是有效的。
 *如果在一个页面上创建了多个视频流窗口，那么__g始终指向最后一次创建的DigitalTwinAPI对象，对于这种情况的解决方案，请参考*SDK文件夹的player_2_2.html
 *
 *
 */
declare interface IG {
    /**
     * Beam类的对象，提供光流相关的操作
     */
    beam: IBeam
    /**
     * Camera类的对象，提供相机相关的操作
     */
    camera: ICamera
    /**
     * CameraTour相机导览动画类，提供相机导览动画操作方法
     */
    cameraTour: ICameraTour
    /**
     * Cesium3DTileset类的对象，提供Cesium3DTileset的相关操作
     */
    cesium3DTileset: ICesium3DTileset
    /**
     * Coord类的对象，提供坐标转换相关的操作
     */
    coord: ICoord
    /**
     * CustomMesh类的对象，提供自定义网格相关的操作
     */
    customMesh: ICustomMesh
    /**
     * CustomObject类的对象，提供用户自定义对象相关的操作
     */
    customObject: ICustomObject
    /**
     * CustomTag，提供对用户自定义标签相关的操作
     */
    customTag: ICustomTag
    /**
     * Decal类的对象，提供贴花相关的操作
     */
    decal: IDecal
    /**
     * DynamicWater类的对象，提供动态水的相关操作
     */
    dynamicWater: IDynamicWater
    /**
     * EditHelper类的对象，提供编辑助手相关操作
     */
    editHelper: IEditHelper
    /**
     * FloodFill类的对象，提供水淹分析的相关操作
     */
    floodFill: IFloodFill
    /**
     * GeoJSONLayer类的对象，提供GeoJSON类型图层符号化加载及相关操作
     */
    geoJSONLayer: IGeoJSONLayer
    /**
     * HeatMap类的对象，提供热力图相关的操作
     */
    heatmap: IHeatmap
    /**
     * HeatMap3D类的对象，提供三维热力图相关的操作
     */
    heatmap3d: IHeatmap3d
    /**
     * HighlightArea类的对象，提供高亮区域相关的操作
     */
    highlightArea: IHighlightArea
    /**
     * ImageryLayer类的对象，提供网络类型图层的相关操作
     */
    imagerLayer: IImageryLayer
    /**
     * InfoTree类的对象，提供图层相关的操作
     */
    infoTree: IInfoTree
    /**
     * Light类的对象，实现对光源的操作接口
     */
    light: ILight
    /**
     * Marker类的对象，实现对标注的操作方法
     */
    marker: IMarker
    /**
     * Marker3D类的对象，实现对三维标注的操作方法
     */
    marker3d: IMarker3d
    /**
     * Misc类的对象，提供一些杂项功能
     */
    misc: IMisc
    /**
     * ODLine类的对象，提供迁徙线相关的操作
     */
    odline: IOdline
    /**
     * Panorama类的对象，提供全景图相关的操作
     */
    panorama: IPanorama
    /**
     * Polygon类的对象，提供多边形相关的操作
     */
    polygon: IPolygon
    /**
     * Polygon3D类的对象，提供三维多边形相关的操作
     */
    polygon3d: IPolygon3d
    /**
     * Polyline类的对象，提供线段相关的操作
     */
    polyline: IPolyline
    /**
     * RadiationPoint类的对象，提供辐射圈相关的操作
     */
    radiationPoint: IRadiationPoint
    /**
     * Settings类的对象，提供三维参数设置相关的接口
     */
    settings: ISettings
    /**
     * 设置面板对象，提供对设置面板里的参数进行操作的接口
     */
    settingsPanel: ISettingsPanel
    /**
     * ShapeFileLayer类的对象，提供ShapeFileLayer对象的相关操作
     */
    shapeFileLayer: IShapeFileLayer
    /**
     * Tag类的对象，实现标签对象的增、删、改、查相关的功能
     */
    tag: ITag
    /**
     * TileLayer类的对象，提供TileLayer增、删、改、查相关的功能
     */
    tileLayer: ITileLayer
    /**
     * Tools类的对象，提供一些工具类的接口
     */
    tools: ITools
    /**
     * Vehicel类的对象，提供车辆载具对象相关的操作
     */
    vehicle: IVehicle
    /**
     * VideoProjection类的对象，提供视频投影相关的操作
     */
    videoProjection: IVideoProjection
    /**
     * WaterFlowField类的对象，提供流场相关的操作
     */
    waterFlowField: IWaterFlowField
    /**
     * WaterMesh类的对象，提供水体网格相关的操作
     */
    waterMesh: IWaterMesh
    /**
     * Weather类的对象，提供天气相关的操作接口
     */
    weather: IWeather
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
