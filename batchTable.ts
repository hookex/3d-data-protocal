
/**
 * 批处理表
 * 包含由组成的元数据ID，可用于声明式样式
 *
 * Inspired By
 * https://github.com/CesiumGS/3d-tiles/blob/96e53939e8b587e5c3d748fda5bb9008af47852a/specification/TileFormats/BatchTable/README.md#layout
 */

import {ID, Name} from "./baseTypes";

export type BatchTable = {
    header: {
        id: ID[];
        displayName: Name[];
    },
    body: {

    }
}
