import React, { useState , useEffect } from "react";

function Bmi() {
    const [bmi, setBmi] = useState(0);
    const [category, setCategory] = useState("");
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    const handleChangeWeight = (e) => {
        setWeight(Number(e.target.value));
    };

    const handleChangeHeight = (e) => {
        setHeight(Number(e.target.value));
    };

    const updateBMI = () => {
        if(isNaN(height) || isNaN(weight)) {
            alert("Please enter valid input");
            return false;
        }
        else {
            if (height > 0) {
                const heightInMeters = height / 100;
                const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
                setBmi(calculatedBmi);
    
    
                // BMI category
                if (calculatedBmi < 18.5) {
                    setCategory("Underweight");
                } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
                    setCategory("Normal weight");
                } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
                    setCategory("Overweight");
                } else {
                    setCategory("Obese");
                }
    
    
            } 
            else {
                setCategory(""); 
            }
        }
    };

    useEffect(() => {
        if(bmi > 0 && weight > 0 && height > 0) {
            updateBMI();
        }
        else {
            setBmi(0);
        }
    }, []);
    
    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        updateBMI();
    };

    const handleReset = () => {
        setBmi(0);
        setCategory("");
        setWeight(0);
        setHeight(0);
    };

    return (
        <div className="container">
            <div className="contain">
                <h1>BMI Calculator Using React JS</h1>
                <form>
                    <label htmlFor="weight">Enter your weight in kg:</label>
                    <br />
                    <input
                        type="text"
                        name="weight"
                        id="weight"
                        onChange={handleChangeWeight}
                        value={weight}
                    />
                    <br />
                    <label htmlFor="height">Enter your height in cm:</label>
                    <br />
                    <input
                        type="text"
                        name="height"
                        id="height"
                        onChange={handleChangeHeight}
                        value={height}
                    />
                    <br />
                    <input type="submit" value="Check your BMI" onClick={handleSubmit}/>
                    <input type="button" value="Reset" onClick={handleReset} />
                </form>
                <br />
                <div className="msg">
                    {bmi > 0 && <p>Your BMI is: {bmi}</p>}
                    {category && <p>Category: {category}</p>}
                </div>
            </div>
        </div>
    );
}

export default Bmi;
