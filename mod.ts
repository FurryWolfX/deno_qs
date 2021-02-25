import { IParseOptions, IStringifyOptions, ParsedQs } from "./qs.d.ts";
import _qs from "https://jspm.dev/qs@6.9.6";

interface QueryString {
  stringify(obj: any, options?: IStringifyOptions): string;
  parse(str: string, options?: IParseOptions & { decoder?: never }): ParsedQs;
  parse(str: string, options?: IParseOptions): { [key: string]: unknown };
}

const qs = _qs as QueryString;
export { qs };
