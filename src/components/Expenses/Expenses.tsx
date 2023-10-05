import ExpenseItem from './ExpenseItem';
import ExpensesInterface from '../../interfaces/ExpensesInterface';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from '../NewExpense/ExpensesFilter';
import { useState } from 'react';

interface Props {
    items: ExpensesInterface[];
    children?: React.ReactNode;
    className?: string;
}

const Expenses = (props: Props) => {
    const [filteredYear, setFilteredYear] = useState("2019");


    const filterChangeHandler = (selectedYear: string) => {
        setFilteredYear(selectedYear);
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter year={filteredYear} onFilterSelect={filterChangeHandler}/>
            {props.items.map((expense) => 
                (<ExpenseItem 
                    key={expense.id}
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date}
                    />)
                )}
        </Card>
    );
}

export default Expenses;