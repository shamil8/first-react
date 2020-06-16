import React from "react"
import PropTypes from 'prop-types'
import './Modal.css'

class Modal extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        isOpen: false
    }

    showProduct = () => {
        this.setState({isOpen: false})
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.setState({isOpen: true})} className='rm show'>&gt;</button>

                { this.state.isOpen &&
                <div className="modal">
                    <div className="modal-body">
                        <h1>Modal owner id: {this.props.todo['userId']}</h1>
                        <p>todo id: <b>{this.props.todo.id}</b></p>
                        <p>Status: <b>{this.props.todo.completed ? 'Close' : 'Open'}</b></p>
                        <p>Name: {this.props.todo.name}</p>

                        <button className='rm close-button' onClick={this.showProduct}>&times;</button>
                    </div>
                </div>
                }
            </React.Fragment>
        )
    }
}

Modal.propTypes = {
    todo: PropTypes.object.isRequired
}

export default Modal
