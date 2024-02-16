import React from 'react'

interface Props {
    name: string;
    size: number;
    className: string;
}

const Chidren2 = ({
    // name,
    // children,
    ...props
}: React.PropsWithChildren<Props>) => {

    console.log('props2', props)
    
    
    return (
        <div>
            <h3>자식2</h3>
            { props.children }
        </div>
    )
}

export default Chidren2;