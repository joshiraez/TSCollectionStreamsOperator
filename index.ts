import {
  Form,
  SQUARE,
  RECTANGLE,
  CIRCLE,
  TRIANGLE
} from "./forms";
import {
  countCirclesForEach,
  countCirclesListOperators,
  countCirclesStream
} from './introduction';
import {
  getNameOfFigures,
//  getTotalPerimeterFlatMap,
  getTotalPerimeterNoFlatMap,
  onlyFourAngles,
  getTotalArea,
} from './collectionOperator';
import {
  getNameOfFiguresrx,
  getTotalPerimeterFlatMaprx,
  getTotalPerimeterNoFlatMaprx,
  onlyFourAnglesrx,
  getTotalArearx,
} from './reactiveOperator';

import {from, Observable} from 'rxjs';

const someForms : Form[] = [
    SQUARE,
    RECTANGLE,
    CIRCLE,
    CIRCLE,
    RECTANGLE,
    TRIANGLE,
    SQUARE
];

const someFormsStream : Observable<Form> = from(someForms);

console.log("-- Introduction --");

console.log('Count Circles Using For Each');
console.log(countCirclesForEach(someForms));

console.log('CountCirclesUsingListOperators');
console.log(countCirclesListOperators(someForms));

console.log('countCirclesUsingReactiveStreams');
countCirclesStream(someFormsStream).subscribe( result => console.log(result));

console.log('')
console.log("-- Collection operators --");

console.log('Example of map: get names of figures')
console.log(getNameOfFigures(someForms));

console.log('Example of flatMap: get total perimeter')
//console.log(getTotalPerimeterFlatMap(someForms)); Can't find flatMap in esnext
console.log(getTotalPerimeterNoFlatMap(someForms));

console.log('Example of filter: get forms with only four angles')
console.log(onlyFourAngles(someForms));

console.log('Example of reduce: get total area')
console.log(getTotalArea(someForms));

console.log('')
console.log("-- Reactive operators --");

console.log('Example of map: get names of figures')
getNameOfFiguresrx(someFormsStream).subscribe(result => console.log(result));

console.log('Example of flatMap: get total perimeter')
getTotalPerimeterFlatMaprx(someFormsStream).subscribe(result => console.log(result));
getTotalPerimeterNoFlatMaprx(someFormsStream).subscribe(result => console.log(result));

console.log('Example of filter: get forms with only four angles')
onlyFourAnglesrx(someFormsStream).subscribe(result => console.log(result));

console.log('Example of reduce: get total area')
getTotalArearx(someFormsStream).subscribe(result => console.log(result));
