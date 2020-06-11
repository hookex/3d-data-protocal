/**
 * 实例化2D图片
 *
 * Inspired By
 * https://github.com/CesiumGS/3d-tiles/tree/96e53939e8b587e5c3d748fda5bb9008af47852a/specification/TileFormats/Instanced3DModel
 */
import {ID, Scale} from "../baseTypes";
import {FeatureTable} from "../featureTable";
import {BatchTable} from "../batchTable";

export type InstancedImage = {
    header: {};
    body: {
        featureTable: InstancedImageFeatureTable;
        batchTable: any;
        // gltf url
        url: string;
    };
}

export type InstancedImageFeatureTable = {
    header: {
        instancesLength: number;
    },
    body: {
        position: number[];
        scale: number[];
    }
} & FeatureTable;


export type InstancedImageBatchedTable = {
    header: {

    },
    body: {

    }
} & BatchTable;
