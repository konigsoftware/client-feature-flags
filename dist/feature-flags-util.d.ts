/// <reference types="node" />
import { ParsedUrlQuery } from "querystring";
export declare function isFeatureFlagEnabled(key: string): boolean;
export declare function parseQueryParamsToFlags(query: ParsedUrlQuery): void;
