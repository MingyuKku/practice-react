import React from 'react'
import WithIncreaseMoney, { WithIncreaseMoneyProps } from '../hoc/WithIncreaceMoney';

const Person1 = ({
    money,
    increaseMoney
}: WithIncreaseMoneyProps) => {

    return (
        <div>
            <p>내 금액은 { money }원 이정보네!</p>
            <button onClick={ increaseMoney }>가격을 올려!</button>
        </div>
    )
}

export default WithIncreaseMoney(Person1);