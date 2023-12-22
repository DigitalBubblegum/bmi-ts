const calculateBmi = (h:number,w:number)=> {
    const value = (w /((h*0.01)*(h*0.01)))
    if (value < 16.0) {
        console.log("Underweight (Severe thinness)");
    }
    else if (value >= 16.0 && value <= 16.9) {
        console.log("Underweight (Moderate thinness)");
    }
    else if (value >= 17.0 && value <= 18.4) {
        console.log("Underweight (Mild thinness)");
    }
    else if (value >= 18.5 && value <= 24.9) {
        console.log("Normal range");
    }
    else if (value >= 25.0 && value <= 29.9) {
        console.log("Overweight (Pre-obese)");
    }
    else if (value >= 30.0 && value <= 34.9) {
        console.log("Obese (Class I)");
    }
    else if (value >= 35.0 && value <= 39.9) {
        console.log("Obese (Class II)");
    }
    else if (value >= 40.0) {
        console.log("Obese (Class III)");
    }
}

const h: number = Number(process.argv[2])
const v: number = Number(process.argv[3])
calculateBmi(h,v)