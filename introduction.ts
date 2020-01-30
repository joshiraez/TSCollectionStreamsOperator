import {Form} from './forms';
import {Observable} from 'rxjs';
import {filter, count} from 'rxjs/operators';

export const countCirclesForEach: (ofForms: Iterable<Form>) => number =
    (ofForms: Iterable<Form>) => {
        var circles: number = 0;

        for (var form of ofForms)
            if (form.name === "Circle")
                circles++;

        return circles;
    }

export const countCirclesListOperators: (ofForms: Form[]) => number =
    (ofForms: Form[]) => {
        return ofForms
            .filter(form => form.name === "Circle")
            .length
    }

export const countCirclesStream: (ofForms: Observable<Form>) => Observable<number> =
    (ofForms: Observable<Form>) => {
        return ofForms
            .pipe(
              filter(form => form.name === "Circle"),
              count()
            );
    }
