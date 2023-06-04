



async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
    
    return res.json();
    console.log(res.json)
  }
   
   
  
  
  
  
  
   import React from 'react'
   
   const Products =async () => {
     const data=await getData()
   
     return (
       <div>
        
  
          <p>  helo </p>

          {
            data.map(pro=>(
                <div className="flex" key={pro.id}>
                <p> {pro.title} </p>
                
                </div>
            )
            )
          }
        
  
       
       </div>
     )
   }
   
   export default Products
  
   
  