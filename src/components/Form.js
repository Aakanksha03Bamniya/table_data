import React, { useState } from "react";

const Form = () => {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);



  
  const addActivity = () => {
    // add todos in the list and print on the console with the help of SETLISTDATA

    // setListData([...listData,activity])
    // console.log(listData);

    // another way

    setListData((data) => {
      const updatedData = [...data, activity];
      console.log(updatedData);
      setActivity("");
      return updatedData;
    });
  };

  const removeActivity=(i)=>{
    const updatedListData= listData.filter((elem,id)=>{
        return i!=id

    })
    setListData(updatedListData)
  }

  return (
    <div className="flex justify-center">
      <input
        className="bg-blue-300 p-4 m-5"
        value={activity}
        onChange={(event) => setActivity(event.target.value)}
        type="text"
        placeholder="Enter A Todo...."
      />
      <button
        onClick={addActivity}
        className="bg-blue-500 m-6 p-5 rounded"
        type="submit"
      >
        Add TODO
      </button>
      {listData.length > 0 &&
        listData.map((data, i) => (
          <p 
          className="bg-red-200 absolute inset-x-0 bottom-40 w-80 end-30 h-16 "
          key={i}>
            {" "}
            {/* Use `i` as the key */}
            <div>{data}</div>
            <button
            className="bg-red-600 p-2 m-3"
            onClick={()=>removeActivity(i)}
            > Remove Activity</button>
          </p>
        ))}
    </div>
  );
};

export default Form;
