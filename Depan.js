import React from 'react'
import Counter from './Counter'
import { Provider }  from 'react-redux'
import storeState from './redux/store'


const Depan = () => {
    return(
        <Provider store={storeState}>
            <Counter/>
        </Provider>
    )
}

export default Depan