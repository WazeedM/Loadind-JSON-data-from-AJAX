$(document).ready(function(){
    var jsonData;
   $.getJSON("./data/data.json", function(json) {
        console.log(json); // this will show the info it in firebug console
        jsonData = json;
        console.log(jsonData);
        document.getElementById('items').innerHTML = jsonData.map(function(item){
            return `
                <div class="item item1">
                    <div class="item-image">
                        <img src="${item.image}" alt="Furniture">
                    </div>
                    <div class="item-details">
                        <div class="title">${item.title}</div>
                        <div class="price">${item.price}</div>
                        <div class="rating">${item.rating.join('')}</div>
                        <div class="item-cart"><i class="fas fa-cart-plus"></i></div>  
                    </div>
                </div>
            `;
        }).join('');
    });

});