export const calculateBmi = (h:number,w:number):string => {
    const value = (w /((h*0.01)*(h*0.01)));
    let result = 'invalid';
    if (value < 16.0) {
        result = "Underweight (Severe thinness)";
    }
    else if (value >= 16.0 && value <= 16.9) {
        result = "Underweight (Moderate thinness)";
    }
    else if (value >= 17.0 && value <= 18.4) {
        result = "Underweight (Mild thinness)";
    }
    else if (value >= 18.5 && value <= 24.9) {
        result = "Normal range";
    }
    else if (value >= 25.0 && value <= 29.9) {
        result = "Overweight (Pre-obese)";
    }
    else if (value >= 30.0 && value <= 34.9) {
        result = "Obese (Class I)";
    }
    else if (value >= 35.0 && value <= 39.9) {
        result = "Obese (Class II)";
    }
    else if (value >= 40.0) {
        result = "Obese (Class III)";
    }

    return result;
};

const h: number = Number(process.argv[2]);
const v: number = Number(process.argv[3]);
console.log(calculateBmi(h,v));