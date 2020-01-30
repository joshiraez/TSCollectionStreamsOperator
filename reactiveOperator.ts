import {Form} from './forms';
import {Observable} from 'rxjs';
import {map, flatMap, filter, reduce} from 'rxjs/operators';

export const getNameOfFiguresrx: (ofForms: Observable<Form>) => Observable<string> =
  (ofForms: Observable<Form>) => 
    ofForms.pipe(
      map(form => form.name)
    );

export const getTotalPerimeterFlatMaprx: (ofForms: Observable<Form>) => Observable<number> =
  (ofForms: Observable<Form>) => 
    ofForms.pipe(
      flatMap(form => form.sidesLength),
      reduce((a,b) => a+b)
    );

export const getTotalPerimeterNoFlatMaprx: (ofForms: Observable<Form>) => Observable<number> =
  (ofForms: Observable<Form>) => 
    ofForms.pipe(
      map(form => form.sidesLength.reduce((a,b) => a + b)),
      reduce((a,b) => a+b)
    );

export const onlyFourAnglesrx: (ofForms: Observable<Form>) => Observable<string> =
  (ofForms: Observable<Form>) => 
      ofForms.pipe(
        filter(form => form.sidesLength.length === 4),
        getNameOfFiguresrx
      );

export const getTotalArearx: (ofForms: Observable<Form>) => Observable<number> =
  (ofForms: Observable<Form>) => 
      ofForms.pipe(
        reduce((acum, form) => acum + form.area, 0)
      );
