import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useState, useEffect } from 'react';

    let approuve = [];
    let desaprouve = [1,3]
    
    export default function Graph() {
      const [idee, fetchUsers] = useState([])
    
      const getData = () => {
        fetch('https://api-boite-idee.herokuapp.com/api/idee')
          .then((res) => res.json())
          .then((res) => {
            console.log(res)
            fetchUsers(res)
          })
      }
    
      useEffect(() => {
        getData()
      }, [])
      if(idee.statut === true){
        approuve.push(idee)
      }desaprouve.push(idee)
     
   
    ChartJS.register(ArcElement, Tooltip, Legend);
    const data = {
    labels: [ 'aprouvé', 'desapprouvé'],
    datasets: [
    {
      label: '# of Votes',
      data: [approuve.length, desaprouve.length],
      backgroundColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 99, 132, 1)',
        
      ],
      borderColor: [ 
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',

      ],
      borderWidth: 1,
    },
  ],
};



    return (
        
        <div style={{ width: '18rem', margin:'0 auto' }} >
            
          
          
           <Pie data={data} />
  
        </div>
    )

}