interface result {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}
const calculateExercises = (dayXhours:number[],target:number):result => {
    const periodLength = dayXhours.length;
    const average = dayXhours.reduce((acc,curr)=>{
        return acc + curr
    },0)/dayXhours.length
    const trainingDays = dayXhours.filter(d => d!==0).length
    const success = average >= target ? true:false
    let rating = null
    let ratingDescription = null
    if (average > target) {
        rating = 3
        ratingDescription = 'Excellent Job'
    }
    else if(average == target){
        rating = 2
        ratingDescription = 'Good Job'
    }
    else if (average < target) {
        rating = 1
        ratingDescription = 'be better'
    }
    return {
        periodLength: periodLength,
        trainingDays: trainingDays,
        success: success,
        rating: rating,
        ratingDescription: ratingDescription,
        target: target,
        average: average
    }
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1],2))
console.log(calculateExercises([3, 3, 3, 3, 3, 3, 3],2))