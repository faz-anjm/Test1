import React,{useState} from 'react';
import './App.css';
import { useForm }from 'react-hook-form';
import axios from 'axios';





function App() {

  const {register,handleSubmit,formState:{errors}}=useForm();
  const [posts,setPosts] = useState({}); 


 
  const onSubmit=async (data)=>{
    console.log(data);
    await axios.post("https://jsonplaceholder.typicode.com/posts",data);
  }



  async function onPostHandler() {
     
  }

    
  async function onClickHandler(){
    console.log("button is clicked");
    const posts= await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(posts.data);
  }


  return (
    
    <div className='registration'>
      <h1>REGISTRATION</h1>
      <form onSubmit={handleSubmit(onSubmit)}>


        <label>UserId
          <input type='text' name='userId' placeholder='userId'{...register("userId",{required:true,maxLength:10})}/>
          {errors?.username?.type==="maxLength"?<p>Length should not exceed 10</p>:<p>This is required</p>} 
        </label>

        <label>Id:
          <input type="text" name='id' placeholder='id'{...register("id",{required:true})}/>
          {errors?.email?.type===""?<p>email must be correct</p>:<p>this is required</p>}
        </label>

        <label>title:
          <input type="text" name='title' placeholder='title'{...register("title",{required:true,maxLength:8})}/>
          {errors?.title?.type==="maxLength"?<p>The length should not exceed 8 char</p>:<p>this is required</p>}
        </label>

        <label>body:
          <input type="text" name="body" placeholder="body"{...register("body",{required:true,maxLength:8})}/>
          {errors?.body?.type==="maxLength"?<p>The length should not exceed 8 char</p>:<p>This is required</p>}
        </label>

        <button type='submit'>Submit</button>


      </form>

      <><button onClick={onClickHandler}>CLICK</button>
      {posts.length && posts.map(post =><span> <p>{post.userId}</p><p>{post.id}</p><p> {post.title}</p><p>{post.body}</p></span>) }</>
      <button onClick={onPostHandler}>OPEN</button>
      
      
    </div>


  );
}

export default App;