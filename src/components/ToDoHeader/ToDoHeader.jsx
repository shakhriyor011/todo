import React, { useState } from 'react'
import GlobalSvgIcons from '../../assets/icons/GlobalSvgIcons'
import Search from '../Search/Search'

import './ToDoHeader.scss'

const ToDoHeader = ({ openSearch, setOpenSearch, search, setSearch }) => {



    const handleOpenSearch = () => {
        setOpenSearch(true)
    }






    const handleCloseSearch = () => {
        setOpenSearch(false)
        setSearch('')
    }

    const handleBackSearch = () => {
        setOpenSearch(false)
    }

    return (
        openSearch ?
            <Search
                handleCloseSearch={handleCloseSearch}
                search={search}
                setSearch={setSearch}
                handleBackSearch={handleBackSearch}
            />
            :
            <div className='todoHeader'>
                <h2 className='todoHeader__title'>Заметки</h2>
                <div onClick={handleOpenSearch} className='todoHeader__icon'>
                    <button className='todoHeader__switcher'>RU</button>
                    <GlobalSvgIcons id='search' />
                </div>
            </div>
    )
}

export default ToDoHeader
