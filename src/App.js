import React , {Component, useState, useEffect} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Chart from 'react-apexcharts'
const  App =()=> {
  const [category, setCategory] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
      const age = [];
      const salary = [];

      axios.get("https://dummy.restapiexample.com/api/v1/employees").then(response =>{
          console.log("response", response)
          response.data.data.map(item => {
            console.log("item", item)
              age.push(item.employee_age);
              salary.push(item.employee_salary)
          })
          setCategory(salary)
          setData(age)
          // setObject({
          //   chart: {
          //     id: 'apexchart-example'
          //   },
          //   xaxis: {
          //     categories: salary
          //   }
          // })
          // setSeries([{
          //   name: 'series-1',
          //   data: age
          // }])
          console.log("age", age, salary)
      }).catch(e => {
          alert(e);
      })
  }, [])
  
    return (
      <Chart options={{
        chart: {
          id: 'apexchart-example'
        },
        xaxis: {
          categories: category
        }
      }} 
      series={[{
        name: 'series-1',
        data: data
      }]} type="line" width={800} height={500} />
    )
}

export default App