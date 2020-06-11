/**
 * 实例化3D模型
 *
 * Inspired By
 * https://github.com/CesiumGS/3d-tiles/tree/96e53939e8b587e5c3d748fda5bb9008af47852a/specification/TileFormats/Instanced3DModel
 */
import {ID, Scale} from "../baseTypes";
import {FeatureTable} from "../featureTable";
import {BatchTable} from "../batchTable";

export type Instanced3DModel = {
    header: {};
    body: {
        featureTable: Instanced3DModelFeatureTable;
        batchTable: any;
        // gltf url
        url: string;
    };
}

export type Instanced3DModelFeatureTable = {
    header: {
        instancesLength: number;
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
