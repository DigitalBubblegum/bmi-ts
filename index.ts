import express from 'express';
import bodyParser from 'body-parser';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises,InputArray } from './exerciseCalculator';
const app = express();
app.get('/hello',(_req,res)=>{
    res.send('Hello Full Stack!');
});

app.get(`/bmi`,(req,res)=>{
    const userObj = req.query;
    if (!userObj.height || !userObj.weight || isNaN(Number(userObj.height)) || isNaN(Number(userObj.weight)) ) {
        res.status(400).json({error: "Malformatted inputs"});
        throw new Error("Malformatted inputs");
    }
    const height:number = Number(userObj.height);
    const weight:number = Number(userObj.weight);
    console.log(height,weight);
    const userRes = {
        height: height,
        weight: weight,
        bmi: calculateBmi(height,weight)
    };
    res.send(userRes);
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.post('/exercise',(req,res) => {
    try{
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
        const request :any = req.body;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
        const dailyXhours:InputArray = (request.daily_exercises);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const target = Number(request.target);
        if (dailyXhours === undefined||target===undefined||dailyXhours === null||target===null||!target) {
            throw new Error("Malformatted parameters");
            
        }
        console.log({dailyXhours,target});
        const result = calculateExercises(dailyXhours , target);
        return res.send(result);
    }catch(error: unknown){
        const errorMessage = "malformatted parameters or parameters missing";
        return res.json({error: errorMessage});

    }
});

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});
