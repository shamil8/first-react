import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0

    }
}

function TodoList(props) {

    return (
        <ul style={styles.ul}>
            { props.todos.map((todo, index) => {
                return <TodoItem
                    todo={todo}
                    key={todo.id}
                    index={index}
                    onChaneCheckbox={props.onToggle}
                />
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired, // Массив который принимает объекты
    onToggle: PropTypes.func.isRequired                    // флаг isRequired говорит о необходимости todos для данного компонента (without 'todos' that doesn't work)

}

export default TodoList
