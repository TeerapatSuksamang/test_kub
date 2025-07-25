const ice_cream_bars = document.getElementById('ice_cream_bars');
const fruit_shell_sorbets = document.getElementById('fruit_shell_sorbets');
const frozen_frappes = document.getElementById('frozen_frappes');

if (ice_cream_bars || fruit_shell_sorbets || frozen_frappes) {
    document.getElementById('all').addEventListener('click', function() {

        document.querySelectorAll('.category-btn').forEach(function(cate_btn){
            cate_btn.classList.remove('active');
        });

        document.querySelectorAll('.product-card').forEach(function(all_card) {
            all_card.classList.remove('hidden-card');
            all_card.classList.add('show-card');
        });

        this.classList.add('active');

    });
}

// --- ice_cream_bars
if (ice_cream_bars) {
    ice_cream_bars.addEventListener('click', function() {
        document.querySelectorAll('.category-btn').forEach(function(cate_btn){
            cate_btn.classList.remove('active');
        });

        document.querySelectorAll('.product-card').forEach(function(all_card) {
            all_card.classList.add('hidden-card');
            all_card.classList.remove('show-card');
        });

        document.querySelectorAll('.ice_cream_bars').forEach(function(ice_cream_bars){
            ice_cream_bars.classList.remove('hidden-card');
            ice_cream_bars.classList.add('show-card');
            // ice_cream_bars.style.display = 'none';
        });

        this.classList.add('active');
    });
}

// --- fruit_shell_sorbets
if (fruit_shell_sorbets) {
    fruit_shell_sorbets.addEventListener('click', function() {
        document.querySelectorAll('.category-btn').forEach(function(cate_btn){
            cate_btn.classList.remove('active');
        });

        document.querySelectorAll('.product-card').forEach(function(all_card) {
            all_card.classList.add('hidden-card');
            all_card.classList.remove('show-card');
            // all_card.style.display = 'none';
        });

        document.querySelectorAll('.fruit_shell_sorbets').forEach(function(fruit_shell_sorbets){
            fruit_shell_sorbets.classList.remove('hidden-card');
            fruit_shell_sorbets.classList.add('show-card');
        });

        this.classList.add('active');
    });
}

// --- frozen_frappes
if (frozen_frappes) {
    frozen_frappes.addEventListener('click', function() {
        document.querySelectorAll('.category-btn').forEach(function(cate_btn){
            cate_btn.classList.remove('active');
        });

        document.querySelectorAll('.product-card').forEach(function(all_card) {
            all_card.classList.add('hidden-card');
            all_card.classList.remove('show-card');
            // all_card.style.display = 'none';
        });

        document.querySelectorAll('.frozen_frappes').forEach(function(frozen_frappes){
            frozen_frappes.classList.remove('hidden-card');
            frozen_frappes.classList.add('show-card');
        });

        this.classList.add('active');
    });
}

// -------- nav --------
    // ดึง element ทั้งหมดที่มีคลาส nav-link
document.addEventListener('DOMContentLoaded', function() {

    // const current_page = window.location.pathname.split('/').pop();
    // console.log(current_page);

    // document.querySelectorAll('.nav-link').forEach(page_link => {
    //     console.log(1);
        // if(current_page == page_link) {
        // }
    // });

    // fetch('nav.html').then(response => {
    //         const navLinks = document.querySelectorAll('.nav-link');
    //         console.log(navLinks);

    //         // วน loop เพื่อดึงค่า href ของแต่ละ element
    //         navLinks.forEach(link => {
    //             console.log('test');
    //             console.log(link.getAttribute('href'));
    //         });

    //         if (!response.ok) {
    //             throw new Error('Failed to fetch HTML file');
    //         }
    //         return response.text();
    //     })
    //     .then(html => {
    //         document.getElementById('dynamic-nav').innerHTML = html;
    //     })
    //     .catch(error => {
    //         console.error('Error loading HTML:', error);
    //     });

    const hash = window.location.hash;
    if (hash === '#ice_cream_bars') {
        document.getElementById('ice_cream_bars').click();
    } else if (hash === '#fruit_shell_sorbets') {
        document.getElementById('fruit_shell_sorbets').click();
    } else if (hash === '#frozen_frappes') {
        document.getElementById('frozen_frappes').click();
    }

    fetch('nav.html').then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch HTML file');
            }
            return response.text();
        }).then(html => {
            // เพิ่ม Navbar
            const dynamic_nav = document.getElementById('dynamic-nav');
            if (!dynamic_nav) {
                throw new Error('Element with id "dynamic-nav" not found');
            }
            dynamic_nav.innerHTML = html;

            const current_page = (window.location.pathname.split('/').pop() || 'index.html');

            // all navlinks 
            const nav_links = document.querySelectorAll('.nav-link');
            nav_links.forEach(link => {
                // link.getAttribute('href');
                // console.log(link.getAttribute('href'));
                if(current_page == link.getAttribute('href')) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        })
        .catch(error => {
            console.error('Error loading HTML:', error);
        });

    fetch('footer.html').then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch HTML file');
            }
            return response.text();
        }).then(html => {
            const dynamic_footer = document.getElementById('dynamic-footer');
            if (!dynamic_footer) {
                throw new Error('Element with id "dynamic-footer" not found');
            }
            dynamic_footer.innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading HTML:', error);
        });
});