import { IBeamOptions } from './options'
import { BaseResult } from './../base/index'
export interface IBeam {
    // TODO 写一行是为了，没有和最新的api同步，避免报错问题
    [key: string]: unknown | any
    /**
     * 添加一个或多个Beam对象
     *
     *```ts
     let o1:IBeamOptions = {
        id: 'beam1',
        coordinates: [[491599.5, 2490045, 11.3046875], [492483.5, 2490050.5, 8.1779689788818359], [492621.1875, 2489262.5, 11.311718940734863], [493609.71875, 2489372.25, -0.071562498807907104],],
        duration: 3,        //光流粒子的生命周期 
        thickness: 3,     //光流线的宽度比例
        interval: 2,       //光流粒子发射间隔
        velocity: 5,        //光流粒子的速度
        color: [0, 1, 0, 0.8]  //光流的颜色
    };    
    await __g.beam.add( o1 );
    ```
     *
     * @param data 添加一个或多个Beam对象
     * @param fn 可选的回调函数
     * @returns
     */
    add: (data: IBeamOptions | IBeamOptions[], fn?: () => void | null) => Promise<BaseResult>

    /**
     * 删除场景中所有的Beam
     *
     * @param fn
     */
    clear(fn?: () => void | null): Promise<BaseResult>

    /**
     * 更新一个或多个Beam对象
     *
     *```ts
     let o1:IBeamOptions = {
        id: 'beam1',
        coordinates: [[491599.5, 2490045, 11.3046875], [492483.5, 2490050.5, 8.1779689788818359], [492621.1875, 2489262.5, 11.311718940734863], [493609.71875, 2489372.25, -0.071562498807907104],],
        duration: 3,        //光流粒子的生命周期 
        thickness: 3,     //光流线的宽度比例
        interval: 2,       //光流粒子发射间隔
        velocity: 5,        //光流粒子的速度
        color: [0, 1, 0, 0.8]  //光流的颜色
    };    
    await __g.beam.update( o1 );
    ```
     *
     * @param data 添加一个或多个Beam对象
     * @param fn 可选的回调函数
     * @returns
     */
    update(data: IBeamOptions | IBeamOptions[], fn?: () => void | null): Promise<BaseResult>
}
