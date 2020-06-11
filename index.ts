/**
 * @file: 3D仓库标准静态数据格式
 * @inspire: 3d-tiles
 *
 * 仓库
 * https://github.com/CesiumGS/3d-tiles
 * 概览
 * https://github.com/CesiumGS/3d-tiles/blob/master/3d-tiles-overview.pdf
 * 示例
 * https://github.com/CesiumGS/3d-tiles/blob/master/examples/tileset.json
 * 概念
 * https://github.com/CesiumGS/3d-tiles/tree/master/specification#property-reference
 */


// 框
type Box = [
    number, number, number, // 框中心的x,y,z
    number, number, number, // x轴方向（两个值）和半长
    number, number, number, // y轴方向（两个值）和半长
    number, number, number  // z轴方向（两个值）和半长
];
// 球体, 定义球体中心点位置和半径长度，[x, y, z, 半径]
type Sphere = [number, number, number, number];

/**
 * 约定
 * 坐标系和旋转：左手坐标系
 * 线性距离单位：mm
 * 角度单位：弧度
 */

export type WarehouseTiles = {
    asset: Asset;
    // A dictionary object of metadata about per-feature properties
    properties: any;
    // A tile in a 3D Tiles tileset
    root: Tile;
}

export type Tile = {
    boundingVolume: BoundingVolume;
    content: Content;
    /*
     * 子元素集合
     * 定义子图块的对象数组。每个子图块内容均被其父图块的边界体积完全包围
     * 对于叶图块，此数组的长度为零，并且可能未定义子级。
     */
    children: any[];
    extra: Extra;
}

/**
 *  Metadata about the entire data set
 */
export type Asset = {
    version: string;
};

/**
 *  边界体积
 *  包围图块或其内容的包围盒。恰好需要一个box，region或sphere属性。
 */
export type BoundingVolume = {
    box?: Box;
    sphere?: Sphere;
}

/**
 * 内容
 * 有关图块内容和该内容链接的元数据。
 */
export type Content = {
    boundingVolume: BoundingVolume;
    uri: string;
}

/**
 * 额外数据
 * 特定于应用程序的数据
 */
export type Extra = any;
