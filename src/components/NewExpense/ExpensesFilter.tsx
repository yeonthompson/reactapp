import React, { SyntheticEvent } from 'react';

import './ExpensesFilter.css';

interface Props {
    onFilterSelect: (selectedYear: string) => void;
    year: string;
}

const ExpensesFilter = (props: Props) => {
    const selectHandler = (e: SyntheticEvent) => {
        const year = ((e.target as HTMLInputElement).value);
        props.onFilterSelect(year);
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.year} onChange={selectHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;