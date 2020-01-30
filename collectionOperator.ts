import {Form} from './forms';

export const getNameOfFigures: (ofForms: Form[]) => String[] =
  (ofForms: Form[]) => 
    ofForms.map(form => form.name);

//Can't get flatmap of es2019 on repl.it and dunno why so...
//export const getTotalPerimeterFlatMap: (ofForms: Form[]) => number =
//  (ofForms: Form[]) => 
//    ofForms
//      .flatMap(form => form.sidesLength)
//      .reduce((a, b) => a+b);

export const getTotalPerimeterNoFlatMap: (ofForms: Form[]) => number =
  (ofForms: Form[]) => 
    ofForms
      .map(form => form.sidesLength.reduce((a, b) => a + b))
      .reduce((a, b) => a+b);

export const onlyFourAngles: (ofForms: Form[]) => String[] =
  (ofForms: Form[]) => 
    getNameOfFigures(
      ofForms
        .filter(form => form.sidesLength.length === 4)
    );

export const getTotalArea: (ofForms: Form[]) => number =
  (ofForms: Form[]) => 
      ofForms
        .reduce((acum, form) => acum + form.area, 0);
