import React, { useState } from 'react'
import Form from './Components/Form'
import "./App.css"
import { Tabs,Tab} from 'react-mdl';

const App = (props) =>{
  const [name, addName] = useState([]);  
  const [animal, addAnimal] = useState([]); 
  
  const [nameView, renderName] = useState(null); 
  const [animalView, renderAnimal] = useState(null);

  const[activeTab,tabChangeHandler] = useState(0)


   const nameHandler = (value) =>{ 
  //      console.log(value)      
       name.push(value);      
       nameListHandler(); 
   };

   const nameListHandler = () =>{

        const nameDataView = name.map((item, index) => {
    return(
        <div className="rowData">
          <div>{`${index+1}. `}</div>
          <div key={index}>{item}</div>
        </div>
      );
    })
    renderName(nameDataView);
    console.log(nameView)
  }
  
   const animalHandler = (value) =>{ 
    //     console.log(value)      
        animal.push(value);      
        animalListHandler(); 
    };

    const animalListHandler = () =>{

      const animalDataView = animal.map((item, index) => {
     return(
      <div className="rowData">
        <div>{`${index+1}. `}</div>
        <div key={index}>{item}</div>
      </div>
    );
  })
    renderAnimal(animalDataView);
  
  }


    const toggleProject=() => {
                 if(activeTab===0){
                     return(
                         <div>
                             <Form name='name' onSubmit={nameHandler} /> 
                             <Form name='animal' onSubmit={animalHandler} />  
                         </div>
                        
                     )
                  }
                     else if(activeTab===1){
                         return(
                             <div>
                                {nameView}
                              </div>
                         )
                     }
                     else if(activeTab===2){
                         return(
                            <div>
                                {animalView}
                            </div>
                         )
                     }
                  
                
            }
  return(  
    <div className="category-tabs">  
             
                 <Tabs activeTab={activeTab} onChange={(tabID) => tabChangeHandler(tabID)} ripple>
                     <Tab>Tab 1</Tab>
                     <Tab>Tab 2</Tab>
                     <Tab>Tab 3</Tab>
                 </Tabs>
                 <section>
                     {toggleProject()}
                 </section>
              
    </div>
     
  );
}

export default App