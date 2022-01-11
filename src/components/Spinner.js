import React from 'react';
import Spinner from  './Spinner.gif'

export default function spinner() {
    return (
        <div className='text-center'>
        <img src={Spinner} title='load' alt="....." width="50" height="50"/>
        </div>
    )
}
