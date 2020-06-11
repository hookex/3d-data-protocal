/**
 * 点
 *
 * Inspired By
 * https://github.com/CesiumGS/3d-tiles/tree/96e53939e8b587e5c3d748fda5bb9008af47852a/specification/TileFormats/Instanced3DModel
 */
import {ID, Scale} from "../baseTypes";
import {FeatureTable} from "../featureTable";
import {BatchTable} from "../batchTable";

export type Points = {
    header: {};
    body: {
        featureTable: InstancedPointsFeatureTable;
        batchTable: any;
        // gltf url
        url: string;
    };
}

export type InstancedPointsFeatureTable = {
    header: {
        instancesLength: number;
    },
    body: {
        position: number[];
        scale: number[];
    }
} & FeatureTable;


export type InstancedPointsBatchedTable = {
    header: {

    },
    body: {

    }
} & BatchTable;
