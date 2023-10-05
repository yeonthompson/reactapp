import { SyntheticEvent, useState } from "react";
import EnteredExpenseDataInterface from "../../interfaces/EnteredExpenseDataInterface";
import "./ExpenseForm.css";

interface Props {
    onSaveExpenseData: (expenseData: EnteredExpenseDataInterface) => void;
};

const ExpenseForm = (props: Props) => {
    const [enteredTitle, setEnteredTitle] = useState("");

    const titleChangeHandler = (e: SyntheticEvent) => {
        setEnteredTitle((e.target as HTMLInputElement).value);
    }

    const [enteredAmount, setEnteredAmount] = useState("" as unknown as number);

    const amountChangeHandler = (e: SyntheticEvent) => {
        setEnteredAmount((e.target as HTMLInputElement).value as unknown as number);
    }

    const [enteredDate, setEnteredDate] = useState("");

    const dateChangeHandler = (e: SyntheticEvent) => {
        setEnteredDate((e.target as HTMLInputElement).value);
    }

    /* alternative way for state to be set (using one state instead of multiple)

    const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
    });

    const titleChangeHandler = (e: SyntheticEvent) => {
        setUserInput((prevState) => {
            return {...prevState, enteredTitle: (e.target as HTMLInputElement).value};
        });
    }

    const amountChangeHandler = (e: SyntheticEvent) => {
        setUserInput((prevState) => {
            return {...prevState, enteredAmount: (e.target as HTMLInputElement).value};
        });
    }

    const dateChangeHandler = (e: SyntheticEvent) => {
        setUserInput((prevState) => {
            return {...prevState, enteredDate: (e.target as HTMLInputElement).value};
        });
    }

    */

    const submitHandler = (e: SyntheticEvent) => {
        e.preventDefault();
        
        const expenseData: EnteredExpenseDataInterface = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);

        setEnteredTitle("");
        setEnteredAmount("" as unknown as number);
        setEnteredDate("");
    }
    
    return ( 
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min={0.01} step={0.01} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min={"2019-01-01"} max={"2022-12-31"} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;