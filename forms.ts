export interface Form {
    name: string
    sidesLength: number[],
    area: number,
};

const enum Forms {
    SQUARE,
    RECTANGLE,
    CIRCLE,
    TRIANGLE
};

const FormsData: Record<Forms, Form> = {
    [Forms.SQUARE]: {
        name: "Square",
        sidesLength: [1, 1, 1, 1],
        area: 1
    },
    [Forms.RECTANGLE]: {
        name: "Rectangle",
        sidesLength: [2, 0.5, 2, 0.5],
        area: 1
    },
    [Forms.CIRCLE]: {
        name: "Circle",
        sidesLength: [0.079],
        area: 1
    },
    [Forms.TRIANGLE]: {
        name: "Triangle",
        sidesLength: [1, 0.5, 0.5],
        area: 1
    }
};

export const SQUARE: Form = FormsData[Forms.SQUARE];
export const RECTANGLE: Form = FormsData[Forms.RECTANGLE];
export const CIRCLE: Form = FormsData[Forms.CIRCLE];
export const TRIANGLE: Form = FormsData[Forms.TRIANGLE];
