import ExpenseDate from './ExpenseDate';
import ExpensesInterface from '../../interfaces/ExpensesInterface';
import Card from '../UI/Card';
import { useState } from 'react';

import './ExpenseItem.css';


const ExpenseItem = (props: ExpensesInterface) => {
    const [title, setTitle] = useState(props.title);


    const clickHandler = () => {
        setTitle("updated");
        console.log("Clicked!");
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;

