import { BaseOptions } from '../base/index'

/**
 * id (string) 字符串类型的ID

groupId (string) 可选，Group分组

userData (string) 可选，用户自定义数据

imagesArray (array) 16张1024*1024的空间热力图图片的路径，空间位置从低到高，参考示例代码，注意：仅空间图片构建时生效

volumeBoxLocation (array) 三维热力图坐标位置：[X,Y,Z]，取值示例，数组元素类型：(number)，取值范围：[任意数值]

volumeBoxRotation (array) 三维热力图坐标旋转：[Pitch,Yaw,Roll]，数组元素类型：(number)，取值范围：[任意数值]

volumeBoxSize (array) 三维热力图盒子范围：[长,宽,高]，数组元素类型：[任意浮点数]， 单位：米

clipBox (array) 三维热力图盒子剖切的bbox范围，注意：仅对displayMode=2盒子模式下生效，取值格式示例：[minX,minY,minZ,maxX,maxY,maxZ]，元素取值范围：[0~volumeBoxSize]

brightness (number) 亮度，取值范围：[0~100] ，值等于0则完全透明，值越大越不透明

displayMode (number) 显示模式，取值：[0,1,2,3] ，0是体积雾效果, 1是体素效果 , 2是盒子效果，3是贴花效果，注意：0|1是跟全局剖切方法联动的，只有2不跟全局剖切联动需要自己传参clipBox

heatValueMode (number) 热力值模式，取值：[0,1,2,3,4,5,6] ，0 : Interp插值（默认值） 1 : Nearest最近 2 : Addition叠加 3 : Minimum最小 4 : Maximum最大 5 : Overwrite覆盖 6 : DoOnce独占

heatValueRange (array) 热力值的范围：[min,max]，数组元素类型：[任意浮点数]

heatValues (object) 体素块的热力值对象，注意：此参数需要根据纯热力值构建

size (array) 体素尺寸

values (array) 体素的热力值，注意：如果某个体素的值不在heatValueRange范围内则属于无效体素不做渲染。

alphas (array) 可选参数，透明度数组，不传则默认使用colors的透明度

voxelShape (number) 三维体素块形状，取值：[0,1,2]，0 : Sphere球（默认值） 1 : Box盒子 2 : 四面体，注意：仅离散点构建时生效

voxelAlphaMode (number) 三维体素块透明模式，取值：[0,1]，0 : 使用颜色渐变（默认值） 1 : 使用点，注意：仅离散点构建时生效

voxelSize (number) 三维体素块尺寸，支持仅传入Voxels和VoxelSize参数，则自动计算Bounds和TextureSize

textureSize (number) 纹理尺寸，取值范围：[128~512]，默认：128

colors (object) 三维体素的颜色卡配置对象，包含颜色渐变控制和颜色区间数组

gradient (boolean) 是否渐变

invalidColor (array) 无效像素点的默认颜色，默认白色

colorStops (array) 色卡数组，包含热力值和对应颜色值，结构示例：[{"value":0, "color":[0,0,1,1]}]

voxels (array) 离散热力点的坐标数组，包含热力点坐标、热力值影响半径(或盒子范围)、热力值和不透明度四个属性，结构示例：[{"coordinate": [0,0,0],"radius": 5,"heatValue": 0.5,"alpha": 1}]

coordinate (array) 热力点的坐标位置，示例：[x,y,z]

heatValue (array) 热力值，用于匹配colors参数的colorStops数组内颜色

radius (number) 可选，热力点的半径，当voxelShape=0时生效

extent (array) 可选，热力点的盒子范围，即长方体的长宽高：[xSize,ySize,zSize]，voxelShape=1时生效

alpha (number) 热力点不透明度

indices (array) 离散热力点坐标的索引；数组元素类型：(number)；取值示例：[2, 0, 3, 0, 2, 1]，注意：仅在voxelShape=2四面体模式下生效

denoise (number) 降噪级别，取值范围：[0,1,2,3,4,5]，默认值：0 不做降噪；1~5 五级，值越大降噪越耗时
 */
export interface IHeatMap3DOptions extends BaseOptions {
    /**
     * 16张1024*1024的空间热力图图片的路径，空间位置从低到高，参考示例代码，注意：仅空间图片构建时生效
     */
    imagesArray?: string[]
    /**
     * 三维热力图坐标位置：[X,Y,Z]，取值示例，数组元素类型：(number)，取值范围：[任意数值]
     */
    volumeBoxLocation?: number[]
    /**
     * 三维热力图坐标旋转：[Pitch,Yaw,Roll]，数组元素类型：(number)，取值范围：[任意数值]
     */
    volumeBoxRotation?: number[]
    /**
     * 三维热力图盒子范围：[长,宽,高]，数组元素类型：[任意浮点数]， 单位：米
     */
    volumeBoxSize?: number[]
    /**
     * 三维热力图盒子剖切的bbox范围，注意：仅对displayMode=2盒子模式下生效，取值格式示例：[minX,minY,minZ,maxX,maxY,maxZ]，元素取值范围：[0~volumeBoxSize]
     */
    clipBox?: [number, number, number, number, number, number]
    /**
     * 亮度，取值范围：[0~100] ，值等于0则完全透明，值越大越不透明
     */
    brightness?: number
    /**
     * 显示模式，取值：[0,1,2,3] ，0是体积雾效果, 1是体素效果 , 2是盒子效果，3是贴花效果，注意：0|1是跟全局剖切方法联动的，只有2不跟全局剖切联动需要自己传参clipBox
     */
    displayMode?: number
    /**
     * 热力值模式，取值：[0,1,2,3,4,5,6] ，0 : Interp插值（默认值） 1 : Nearest最近 2 : Addition叠加 3 : Minimum最小 4 : Maximum最大 5 : Overwrite覆盖 6 : DoOnce独占
     */
    heatValueMode?: number
    /**
     * 热力值的范围：[min,max]，数组元素类型：[任意浮点数]
     */
    heatValueRange?: number[]
    /**
     * 体素块的热力值对象，注意：此参数需要根据纯热力值构建

size (array) 体素尺寸

values (array) 体素的热力值，注意：如果某个体素的值不在heatValueRange范围内则属于无效体素不做渲染。

alphas (array) 可选参数，透明度数组，不传则默认使用colors的透明度
     */
    heatValues?: { size: number[]; values: number[]; alphas?: number[] }
    /**
     * 三维体素块形状，取值：[0,1,2]，0 : Sphere球（默认值） 1 : Box盒子 2 : 四面体，注意：仅离散点构建时生效
     */
    voxelShape?: number
    /**
     * 三维体素块透明模式，取值：[0,1]，0 : 使用颜色渐变（默认值） 1 : 使用点，注意：仅离散点构建时生效
     */
    voxelAlphaMode?: number
    /**
     * 三维体素块尺寸，支持仅传入Voxels和VoxelSize参数，则自动计算Bounds和TextureSize
     */
    voxelSize?: number
    /**
     * 纹理尺寸，取值范围：[128~512]，默认：128
     */
    textureSize?: number
    /**
     * 三维体素的颜色卡配置对象，包含颜色渐变控制和颜色区间数组

gradient (boolean) 是否渐变

invalidColor (array) 无效像素点的默认颜色，默认白色

colorStops (array) 色卡数组，包含热力值和对应颜色值，结构示例：[{"value":0, "color":[0,0,1,1]}]
     */
    colors?: { gradient: boolean; invalidColor: [number, number, number, number]; colorStops: { value: number; color: [number, number, number, number] }[] }
    /**
     * 离散热力点的坐标数组，包含热力点坐标、热力值影响半径(或盒子范围)、热力值和不透明度四个属性，结构示例：[{"coordinate": [0,0,0],"radius": 5,"heatValue": 0.5,"alpha": 1}]

coordinate (array) 热力点的坐标位置，示例：[x,y,z]

heatValue (array) 热力值，用于匹配colors参数的colorStops数组内颜色

radius (number) 可选，热力点的半径，当voxelShape=0时生效

extent (array) 可选，热力点的盒子范围，即长方体的长宽高：[xSize,ySize,zSize]，voxelShape=1时生效

alpha (number) 热力点不透明度
     */
    voxels?: { coordinate: number[]; heatValue: number; alpha: number; radius?: number; extent?: number[] }[]
    /**
     * 离散热力点坐标的索引；数组元素类型：(number)；取值示例：[2, 0, 3, 0, 2, 1]，注意：仅在voxelShape=2四面体模式下生效
     */
    indices?: [number, number, number, number, number, number]
    /**
     * 降噪级别，取值范围：[0,1,2,3,4,5]，默认值：0 不做降噪；1~5 五级，值越大降噪越耗时
     */
    denoise?: number
}
