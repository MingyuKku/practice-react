import React from 'react'

interface Props {
    name: string;
    size: number;
    className: string;
    children: React.ReactNode;
}

const Chidren3:React.FC<Props> = ({
    // children,
    ...props
}) => {

    console.log('props3', props)
    return (
        <div>
            <h3>자식3</h3>
            { props.children }
        </div>
    )
}

export default Chidren3