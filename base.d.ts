import {ResultContainer} from './utils'

declare type PairChecker<A, B> = (a: A, b: B) => boolean
declare type Operator<A, B> = (a: A, b: B, compare: CombinedOperator) => ComparasionResult
declare type ComparisionResultContainer = ResultContainer<number>
export declare type TakeCondition<A, B> = PairChecker<A, B>
export declare type UnitOperator<A, B> = Operator<A, B>
export declare type CombinedOperator = Operator<any, any>
export declare type ComparasionResult = ComparisionResultContainer | null
export declare type RuleArray = Rule<any, any>[]

export declare type Rule<A, B> = {
  shouldTake: TakeCondition<A, B>,
  compare: UnitOperator<A, B>
}

export declare class Comparator {
  public constructor (rules: RuleArray)
  public static create (): Comparator
  public prepend<A, B> (shouldTake: TakeCondition<A, B>, compare: UnitOperator<A, B>): Comparator
  public append<A, B> (shouldTake: TakeCondition<A, B>, compare: UnitOperator<A, B>): Comparator
  public readonly compare: CombinedOperator
  public getRules (): RuleArray
}

export declare function createComparator (): Comparator
