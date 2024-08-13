const App=()=>{
    const players=[
        {
            name:'Sachin',
            runs:20000,
            retiredOn:'03-10-2010'
        },
        {
            name:'Pointing',
            runs:16000,
            retiredOn:'01-01-2015'
        },
        {
            name:'Lara',
            runs:19000,
            retiredOn:'02-07-2005'
        }
       
    ]
   const [data,setData]=React.useState(players)
   const [sortOrder,setSortOrder]=React.useState('')
   const [sortColumn,setSortColumn]=React.useState('')
   const fnSort=(eve)=>{
     const column=eve.target.id;
     if(column){
        let _sortOrder=!sortOrder ? 'asc': (sortOrder=='asc'? 'dec':'asc');
        if(column!=sortColumn){
           _sortOrder='asc'
        }
      const dummyData=[...data]
      dummyData.sort((obj1,obj2)=>{
            if(column=='retiredOn'){
             return new Date(obj1[column]).getTime()-new Date(obj2[column]).getTime()
            }else{
            if(obj1[column]==obj2[column])return 0;
            return obj1[column]<obj2[column] ? -1 :1;
            }
        })
        setData(_sortOrder=='asc' ? dummyData: dummyData.reverse());
        setSortOrder(_sortOrder)
        setSortColumn(column)
     }
   }
   return <div>
     <h1>Players</h1>
      <table border='1px'>
        <thead>
           <tr onClick={fnSort}>
              <th id='name'>Name {sortColumn =='name' && sortOrder.toUpperCase()}</th>
              <th id='runs'>Runs {sortColumn =='runs' && sortOrder.toUpperCase()}</th>
              <th id="retiredOn" >Retired On {sortColumn =='retiredOn' && sortOrder.toUpperCase()}</th>
           </tr>
        </thead>
        <tbody>
           {
              data.map((obj,index)=>{
                 const {name,runs,retiredOn}=obj
                 return <tr key={'tr' +index}>
                        <td>{name}</td>
                        <td>{runs}</td>
                        <td>{retiredOn}</td>
                    </tr>
              })
           }
        </tbody>
     </table>
    </div>
   }