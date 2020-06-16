import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from './context'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.4rem 1rem',
        border: '1px solid #ffcc33',
        borderRadius: '5px',
        marginBottom: '0.4rem'
    },
    input: {
        marginRight: '1rem',

    }
}

function TodoItem({todo, index, onChaneCheckbox}) {
    const { removeTodo } = useContext(Context)
    const classes = []


    if(todo.completed) {
        classes.push('done')
    }

    return (
        <li style={styles.li}>
            <span>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    style={styles.input}
                    onChange={() => onChaneCheckbox(todo.id)}
                />
                <strong>{index + 1}. </strong>
                <span className={classes.join(' ')}>{todo.name}</span>
            </span>
            <button className='rm' onClick={removeTodo.bind(null, todo.id)}>&times;</button>
        </li>
    )                                       //() => removeTodo(todo.id)
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onChaneCheckbox: PropTypes.func.isRequired
}

export default TodoItem
