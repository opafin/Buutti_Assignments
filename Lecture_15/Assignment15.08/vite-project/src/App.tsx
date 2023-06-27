import { useState, useRef, useEffect, ChangeEvent, FormEvent } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { useSpring, animated } from 'react-spring'
import { useMeasure } from 'react-use'
import autosize from 'autosize'
import './app.css'
import './task_box.css'
import './task_transition_group.css'
import './input_box.css'

interface Task {
  id: number
  text: string
  completed: boolean
}

function App() {
  const [myText, setMyText] = useState('')
  const [tasks, setTasks] = useState<Task[]>([])
  const [isAnimating, setIsAnimating] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const [tasksContainerRef, { height: contentHeight }] = useMeasure<HTMLUListElement>()
  const springProps = useSpring({
    from: { height: contentHeight },
    to: { height: isAnimating ? contentHeight : 0 }
  })

  useEffect(() => {
    if (inputRef.current && !isAnimating) {
      autosize(inputRef.current)
    }
  }, [isAnimating])

  useEffect(() => {
    setIsAnimating(true)
  }, [tasks])

  const onInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMyText(event.target.value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      addTask()
    }
  }

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addTask()
  }

  const addTask = () => {
    const newTask: Task = {
      id: tasks.length,
      text: myText,
      completed: false
    }
    setTasks([...tasks, newTask])
    setMyText('')
    if (inputRef.current) {
      inputRef.current.style.width = `100%`
      inputRef.current.style.height = `30px`
    }
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="App">
      <animated.div className="taskListContainer" style={springProps}>
        <ul className="tasks-container" ref={tasksContainerRef}>
          <TransitionGroup component={null}>
            {tasks.map((task) => (
              <CSSTransition key={task.id} timeout={500} classNames="item">
                <li className="task" onClick={() => toggleTask(task.id)}>
                  <div className="taskContainer">
                    <div className={`taskText ${task.completed ? 'completed' : ''}`}>{task.text}</div>
                    {task.completed && <div className="strikethrough"></div>}
                    <button
                      className="stashButton"
                      onClick={(event) => {
                        event.stopPropagation()
                        removeTask(task.id)
                      }}
                    >
                      x
                    </button>
                  </div>
                </li>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ul>
      </animated.div>
      <form onSubmit={onFormSubmit}>
        <textarea
          ref={inputRef}
          className="inputBox"
          value={myText}
          onChange={onInputChange}
          onKeyDown={handleKeyDown}
        />
        <button className="addTask">+</button>
      </form>
    </div>
  )
}

export default App
