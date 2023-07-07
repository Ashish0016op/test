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
    
      axios
        .post('https://crudcrud.com/api/e29fe1cca24b4187a467bceb944a3595/product_details', data)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
     
}
electronics.addEventListener('click',removeItem1);
function removeItem1(e){
    e.preventDefault();
    if (e.target.classList.contains('delete')) {
        let li = e.target.parentElement;
        let productId = li.dataset.productId;
    
        axios
          .delete(`https://crudcrud.com/api/e29fe1cca24b4187a467bceb944a3595/product_details/${productId}`)
          .then(response => {
            console.log(response);
            electronics.removeChild(li);
          })
          .catch(error => {
            console.error(error);
          });
      }
}
food.addEventListener('click',removeItem2);
function removeItem2(e){
    e.preventDefault();
    if (e.target.classList.contains('delete')) {
        let li = e.target.parentElement;
        let productId = li.dataset.productId;
    
        axios
          .delete(`https://crudcrud.com/api/e29fe1cca24b4187a467bceb944a3595/product_details/${productId}`)
          .then(response => {
            console.log(response);
            food.removeChild(li);
          })
          .catch(error => {
            console.error(error);
          });
      }
}
skin.addEventListener('click',removeItem3);
function removeItem3(e){
    e.preventDefault();
    if (e.target.classList.contains('delete')) {
        let li = e.target.parentElement;
        let productId = li.dataset.productId;
    
        axios
          .delete(`https://crudcrud.com/api/e29fe1cca24b4187a467bceb944a3595/product_details/${productId}`)
          .then(response => {
            console.log(response);
            skin.removeChild(li);
          })
          .catch(error => {
            console.error(error);
          });
      }
}