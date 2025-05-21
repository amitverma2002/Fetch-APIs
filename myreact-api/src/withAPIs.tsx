import { useState } from "react";

// type list = {
//     name:{
//         first:string;
//         last:string;
//     };
//     email:string;
//     picture:{
//         thumbnail:string;
//     }
// }
//  const same=()=>{
//     const [error, setError] = useState<string | boolean>(false)
//     // const [ganga, setganga] = useState<list[]>([])
//         const [ganga, setganga] = useState([])
    
//     const fetchUser = async () => {
//         try{
//             const Gmh= await fetch("https://jsonplaceholder.typicode.com/todos/");
//             const  data = await Gmh.json();
//             console.log(data)
//             console.log(data[0]);
            
//             if (data[0]){
//                 // setganga(data.results);
//                 setganga(data)
//                        console.log(data[0]);
//                 setError(false);
//                 console.log("if");
                
//                 console.log(data[0].title)
                
//             }else{
//                 setError("No results Found")
//             }
//         }catch(err){
//           console.error("fetch error:",err);
//           setError("failed to fetch the Data")
//         }
//     }

//     console.log("-----------"+JSON.stringify(ganga));
//     return(
//     <div> 
//         {/* <button onClick={fetchUser} >kuchh b</button>
//            {error && <p style={{ color: "red" }}>{error}</p>}
//         <ul>
//             {ganga.map((User, index)=>
//             <li key={index}>{User.email}</li>
//             )}
//         </ul> */}
//         {console.log("abc"+JSON.stringify(ganga))
//         }
    
//         <button onClick={fetchUser} >For me </button>
//         {error && <p style={{color: "red"}}>Error: {error}</p>}
//         <div>
// {/* {JSON.stringify(ganga)} */}
//             {ganga.map((amit, index)=> 
//             // <div key={index}>
//             //    <img src="{amit.picture.thumbnail}" alt="" />
//             //    <p><strong>Name:</strong>{amit.name.first}{amit.name.last}</p>
//             //    <p><strong>Email:</strong>{amit.email}</p> 
//             // </div>
//             <div>{console.log(amit.userId)
//             }gg{amit.userId}&nbsp;Title:{amit.title}</div>
//             )}
//             {console.log("******")}
//             {console.log(ganga)
//             }
//         </div>
//     </div>
// )
// }

// export default same;


const rupi=() =>{
   type sm = {
    id:number,
    name:string,
    email:string,
    password:string,
    avatar:string,
    role:string,
   }
   const[loading, setloading] = useState(false)
   const[Ram, setRam] = useState<sm[]>([])
async function getData(){
    setloading(true)
    try{
        await new Promise(resolve => setTimeout(resolve, 2000));
        const abi = await fetch("https://api.escuelajs.co/api/v1/users")
        const sbi =await abi.json()
        console.log(sbi)
        setRam(sbi)
        // if(sbi.Ram){
        //     setRam(sbi) 
        // }
    }catch(error){
        console.error("error fetching data", error)
    }
    finally{
        setloading(false)
    }
} 
return(
    <div >
         <video
  autoPlay
  muted
  loop
  className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
>
  <source src="./src/assets/7670836-uhd_3840_2160_30fps.mp4" type="video/mp4" />
</video>
        <br />
        <br />
        <button onClick={getData} className="bg-yellow-400 h-[50px] w-[100px] rounded-xl">Chal bay</button>
        {loading && (
            <div>
            <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWdybzdtb3ZhdjBrbGRnd29seXF4dnp1aThtcXBtcTg0Y3l0bmszOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/t2dbFtsdOze21EQ9lk/giphy.gif"/>
             </div>
             
        )}
        <ul className="grid grid-cols-4 gap-4">
           
            {Ram.map((name)=>(
                <div className="border-1 border-black bg-transparent p-4 rounded-xl text-white">
                <li key={name.id} ></li>
                <br />
                <img src={name.avatar} alt={name.avatar} width="100"/>
                <br />
                <strong>{name.email}</strong>
                <br />
                <strong>{name.password}</strong>
                <br />
                <p>{name.role}</p>
                </div>
            ))}
        </ul>
        {/* {Ram.map((name)=>(
            <div>
                <h1 key={name.id}></h1>
                <img src={name.avatar} />
                
            </div>
        ))} */}
    </div>
)
}
export default rupi



