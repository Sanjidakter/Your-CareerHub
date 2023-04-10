import React from "react";
import './Blogs.css'

const Blogs = () => {
  return (
    <div className="blogs">
        <h1 style={{textAlign:"center"}}>Blogs</h1>
      <h2>a. When should you use context API?</h2>
      <p>Context is primarily used when some data needs to be accessible by many components at different nesting levels.It's better to use context API than props drilling</p>
      <h2>b. What is a custom hook?</h2>
      <p>a special JavaScript function whose name starts with 'use' and can be used to call other hooks.</p>
      <h2>c. What is useRef?</h2>
      <p> a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref)</p>
      <h2>d. What is useMemo?</h2>
      <p> a function that returns a memoized value of a passed in resource-intensive function</p>
    </div>
  );
};

export default Blogs;
