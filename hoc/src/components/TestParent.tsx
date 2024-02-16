import React from 'react'
import Chidren from './components/../Chidren';
import Chidren2 from './components/../Chidren2';
import Chidren3 from './components/../Chidren3';

const TestParent = () => {
  return (
    <div>
        <Chidren
            name='자식'
            size={ 22 }
            className='red'
        >
            <p>자식1의 태그</p>
        </Chidren>
        <Chidren2 
            name='자식2'
            size={ 22 }
            className='red'
        >
            {/* <p>자식2의 태그</p> */}
        </Chidren2>
        <Chidren3
            name='자식2'
            size={ 22 }
            className='red'
        >
            <p>자식3의 태그</p>
        </Chidren3>
    </div>
  )
}

export default TestParent