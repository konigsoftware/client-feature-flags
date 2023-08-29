import { ParsedUrlQuery } from "querystring";
import { clearItem, getItem, setItem } from "./local-storage";
import { FeatureFlags } from "./flags";

const flags = Object.values(FeatureFlags) as string[];

export function isFeatureFlagEnabled(key: string): boolean {
  return getItem(key) === "true";
}

export function parseQueryParamsToFlags(query: ParsedUrlQuery) {
  for (const [key, value] of Object.entries(query)) {
    if (flags.includes(key)) {
      switch (value) {
        case "true":
          setItem(key, value);
          break;
        case "false":
          clearItem(key);
          break;
        default:
          break;
      }
    }
  }
}
