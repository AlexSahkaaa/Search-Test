import React, {useState, useEffect} from 'react'
import Card from './components/Card'
import TextInput from './components/TextInput'
import {useHistory} from 'react-router-dom'

import {DATASET} from './data/Data'
function App() {
  const [searchName, setSearchName] = useState('')
  const history = useHistory()
  const changeInputHandler = (value) => {
    setSearchName(value)
  }
  useEffect(() => {
    const params = new URLSearchParams()
    if (searchName) {
      params.append("name", searchName)
    } else {
      params.delete("name")
    }
    history.push({search: params.toString()})
  }, [searchName, history])


  return (
    <div className="container pt-4">
      <TextInput onChange={changeInputHandler}/>
      {
        DATASET.filter((items) => {
          if(searchName == "") {
            return items
          } else if (items.toLowerCase().trim().includes(searchName.toLowerCase().trim()))
          {
            return items
          }
        }).map((item, index) => (
          <Card key={index} name={item}/>
        ))
      }
    </div>
  );
}

export default App;
