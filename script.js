fetch("https://fakestoreapi.com/products/")
  .then((data) => {
    // console.log(data);
    return data.json(); //covert into json
  })
  .then((objData) => {
    // console.log(objData[0].title);
    let tableInfo;
    objData.map((value) => {
      tableInfo += `<tr>
         <td>${value.id}</td>
          <td>${value.discription}</td>
          <td>${value.price}</td>
          <td> <img scr=' ${value.image}'/></td>
        </tr>`;
    });
    document.getElementById("table").innerHTML = tableInfo;
  });
