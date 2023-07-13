let addProducts=document.getElementById('addItem');
let electronics=document.getElementById('elec');
let food=document.getElementById('food');
let skin=document.getElementById('skin');
addProducts.addEventListener('click',itemsAdded);
function itemsAdded(e){
    e.preventDefault();
    let selling=document.getElementById('sellingPrice').value;
    let product=document.getElementById('productName').value;
    let li=document.createElement('li');
    li.className='addedProduct';
     li.appendChild(document.createTextNode(selling))
     li.appendChild(document.createTextNode("-"+product+"-"));
     let deleteBtn=document.createElement('button');
     deleteBtn.className='delete';
     deleteBtn.appendChild(document.createTextNode('Delete order'));
     li.appendChild(deleteBtn);
     let category=document.getElementById('category').value;
     if (category === "electronics") {
        electronics.appendChild(li);
      } else if (category === "food") {
        food.appendChild(li);
      } else if (category === "skinCare") {
        skin.appendChild(li);
      }
      let data = {
        sellingPrice: selling,
        productName: product,
        category: category
      };
      document.getElementById('sellingPrice').value="";
      document.getElementById('productName').value="";
    
      axios
        .post('https://crudcrud.com/api/9137a67c75e344e387328b6889cde31e/product_details', data)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
     
}
electronics.addEventListener('click',removeItem1);
function removeItem1(e){
    e.preventDefault();
    if (e.target.classList.contains('delete')) {
        let li = e.target.parentElement;
        let productId = li.dataset.productId;
        electronics.removeChild(li);
    
        // axios
        //   .delete(`https://crudcrud.com/api/e29fe1cca24b4187a467bceb944a3595/product_details/${productId}`)
        //   .then(response => {
        //     console.log(response);
        //     electronics.removeChild(li);
        //   })
        //   .catch(error => {
        //     console.error(error);
        //   });
      }
}
food.addEventListener('click',removeItem2);
function removeItem2(e){
    e.preventDefault();
    if (e.target.classList.contains('delete')) {
        let li = e.target.parentElement;
        let productId = li.dataset.productId;
        food.removeChild(li);
    
        // axios
        //   .delete(`https://crudcrud.com/api/e29fe1cca24b4187a467bceb944a3595/product_details/${productId}`)
        //   .then(response => {
        //     console.log(response);
        //     food.removeChild(li);
        //   })
        //   .catch(error => {
        //     console.error(error);
        //   });
      }
}
skin.addEventListener('click',removeItem3);
function removeItem3(e){
    e.preventDefault();
    if (e.target.classList.contains('delete')) {
        let li = e.target.parentElement;
        let productId = li.dataset.productId;
        skin.removeChild(li);
    
        // axios
        //   .delete(`https://crudcrud.com/api/e29fe1cca24b4187a467bceb944a3595/product_details/${productId}`)
        //   .then(response => {
        //     console.log(response);
        //     skin.removeChild(li);
        //   })
        //   .catch(error => {
        //     console.error(error);
        //   });
      }
}
document.addEventListener('DOMContentLoaded',getData);
function getData(){
        fetch('https://crudcrud.com/api/9137a67c75e344e387328b6889cde31e/product_details')
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
        deleteButton.addEventListener('click', ()=> deleteItem(items.id));
        listItem.appendChild(deleteButton);
        electronics.appendChild(listItem);
      }
      else if(items.category==="food"){
        const listItem = document.createElement('li');
        const addData=items.sellingPrice+"-"+items.productName+"-";
        listItem.textContent=addData;
        const deleteButton=document.createElement('button');
        deleteButton.textContent='Delete order';
        deleteButton.addEventListener('click', ()=> deleteItem(items.id));
        listItem.appendChild(deleteButton);
        food.appendChild(listItem);
      }else if(items.category==="skinCare"){
        const listItem = document.createElement('li');
        const addData=items.sellingPrice+"-"+items.productName+"-";
        listItem.textContent=addData;
        const deleteButton=document.createElement('button');
        deleteButton.textContent='Delete order';
        deleteButton.addEventListener('click', ()=> deleteItem(items.id));
        listItem.appendChild(deleteButton);
        skin.appendChild(listItem);
      }
      
  }
}
function deleteItem(itemId){
  axios.delete(`https://crudcrud.com/api/9137a67c75e344e387328b6889cde31e/product_details/${itemId}`)
  .then(response =>{
    removeUserFromScreen(itemId);
  })
  .catch(error => console.log(error));
}
function removeUserFromScreen(itemId){
  const parentNode=document.getElementById('elec');
  const childNodeToBeDeleted=document.getElementById(itemId);
  if(childNodeToBeDeleted){
    parentNode.removeChild(childNodeToBeDeleted);
  }
}