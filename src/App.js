
import { useState, useEffect } from "react";
import Button from "./components/Button/Button";
import ListItem from "./components/ListItem/ListItem";
import ToDoHeader from "./components/ToDoHeader/ToDoHeader";
import ToDoNav from "./components/ToDoNav/ToDoNav";
import GlobalSvgIcons from './assets/icons/GlobalSvgIcons'
import Modal from "./components/Modal/Modal";
import { useTranslation } from 'react-i18next';


const date = `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`

const getTodos = () => {
  const todos = localStorage.getItem('todos')
  // JSON.parse() - преобразует строку в объект
  if (todos) {
    return JSON.parse(todos)
  } else {
    return []
  }
}


function App() {
  const [gridToList, setGridToList] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [todos, setTodos] = useState(getTodos())
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [search, setSearch] = useState('')

  const { t, i18 } = useTranslation()



  // useEffect() - выполняет функцию после рендера компонента.  Первый аргумент - функция, второй - массив зависимостей
  console.log(todos);
  useEffect(() => {
    // JSON.stringify() - преобразует объект в строку
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  const toggleGridToList = () => {
    setGridToList(!gridToList)
  }

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = (e) => {
    e.prevenDefault()
    setOpenModal(false)
  }

  const addTodos = (e) => {
    if (title !== '' && content !== '') {
      const newTodo = {
        id: Math.random().toString(36).substring(2, 9),
        title,
        date,
        content
      }
      setTodos([...todos, newTodo])
      setOpenModal(false)
      setTitle('')
      setContent('')
    }
  }

  const onEditTodos = (id, title, content) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.title = title
        todo.content = content
        todo.date = date
      }
      return todo
    })
    setTodos(newTodos)
  }

  const onDeleteTodos = (id) => {
    setTodos([...todos.filter(todo => todo.id !== id)])
  }


  const changeLanguagee = (lng) => {
    i18.changeLanguage(lng)
  }


  return (
    <div className="App">
      <ToDoHeader
        openSearch={openSearch}
        setOpenSearch={setOpenSearch}
        search={search}
        setSearch={setSearch}
        setTodos={setTodos}
      />
      <div className="container">
        <ToDoNav toggleGridToList={toggleGridToList} gridToList={gridToList} />
        <div className={gridToList ? 'listItem' : 'grid'}>

          {
            todos.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase())).map(todo => (
              <ListItem
                gridToList={gridToList}
                todo={todo}
                onEditTodos={onEditTodos}
                onDeleteTodos={onDeleteTodos}
              />
            ))
          }
        </div>
      </div>
      <div className={openModal ? 'App__btn active' : 'App__btn'}>
        <Button click={handleOpenModal}>
          <GlobalSvgIcons id='edit' />
        </Button>
      </div>
      <Modal
        text='Добавить'
        openModal={openModal}
        close={handleCloseModal}
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        addAndEdit={addTodos}
      />
      {/* <button onClick={() => changeLanguagee('ru')}>Ru</button>
      <button onClick={() => changeLanguagee('en')}>en</button>
      <p>{t('hello')}</p> */}
    </div>

  );
}

export default App;
