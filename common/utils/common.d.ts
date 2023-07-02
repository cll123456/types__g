/**
 * common object type
 */
export type CommonObject = {
    [key: string]: unknown | any
}

/**
 * 颜色的类型
 * //常量颜色 
    var constColor = Color.Red;

    //RGB颜色
    var rgbColor = 'RGB(255,255,255)';

    //16进制颜色
    var hexColor =  '#FFFEEE';

    //数组颜色 支持透明度设置
    var colorArr = [0.5,0.5,0.5,1];
 */
export type EColor = string | [number, number, number, number]
