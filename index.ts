import express from 'express';
import { calculateBmi } from './bmiCalculator';
// import { calculateBmi } from './bmiCalculator';
const app = express();
app.get('/hello',(_req,res)=>{
    res.send('Hello Full Stack!')
})

app.get(`/bmi`,(req,res)=>{
    const userObj = req.query
    const height:number = Number(userObj.height);
    const weight:number = Number(userObj.weight); 
    console.log(height,weight)
    const userRes = {
        height: height,
        weight: weight,
        bmi: calculateBmi(height,weight)
    }
    res.send(userRes)
})

const PORT = 3000

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})
