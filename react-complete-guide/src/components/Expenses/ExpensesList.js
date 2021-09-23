/* eslint-disable no-lone-blocks */
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {

    if (props.expenses.length === 0){
        return (
            <h2 className="expenses-list__fallback">
                Found no expenses.
            </h2>
        )
    }
    return (
    <ul className="expenses-list">
        {
            props.expenses.map((expense) => (
                <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                />
                ))
        };
    </ul>
    )
}

export default ExpensesList;





{/* Modo ternário 1 - 2 frases */}
        // eslint-disable-next-line no-lone-blocks
        {/* {filteredExpenses.length === 0 && <p>No expenses found. </p>}
        {filteredExpenses.length > 0 && 
          filteredExpenses.map(expense => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />))
        } */}

        {/* Modo ternário 2 - completão */}
        {/* {filteredExpenses.length === 0 ? (
          <p>No expenses found. </p>
        ) : (
          filteredExpenses.map(expense => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />))
        )} */}