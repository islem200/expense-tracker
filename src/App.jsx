import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Addexpense from './components/Addexpense'
import Expenses from './components/Expenses'


const App = () => {
  const[data, setData] = useState([]);

  const getData = async()=>{
    try {
      const response = await axios.get('http://localhost:5000/expenses');
      setData(response.data)
      
    } catch (error) {
      console.error(error)
      
    }
  }

  useEffect(()=>{
    getData();

  }, []);

  const addExpense= async (expense)=>{
    //update database
    const response = await axios.post(
      'http://localhost:5000/expenses',
      expense
    );

    //update the state
    setData([...data, response.data]);

  };
  return (
    <div className='container' style={{maxWidth: '900px'}}>
      <Addexpense addExpense={addExpense}/>
      <Expenses data={data}/>
      
    </div>
  )
}

export default App

