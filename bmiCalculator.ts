const calculateBmi = (h:number,w:number):string => {
    const value = (w /((h*0.01)*(h*0.01)))
    if (value < 16.0) {
        return "Underweight (Severe thinness)"
    }
    else if (value >= 16.0 && value <= 16.9) {
        return "Underweight (Moderate thinness)	"
    }
    else if (value >= 17.0 && value <= 18.4) {
        return "Underweight (Mild thinness)"
    }
    else if (value >= 18.5 && value <= 24.9) {
        return "Normal range"
    }
    else if (value >= 25.0 && value <= 29.9) {
        return "Overweight (Pre-obese)"
    }
    else if (value >= 30.0 && value <= 34.9) {
        return "Obese (Class I)"
    }
    else if (value >= 35.0 && value <= 39.9) {
        return "Obese (Class II)"
    }
    else if (value >= 40.0) {
        return "Obese (Class III)"
    }
}

console.log(calculateBmi(180, 74))