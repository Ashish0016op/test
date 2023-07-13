let addProducts=document.getElementById('addItem');
let electronics=document.getElementById('elec');
let food=document.getElementById('food');
let skin=document.getElementById('skin');
addProducts.addEventListener('click',itemsAdded);
function itemsAdded(e){
    e.preventDefault();
    let selling=document.getElementById('sellingPrice').value;
    let product=document.getElementById('productName').value;
    let category=document.getElementById('category').value;

    let data = {
      sellingPrice: selling,
      productName: product,
      category: category
    };

      axios
        .post('https://crudcrud.com/api/855af10776994142bbdda1381c1dbc43/product_details', data)
        .then(response => {
          console.log(response.data);
          const postedData=response.data;
          if(postedData.category==="electronics"){
            const listItem=document.createElement('li');
            listItem.textContent=postedData.sellingPrice+"-"+postedData.productName+"-";
            const deleteButton=document.createElement('button');
            deleteButton.textContent='Delete Order';
            deleteButton.addEventListener('click',() =>{
              deletedData(postedData._id);
              listItem.remove();
            })
            listItem.appendChild(deleteButton);
            electronics.appendChild(listItem);
          }
          else if(postedData.category==="food"){
            const listItem=document.createElement('li');
            listItem.textContent=postedData.sellingPrice+"-"+postedData.productName+"-";
            const deleteButton=document.createElement('button');
            deleteButton.textContent='Delete Order';
            deleteButton.addEventListener('click',() =>{
              deletedData(postedData._id);
              listItem.remove();
            })
            listItem.appendChild(deleteButton);
            food.appendChild(listItem);
          }
          else if(postedData.category==="skinCare"){
            const listItem=document.createElement('li');
            listItem.textContent=postedData.sellingPrice+"-"+postedData.productName+"-";
            const deleteButton=document.createElement('button');
            deleteButton.textContent='Delete Order';
            deleteButton.addEventListener('click',() =>{
              deletedData(postedData._id);
              listItem.remove();
            })
            listItem.appendChild(deleteButton);
            skin.appendChild(listItem);
          }

        })
        .catch(error => {
          console.log(error);
        });
     
}
function deletedData(id){
  axios.delete(`https://crudcrud.com/api/855af10776994142bbdda1381c1dbc43/product_details/${id}`)
  .then(response =>{
    console.log('Data deleted:',response.data);
  })
  .catch(error =>{
    console.log('Error:',error);
  })
}

document.addEventListener('DOMContentLoaded',getData);
function getData(){
        fetch('https://crudcrud.com/api/855af10776994142bbdda1381c1dbc43/product_details')
        .then(response => {
            return response.json();
        })
        .then(data => {
            displayData(data);
        })
        .catch(error => console.log('Fetch error:', error));
}
function displayData(Data){
  for(let i=0;i<Data.length;i++){
      let items=Data[i];
      if(items.category==="electronics"){
        const listItem = document.createElement('li');
        const addData=items.sellingPrice+"-"+items.productName+"-";
        listItem.textContent=addData;
        const deleteButton=document.createElement('button');
        deleteButton.textContent='Delete order';
        deleteButton.addEventListener('click',deleteDataFromScreen1);
        function deleteDataFromScreen1(){
          deletedData(items._id);
          listItem.remove();
        }
        listItem.appendChild(deleteButton);
        electronics.appendChild(listItem);
      }
      else if(items.category==="food"){
        const listItem = document.createElement('li');
        const addData=items.sellingPrice+"-"+items.productName+"-";
        listItem.textContent=addData;
        const deleteButton=document.createElement('button');
        deleteButton.textContent='Delete order';
        deleteButton.addEventListener('click',deleteDataFromScreen2);
        function deleteDataFromScreen2(){
          deletedData(items._id);
          listItem.remove();
        }
        listItem.appendChild(deleteButton);
        food.appendChild(listItem);
      }else if(items.category==="skinCare"){
        const listItem = document.createElement('li');
        const addData=items.sellingPrice+"-"+items.productName+"-";
        listItem.textContent=addData;
        const deleteButton=document.createElement('button');
        deleteButton.textContent='Delete order';
        deleteButton.addEventListener('click',deleteDataFromScreen3);
        function deleteDataFromScreen3(){
          deletedData(items._id);
          listItem.remove();
        }
        listItem.appendChild(deleteButton);
        skin.appendChild(listItem);
      }
      
  }
}