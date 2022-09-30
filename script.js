let previewProduct = document.querySelector('.product--overlay');
let previewBox = previewProduct.querySelectorAll('.overlay');

document.querySelectorAll('.product-container .product').forEach(product =>{
  product.onclick = () =>{
    previewProduct.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-circle-xmark').onclick = () =>{
    close.classList.remove('active');
    previewProduct.style.display = 'none';
  };
});