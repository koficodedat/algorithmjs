import { arraySum } from '../src/util/arraySum';
import { average } from '../src/util/average';
import { compare } from '../src/util/compare';
import { inversions } from '../src/util/inversions';
import { isSorted } from '../src/util/isSorted';
import { knuthShuffle } from '../src/util/knuthShuffle';
import { randSeq } from '../src/util/randSeq';
import { swapInArray } from '../src/util/swapInArray';
import { uniform } from '../src/util/uniform';
import {arrayMin} from "../src/util/arrayMin";
import {arrayMax} from "../src/util/arrayMax";
import {arrayProduct} from "../src/util/arrayProduct";
import {round} from "../src/util/round";
import {isNeutral} from "../src/util/isNeutral";
import {isPositive} from "../src/util/isPositive";
import {isNegative} from "../src/util/isNegative";

export namespace Utility{

    _arraySum = arraySum;
    _arrayMin = arrayMin;
    _arrayMax = arrayMax;
    _arrayProduct = arrayProduct;
    _average = average;
    _compare = compare;
    _inversions = inversions;
    _isSorted = isSorted;
    _isNeutral = isNeutral;
    _isPositive = isPositive;
    _isNegative = isNegative;
    _knuthShuffle = knuthShuffle;
    _randSeq = randSeq;
    _swapInArray = swapInArray;
    _uniform = uniform;
    _round = round;

    export declare let _arraySum;
    export declare let _arrayMin;
    export declare let _arrayMax;
    export declare let _arrayProduct;
    export declare let _average;
    export declare let _compare;
    export declare let _inversions;
    export declare let _isSorted;
    export declare let _isNeutral;
    export declare let _isPositive;
    export declare let _isNegative;
    export declare let _knuthShuffle;
    export declare let _randSeq;
    export declare let _swapInArray;
    export declare let _uniform;
    export declare let _round;
}