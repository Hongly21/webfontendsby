function PutimgContentfeature(box_feature) {
    var container = document.querySelector(".content-feature");
    if (container) {
        var item = "";

        for (var img in box_feature) {
            item += `
         <div class="box-feature">
            <img src="${box_feature[img]}" alt="">
        </div> `;
            container.innerHTML = item;
        }

    }


}

function Discounmencontainer(discountmen) {
    var container = document.querySelector(".result");
    if (container) {
        var item = "";
        for (var obj in discountmen) {
            item += `
            <div class="content-dics-box">
                <div class="image">
                    <div class="dcs-logo">${discountmen[obj].disc_logo}
                    </div>
                        <img src="${discountmen[obj].image}" alt="">
                </div>
                <div class="dcs">
                    <h2>${discountmen[obj].price}<del>${discountmen[obj].price_delete}</del> </h2>
                    <p>${discountmen[obj].product_name}</p>
                 <i class="fa-regular fa-heart"></i>
               </div>
             </div>`;
            
        }
        container.innerHTML = item;
    }
}

function Discounwomencontainer(discountwomen) {
    var container= document.querySelector(".result-women");
    if (container){
        var item = "";
        for (var obj in discountwomen){
            item += `
            <div class="content-dics-box">
                <div class="image">
                    <div class="dcs-logo">${discountwomen[obj].disc_logo}
                    </div>
                        <img src="${discountwomen[obj].image}" alt="">
                </div>
                <div class="dcs">
                    <h2>${discountwomen[obj].price}<del>${discountwomen[obj].price_delete}</del> </h2>
                    <p>${discountwomen[obj].product_name}</p>
                 <i class="fa-regular fa-heart"></i>
               </div>
             </div>
            `;
        }
        container.innerHTML = item;
    }
}


function Discountshoescontainer(discountshoes){
    var container= document.querySelector(".result-shoes");
    if (container){
        var item = "";
        for (var obj in discountshoes){
            item += `
            <div class="content-dics-box">
                <div class="image">
                    <div class="dcs-logo">${discountshoes[obj].disc_logo}
                    </div>
                        <img src="${discountshoes[obj].image}" alt="">
                </div>
                <div class="dcs">
                    <h2>${discountshoes[obj].price}<del>${discountshoes[obj].price_delete}</del> </h2>
                    <p>${discountshoes[obj].product_name}</p>
                 <i class="fa-regular fa-heart"></i>
               </div>
             </div>
            `;
        }
        container.innerHTML = item;
    }
}