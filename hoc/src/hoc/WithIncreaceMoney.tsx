import React from "react";

export interface WithIncreaseMoneyProps {
    money: number;
    increaseMoney: () => void;
}

function WithIncreaseMoney<T>(OriginalComponent: React.ComponentType<T & WithIncreaseMoneyProps>) {

    return function NewComponent(props: T) {

        const [ money, setMoney ] = React.useState<number>(10);
    
        const increaseMoney = () => {
            setMoney((prev) => prev * 2)
        }

        return (
            <OriginalComponent
                {...props}
                money={ money }
                increaseMoney={ increaseMoney }
            />
        )
    }

}

export default WithIncreaseMoney;