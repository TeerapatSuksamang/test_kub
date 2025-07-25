// ------- Product List
const url = new URLSearchParams(window.location.search);
const product_key = url.get('p');

const product_list = {
    // SORBETO
    "kiwi_berry_fruit_bar" : {
        name : "Kiwi&berry fruit bar",
        href : "kiwi_berry_fruit_bar",
        class : "ice_cream_bars",
        type : "Ice Cream Bar",
        detail : "It is Non - Dairy ice cream, made from 100% fresh kiwi strawberry and bluberry in lychee flavour.",
        thumbnail : "img/product_img/kiwi_berry_fruit_bar_3.png",
        img : [
            "img/product_img/kiwi_berry_fruit_bar_3.png",
            "img/product_img/kiwi_berry_fruit_bar.png" 
            // "img/1.jpg"
        ],
    },

    "strawbery_fruit_bar" : {
        name : "Strawbery fruit bar",
        href : "strawbery_fruit_bar",
        class : "ice_cream_bars",
        type : "Ice Cream Bar",
        detail : "It is Non - Dairy ice cream, made from 100% fresh kiwi strawberry and bluberry in lychee flavour.",
        thumbnail : "img/product_img/strawberry_frui_bar.png",
        img : [
            "img/product_img/strawberry_frui_bar.png"
        ],
    },

    // POPZ
    "durian" : {
        name : "Durian",
        href : "durian",
        class : "ice_cream_bars",
        type : "Ice Cream Bar",
        detail : "It is Non - Dairy ice cream, made from coconut milk mixed with durian flesh.",
        thumbnail : "img/product_img/popz_durian.png",
        img : [
            "img/product_img/popz_durian.png"
        ],
    },

    "mango" : {
        name : "Mango",
        href : "mango",
        class : "ice_cream_bars",
        type : "Ice Cream Bar",
        detail : "It is Non - Dairy ice cream, made from 100% fresh mango (Namdokmai), not from concentrate juice, mixed with fresh dice mango.",
        thumbnail : "img/product_img/popz_mango.png",
        img : [
            "img/product_img/popz_mango.png"
        ],
    },

    "green_tea" : {
        name : "Green tea",
        href : "green_tea",
        class : "ice_cream_bars",
        type : "Ice Cream Bar",
        detail : "It is Non - Dairy ice cream, made from 100% fresh mango (Namdokmai), not from concentrate juice, mixed with fresh dice mango.",
        thumbnail : "img/product_img/popz_green_tea.png",
        img : [
            "img/product_img/popz_green_tea.png"
        ],
    },

    "green_tea" : {
        name : "Green tea",
        href : "green_tea",
        class : "ice_cream_bars",
        type : "Ice Cream Bar",
        detail : "It is Non - Dairy ice cream, made from 100% fresh mango (Namdokmai), not from concentrate juice, mixed with fresh dice mango.",
        thumbnail : "img/product_img/tai_tai.png",
        img : [
            "img/product_img/tai_tai.png",
            "img/product_img/tai_tai_2.png",
        ],
    },

    // Sorbet in fruit shell
    "coconut" : {
        name : "Coconut",
        href : "coconut",
        class : "fruit_shell_sorbets",
        type : "Fruit Shell Sorbets",
        detail : "It is Non - Dairy ice cream, sorbet base, fat free, made from 100% fresh aromatic coconut juice, mixed with coconut meat, no artificial flavour.",
        list_detail : [
            "DAIRY FREE",
            "FAT FREE",
            "LACTOSE FREE",
            "GLUTEN FREE",
            "NO ARTIFICIAL FLAVOR",
            "NO ARTIFICIAL COLOR",
            "NO PRESERVATIVE"
        ],

        thumbnail : "img/product_img/coconut.png",
        img : [
            "img/product_img/coconut.png", 
            "img/sorbet/sorbet-4.jpg", 
            "img/sorbet/sorbet-2.jpg" 
        ],
    },

    "pineapple" : {
        name : "Pineapple",
        href : "pineapple",
        class : "fruit_shell_sorbets",
        type : "Fruit Shell Sorbets",
        detail : "It is Non - Dairy ice cream, sorbet base, fat free, made from 100% fresh aromatic pineapple juice, mixed with pineapple meat, no artificial flavour.",
        list_detail : [
            "DAIRY FREE",
            "FAT FREE",
            "LACTOSE FREE",
            "GLUTEN FREE",
            "NO ARTIFICIAL FLAVOR",
            "NO ARTIFICIAL COLOR",
            "NO PRESERVATIVE"
        ],
        thumbnail : "img/product_img/pineapple.png",
        img : [
            "img/product_img/pineapple.png",
            "img/sorbet/sorbet-3.jpg", 
            "img/sorbet/sorbet-1.jpg" 
        ],
    },

    "dragon_fruit_sorbet" : {
        name : "Dragon Fruit",
        href : "dragon_fruit_sorbet",
        class : "fruit_shell_sorbets",
        type : "Fruit Shell Sorbets",
        detail : "It is Non - Dairy ice cream, sorbet base, fat free, made from 100% fresh aromatic pineapple juice, mixed with pineapple meat, no artificial flavour.",
        list_detail : [
            "DAIRY FREE",
            "FAT FREE",
            "LACTOSE FREE",
            "GLUTEN FREE",
            "NO ARTIFICIAL FLAVOR",
            "NO ARTIFICIAL COLOR",
            "NO PRESERVATIVE"
        ],
        thumbnail : "img/product_img/dragon_fruit.png",
        img : [
            "img/product_img/dragon_fruit.png" 
        ],
    },
    
    // Frozen Frappe
    "frappe_thai_tea" : {
        name : "Frappe thai tea",
        href : "frappe_thai_tea",
        class : "frozen_frappes",
        type : "Frozen Frappes",
        detail : "The outstanding Thai Tea flavour blended with coconut milk to be Non - Dairy Frappe'. It is gluten free and suit for Vegan.",
        thumbnail : "img/product_img/frappe_thai_tea.png",
        img : [
            "img/product_img/frappe_thai_tea.png" 
        ],
    },

    "frappe_coconut_milk" : {
        name : "Frappe coconut milk",
        href : "frappe_coconut_milk",
        class : "frozen_frappes",
        type : "Frozen Frappes",
        detail : "The outstanding coconut milk flavour blended with coconut meat to be Non - Dairy Frappe'. It is gluten free and suit for Vegan.",
        thumbnail : "img/product_img/frappe_coconut.png",
        img : [
            "img/product_img/frappe_coconut.png" 
        ],
    },
};

console.log(window.location.pathname);

if(window.location.pathname == '/product_detail.html'){
    const img_slider = document.getElementById('img_slider');
    if(product_list[product_key]) {
        const product = product_list[product_key];

        product.img.forEach((img_url) => {
            const slide = document.createElement('div');
            slide.className = "swiper-slide";
            slide.innerHTML = `
                    <div class="test-box">
                        <img src='${img_url}' alt='${product.name}' />
                    </div>`
                ;
            img_slider.appendChild(slide);
        });
        
        document.querySelector("#product_name").textContent = product.name;
        document.querySelector("#product_type").textContent = product.type;
        document.querySelector("#product_detail").textContent = product.detail;
        
        if (product.list_detail) {
            const listDetailElement = document.getElementById('list_detail');
            product.list_detail.forEach(detail => {
                const li = document.createElement('li');
                li.textContent = detail;
                listDetailElement.appendChild(li);
            });
            console.log(1);
        } else {
            console.log(0);
        }
        
        const swiper = new Swiper('.swiper-container', {
            loop: false,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction'
            }
        });

    } else {
        document.getElementById('product_error').style.display = 'block';
        document.getElementById('product_container').style.display = 'none';
    }

} else {

    // Show all Product
    const product_container = document.querySelector('.products-card-container');
    if(product_container) {

        Object.values(product_list).forEach(item => {
            const el = document.createElement('a');
            el.className = 'product-card ' + item.class;
            el.href = 'product_detail.html?p=' + item.href;
            el.innerHTML = `
                <div class="product-img">
                    <img src="${item.thumbnail}" alt="">
                </div>

                <div class="product-card-detail">
                    <div class="product-card-title">
                        <h5>${item.name}</h5>
                        <span class="card-cate">${item.type}</span>  
                    </div>

                    <p>
                        ${item.detail}
                    </p>
                     
                </div>
            `;
            product_container.appendChild(el);
        });
        // console.error('123');
    } else {
        // console.error('Element with class "products-card-container" not found');
    }
}