 




async function getData(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
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
   


const Detail =async ({params}) => {
const data=await getData(params.id)
console.log(data)
  return (
    <div>
        {
            <p>  {data.title}   </p>
        }



    </div>
  )
}

export default Detail