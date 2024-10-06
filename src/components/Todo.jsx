import React from 'react'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import edit from '../images/edit.svg'
import deleteicon from '../images/delete.svg'
import video2 from '../images/shredder.gif'

const Todo = () => {
  
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])
    const [deletebtn, setdeletebtn] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    const [add, setadd] = useState(false)
    const [Completed, setCompleted] = useState(false)
  
    useEffect(() => {
  for (let i=0; i<todos.length; i++){
      if(todos[i].isCompleted == true){
        setCompleted(true)
      }
      else{
        setCompleted(false)
      }}
      let todostring = localStorage.getItem("todos")
      if (todostring) {
        let localtodos = JSON.parse(localStorage.getItem("todos"))
        setTodos(localtodos);
      }
    }, [])
  
    const savetolocal = () => {
      localStorage.setItem("todos", JSON.stringify(todos))
    }
  
    const handledelete = (e, itemid) => {
      const confirmed = window.confirm("Are you sure you want to delete this todo?")
      let index = todos.findIndex(item => {
        return item.id === itemid;
      })
      let newtodos = [];
      for (let i = 0; i < todos.length; i++) {
        if (i !== index) {
          newtodos.push(todos[i])
        }
      }
      setTodos(newtodos);
      localStorage.setItem("todos", JSON.stringify(todos))
    }
    const handleedit = (e, itemid) => {
      setadd(true)
      let index = todos.findIndex(item => {
        return item.id === itemid;
      })
      setTodo(todos[index].todo)
      let newtodos = [];
      for (let i = 0; i < todos.length; i++) {
        if (i !== index) {
          newtodos.push(todos[i])
        }
      }
      setTodos(newtodos);
      handlesave;
    }
  
    const handleadd = () => {
      setadd(true)
    }
    const handleback = () => {
      setadd(false)
    }
    const handlesave = () => {
      const newId = uuidv4(); // Generate a new ID
      setTodos([...todos, { id: newId, todo, isCompleted: false }]);
      setTodo('');
      savetolocal();
    };
    const handlechangetitle = (e) => {
      setTodo(e.target.value)
    }
    const handlecheckbox = (e) => {
      let todo_id = e.target.name;
  
      let index = todos.findIndex(item => {
        return item.id === todo_id;
      })
      let newtodos = [...todos];
      newtodos[index].isCompleted = !newtodos[index].isCompleted;
      setTodos(newtodos)
      savetolocal();
  
    }
  
    // const isCompleted= () => {
  
    // }
  
  
  
    return (
      <>

        {/* <RouterProvider router={route}> </RouterProvider> */}
        <div className="h1 w-full flex gap-7 justify-center my-5" >
          <h1 className="bg-red-500 flex justify-center p-3 rounded-3xl  w-fit ">Your Todos</h1>
          <button onClick={handleadd} className={`${add ? 'hidden' : 'block'} bg-zinc-300 rounded-2xl px-5 hover:bg-slate-400 text-slate-600 hover:text-lime-50 hover:scale-[1.1] transition-all duration-300`}> Add New </button>
        </div>
  
        <div className={`flex-col gap-3 justify-center items-center transition-all duration-500 ease-in-out ${add ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} ${add ? 'flex' : 'hidden'}`}>
  
          <input type="text" name="todoinput" id="todoinput" onChange={handlechangetitle} value={todo} placeholder='Enter Title' className='w-48 focus:outline-none  focus:border-transparent' required />
          {/* <input type='time' name="todoinput" onChange={handlechangetime} value={time} id="timeinput" className='w-48 focus:outline-none  ' /> */}
          <div className="flex flex-row gap-10">
            <button className={`bg-zinc-300 rounded-2xl px-5 hover:bg-slate-400 text-slate-600 hover:text-lime-50 hover:scale-[1.1] transition-all duration-300`} onClick={handlesave}>Save </button>
            <button onClick={handleback} className={`bg-zinc-300 rounded-2xl px-5 hover:bg-slate-400 text-slate-600 hover:text-lime-50 hover:scale-[1.1] transition-all duration-300`}>Back </button></div>
        </div>
  
        <div className='w-full flex justify-center my-3'>
          <div className="todos">
            {todos.length == 0 ? <h1>No More Tasks! Enjoy your day!</h1> : todos.map(item => (
              <div key={item.id} className={`todo flex w-[400px] justify-between bg-cyan-50 rounded-2xl p-7 items-center ${isDeleted ? 'hidden' : 'flex'}`}>
                <input type="checkbox" onChange={handlecheckbox}   value={item.isCompleted} name={item.id} id="done" />
                <div className="leftpart flex flex-col w-[200px]">
                  <h2 className='text-xl flex flex-row' > <p className={`${item.isCompleted ? 'line-through' : ''}`}>{item.todo}</p> <span><button> <img src={edit} onClick={(e) => {
                    handleedit(e, item.id)
                  }
                  } className='w-3' alt="" /></button></span> </h2>
                </div>
                <div className="rightpart flex ">
                  <div className="deleteanimation flex w-[40px] overflow-hidden" onClick={(e) => {
                    handledelete(e, item.id)
                  }
                  } >
                    <img src={deleteicon} className={`w-[40px] ${!deletebtn ? 'block' : 'hidden'}`} alt=" delete icon" />
                    <img src={video2} className={`${deletebtn ? 'block' : 'hidden'}`} />
                  </div>
  
                </div>
              </div>
            )
  
            )}
  
          </div>
        </div>
  
      </>
    )
}

export default Todo
