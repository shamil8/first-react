import React, { useState } from "react"
import PropTypes from 'prop-types'

const styles = {
   input: {
       marginBottom: '15px',
       height: '28px'
   },

   button: {
       marginLeft: '10px',
       height: '34px',
       border: '1px solid #ffcc33',
       borderRadius: '5px',
       backgroundColor: 'blue',
       color: '#fff',
       outline: 'none',
       fontSize: '16px'
   }
}

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function AddTodo({ onCreate }) {
    const input = useInputValue('')


    function SubmitClick(event) {
        event.preventDefault()

        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()
        }
    }

    return (
        <form onSubmit={SubmitClick}>
            <input
                type="text"
                placeholder='name'
                style={styles.input}
                {...input.bind}
            />
            <button style={styles.button} type="submit">Add todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo
