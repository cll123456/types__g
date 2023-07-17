import { IHeatMap3DOptions } from './options'
import { BaseResult } from '../base/index'
export interface IHeatmap3d {
    // TODO 写一行是为了，没有和最新的api同步，避免报错问题
    [key: string]: unknown | any
    /**
     * 添加HeatMap3D，注意：此对象有以下三种类型添加方式

1、根据16张空间图片构建

2、根据离散点和对应的热力值构建，支持四类效果【0是体积雾效果, 1是体素效果 , 2是盒子效果，3是贴花效果】

3、根据纯热力值构建
     * 
     *```ts
    //构造16张图片
    let imagePathArr = [];
    for (let i = 0; i < 16; i++) {
        let imageName = "LAY" + i + ".png";
        let imagePath = HostConfig.Path + "/media/heatmap3d/" + imageName;
        imagePathArr.push(imagePath);
    }
    let heatmap3d = {
        id: "heatmap3d_byImages", //对象唯一id
        imagesArray: imagePathArr,//16张1024*1024的空间热力图图片的路径，空间位置从低到高
        volumeBoxLocation: [491616.6875, 2488984.75, 14.832968711853027], //三维热力图坐标位置
        volumeBoxRotation: [0, 0, 0], //三维热力图坐标旋转
        volumeBoxSize: [100, 100, 100], //三维热力图盒范围
        clipBox: [20, 20, 20, 80, 80, 80],//剖切盒子范围 注意：仅对displayMode=2盒子模式下生效
        brightness: 10, // 亮度，取值范围：[0~100] ，值等于0则完全透明，值越大越不透明
        displayMode: 1 //显示模式 0是体积雾效果, 1是体素效果 , 2是盒子效果
    };
    await __g.heatmap3d.add(heatmap3d);
    ```
     *
     * @param data HeatMap3D对象或数组
     * @param fn 可选的回调函数
     */
    add: (data: IHeatMap3DOptions | IHeatMap3DOptions[], fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 动态往HeatMap3D对象内添加三维体素块
     *
     * @param data Voxel对象或对象数组，对于每个对象，支持以下属性：

id (string) 字符串类型的ID

voxels (array) 体素对象坐标数组，包含热力点坐标、热力值影响半径（或盒子范围）、热力值和不透明度四个属性，结构示例：[{"coordinate": [0,0,0],"radius": 5,"heatValue": 0.5,"alpha": 1}]
     * @param fn 可选的回调函数
     * @returns
     */
    addVoxels: (data: { id: string; voxels: { coordinate: number[]; radius: number; heatValue: number; alpha: number }[] }[], fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 清空场景中所有的HeatMap3D
     *
     * @param fn 可选的回调函数
     * @returns
     */
    clear: (fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 删除一个或多个HeatMap3D对象
     *
     * @param ids 要删除的HeatMap3D对象的ID或者ID数组（可以删除一个或者多个）
     * @param fn 可选的回调函数
     * @returns
     */
    delete: (ids: string | string[], fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 自动定位到合适的观察距离
     *
     * @param ids HeatMap3D对象的ID或者ID数组
     * @param distance 可选参数，观察点距离目标点（被拍摄物体）的距离，取值范围：[0.01~任意正数]，如果设置为0或者不设置，系统自动计算
     * @param flyTime 可选参数，相机飞行的时间，取值范围：[0~任意正数]，单位：秒，默认值2秒
     * @param rotation 可选参数，相机旋转的欧拉角：[Pitch,Yaw,Roll]，数组元素类型：(number)，取值范围：Pitch[-90~90] Yaw[-180~180] Roll[0]
     * @param fn 可选的回调函数
     * @returns
     */
    focus: (ids: string | string[], distance?: number, flyTime?: number, rotation?: number[], fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 根据ID获取HeatMap3D的详细信息
     *
     * @param ids 要获取的HeatMap3D对象ID或者ID数组（可以获取一个或者多个）
     * @param fn 可选的回调函数
     * @returns
     */
    get: (ids: string | string[], fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 隐藏HeatMap3D
     *
     * @param ids HeatMap3D对象的ID或者ID数组
     * @param fn 可选的回调函数
     * @returns
     */
    hide: (ids: string | string[], fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 设置三维热力图的显示模式
     *
     * @param id HeatMap3D的ID
     * @param displayMode 显示模式，取值范围：0是VolumeFog,1是InstanceMesh,2是Box
     * @param fn 可选的回调函数
     * @returns
     */
    setDisplayMode: (id: string, displayMode: number, fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 显示HeatMap3D
     *
     * @param ids HeatMap3D对象的ID或者ID数组
     * @param fn 可选的回调函数
     * @returns
     */
    show: (ids: string | string[], fn?: (() => void) | null) => Promise<BaseResult>

    /**
     * 修改HeatMap3D
     *
     * @param data HeatMap3D对象或数组，参考add方法
     * @param fn 可选的回调函数
     * @returns
     */
    update: (data: IHeatMap3DOptions | IHeatMap3DOptions[], fn?: (() => void) | null) => Promise<BaseResult>
}
