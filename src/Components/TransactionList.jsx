import React from "react";

// SCSS
import "../Styles/TransactionList.scss";

// ICON
import { BsDot } from "react-icons/bs";

const TransactionList = ({ user }) => {

    return (
        <div className='TransactionList'>

            <div className='transaction-info'>

                <div className='user-image'>
                    <img src={user.dp} alt={user.name} />
                </div>

                <div className='user-data' >

                    <p className='user-name'>{user.name}</p>

                    <div>
                        <p>{user.date}</p>
                        <BsDot />
                        <p>{user.time}</p>
                    </div>

                </div>

            </div>

            <div className='profile-transaction'>

                <p className={`transaction-amount 
                ${user.transactionType === "Received" ? "green" : "red"}`}>

                    <p>{user.transactionType === "Received" ? "+" : "-"}</p>
                    <p>{user.amount}</p>

                </p>

                <p>{user.transactionType}</p>

            </div>

        </div>
    )
}

export default TransactionList;