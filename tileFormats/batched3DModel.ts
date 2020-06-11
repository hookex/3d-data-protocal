/**
 * 批处理3D模型
 *
 * Inspired By
 * https://github.com/CesiumGS/3d-tiles/tree/96e53939e8b587e5c3d748fda5bb9008af47852a/specification/TileFormats/Instanced3DModel
 */
import {FeatureTable} from "../featureTable";
import {BatchTable} from "../batchTable";

export type Batched3DModel = {
    header: {};
    body: {
        featureTable: Batched3DModelFeatureTable;
        batchTable: any;
        // gltf url
        url: string;
    };
}

export type Batched3DModelFeatureTable = {
    header: {
        batchLength: number;
    },
    body: {
        position: number[];
        scale: number[];
    }
} & FeatureTable;


export type Instanced3DModelBatchedTable = {
    header: {

    },
    body: {

    }
} & BatchTable;
