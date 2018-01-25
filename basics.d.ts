import {Rule, RuleArray, Comparator} from './base'
export declare const opts: Rule<any, any>
export declare const number: Rule<number, number>
export declare const string: Rule<string, string>
export declare const rules: [typeof number, typeof string]
export declare const basics: Comparator
export declare function before (base: Comparator): Comparator
export declare function after (base: Comparator): Comparator
export default basics
