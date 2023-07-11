import { IPolylineOptions } from './options'
import { BaseResult } from './../base/index'
import { EColor, EPolylineStyle } from 'common/utils/common'

export interface IPolyline {
    // TODO 写一行是为了，没有和最新的api同步，避免报错问题
    [key: string]: unknown | any
}
