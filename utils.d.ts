import {TakeCondition} from './base'

export declare type ResultContainer<X> = {result: X}
export declare type ComparisionResultContainer = ResultContainer<number>
export declare function ret<Result> (result: Result): ResultContainer<Result>
export declare function createShouldTakeByType (t: any): TakeCondition<any, any>
