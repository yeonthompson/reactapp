import ExpenseForm from "./ExpenseForm";
import EnteredExpenseDataInterface from "../../interfaces/EnteredExpenseDataInterface";
import "./NewExpense.css";
import ExpenseDataInterface from "../../interfaces/ExpenseDataInterface";

interface Props {
    onAddExpense: (expenseData: ExpenseDataInterface) => void;
};

const NewExpense = (props: Props) => {
    const saveExpenseDataHandler = (enteredExpenseData: EnteredExpenseDataInterface) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;