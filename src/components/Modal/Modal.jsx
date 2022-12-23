import React from 'react'

import './Modal.scss'

const Modal = ({ text, openModal, close, title, setTitle, content, setContent, addAndEdit }) => {

    const changeTitle = (e) => {
        setTitle(e.target.value)
    }
    
    const changeContent = (e) => {
        setContent(e.target.value)
    }
    

    return (
        <div className={openModal ? 'modal active' : 'modal'}>
            <div className="modal__wrapper">
                <h2 className="modal__title">{text} заметку</h2>
                <form action="" className="modal__form">
                    <div className="modal__group">
                        <input onChange={changeTitle} value={title} type="text" required />
                        <span className="bar"></span>
                        <label>Title</label>
                    </div>
                    <div className="modal__group">
                        <input onChange={changeContent} value={content} type="text" required />
                        <span className="bar"></span>
                        <label>Content</label>
                    </div>
                </form>
                <div className="modal__btns">
                    <button onClick={close}>Отмена</button>
                    <button onClick={addAndEdit}>{text}</button>
                </div>
            </div>
        </div>
    )
}

export default Modal