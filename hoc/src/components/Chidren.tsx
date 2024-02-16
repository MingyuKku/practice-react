import React from 'react'

interface Props {
    name: string;
    size: number;
    className: string;
    // children: React.ReactNode;
}

const Chidren = ({
    // children,
    className,
    ...props
}:Props & { children: React.ReactNode; }) => {

    console.log('props1들', props)
    return (
        <div>
            <h3>자식1 컴포넌트</h3>
            <button className={ className }>버튼!</button>
            { props.children }
        </div>
    )
}

export default Chidren;