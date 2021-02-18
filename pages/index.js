import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
    const [expenseValue, setExpenseValue] = useState('')
    const [expensesList, setExpensesList] = useState([])

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            addValueToExpensesList(expenseValue)
        }
    }

    const addValueToExpensesList = () => {
        const newList = [...expensesList]
        newList.push(expenseValue)
        setExpensesList(newList)
        setExpenseValue('')
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Finances</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>How much have you spent?</h1>
                <input
                    name="expenseValue"
                    className={styles.input}
                    placeholder="$$$$"
                    value={expenseValue}
					type="number"
                    onChange={(e) => setExpenseValue(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e)}
                />

                <div className="styles.expensesList">
                    {expensesList.map((expense, index) => (
                        <p key={index}>{expense}</p>
                    ))}
                </div>
            </main>

            <footer className={styles.footer}></footer>
        </div>
    )
}
