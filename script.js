const menuData = [
    {
        id: 1,
        name: "Bakmi Chili Oil",
        category: "makanan",
        mood: ["pedas", "kenyang"],
        price: 15000,
        badge: "🔥 Bestseller",
        desc: "Bakmi kenyal disiram chili oil khas Elevenz dengan topping ayam cincang & pangsit renyah.",
        img: "dish_bakmi_chili_oil.jpg"
    },
    {
        id: 2,
        name: "Dimsum Mentai",
        category: "makanan",
        mood: ["pedas"],
        price: 15000,
        badge: "✨ Favorite",
        desc: "4 pcs Dimsum ayam lembut dengan saus Mentai torch yang creamy dan gurih pedas.",
        img: "dish_dimsum_mentai.jpg"
    },
    {
        id: 3,
        name: "Mie Ayam Elevenz",
        category: "makanan",
        mood: ["kenyang"],
        price: 12000,
        badge: "Classic",
        desc: "Mie ayam resep tradisional dengan bumbu kecap gurih, dan kuah kaldu segar.",
        img: "https://www.dapurkobe.co.id/wp-content/uploads/mie-ayam-jamur.jpg"
    },
    {
        id: 4,
        name: "Nasi Goreng Spesial",
        category: "makanan",
        mood: ["kenyang", "pedas"],
        price: 18000,
        badge: "Kenyang",
        desc: "Nasi goreng bumbu rempah rica/original disajikan dengan telur ceplok dan kerupuk.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGfvjaT-UDD5LYo1nFfI_SDNE2mHIHbIEbx3IvPZnCa-jM-_tct79jnuUH&s=10"
    },
    {
        id: 5,
        name: "Omurice Japanese Style",
        category: "makanan",
        mood: ["kenyang"],
        price: 15000,
        badge: "Kids Favorite",
        desc: "Nasi goreng butter dibungkus telur omelet lembut khas Jepang dengan saus.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8vkw2UULIgYwi8MESVL9fT4Ro4hfqb4TG5JFpcahOlQoGqm0dldQfy6g&s=10"
    },
    {
        id: 6,
        name: "Milky Bun Thailand",
        category: "dessert",
        mood: ["manis"],
        price: 18000,
        badge: "👑 Top Dessert",
        desc: "Roti lembut bertabur butter cream lumer dan susu bubuk manis melimpah.",
        img: "dish_milky_bun_thailand.jpg"
    },
    {
        id: 7,
        name: "Tiramisu Tres Leches",
        category: "dessert",
        mood: ["manis"],
        price: 20000,
        badge: "Must Try",
        desc: "Sponge cake super lembut direndam 3 jenis susu manis berpadu aroma kopi espresso tulus.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQpsU8FRHvk8EVWd8rQBii6kSnSBgAAivyNmVWJSWGpX6KahVbK0W9y_wr&s=10"
    },
    {
        id: 8,
        name: "Es Milo",
        category: "minuman",
        mood: ["segar", "manis"],
        price: 10000,
        badge: "Viral",
        desc: "Es serut kental Milo pekat bertabur bubuk coklat dan choco milo cube.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJABsUd8DG7GQv68pYqArH3w7CS_bJ2MibOk3NsKjQrOo-AjZx9z2vNwc&s=10"
    },
    {
        id: 9,
        name: "Es Kuwut Bali",
        category: "minuman",
        mood: ["segar"],
        price: 10000,
        badge: "🍹 Super Segar",
        desc: "Minuman perasan jeruk nipis segar, serutan kelapa muda, melon, dan biji selasih.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaIaGImLL-OoBvGLRMqzlVefiwXW3c8SqJTZptTsB1NobqUVEqdl7mbxXe&s=10"
    },
    {
        id: 10,
        name: "Milk Tea",
        category: "minuman",
        mood: ["segar", "manis"],
        price: 12000,
        badge: "Favorit",
        desc: "Seduhan teh hitam khas berpadu dengan susu creamy yang pas dan tidak bikin enek.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY-v-LcwBLsApvheU10QddCA6hZLHCcB0jfywsM10TWg&s=10"
    },
    {
        id: 11,
        name: "Matcha Latte",
        category: "minuman",
        mood: ["segar", "manis"],
        price: 12000,
        badge: "Premium",
        desc: "Bubuk Uji Matcha autentik dipadu dengan fresh milk dingin yang wangi dan creamy.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqmDVnpKiATvVgJ1rAugBOgFqkPCXojzYeYNw6OIVPNF4Y9f8XpnGxjPgQ&s=10"
    },
    {
        id: 12,
        name: "Iced Americano",
        category: "minuman",
        mood: ["segar"],
        price: 10000,
        badge: "Coffee",
        desc: "Espresso shot ganda dari biji kopi pilihan untuk kesegaran stamina seharian.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOqDglPlsvDiVLnWIvAs3Z8H_-CvDda1GsVc2s0k_qpA&s=10"
    },
    {
        id: 13,
        name: "Es Teh (Manis / Tawar)",
        category: "minuman",
        mood: ["segar"],
        price: 5000,
        badge: "Hemat",
        desc: "Teh manis/tawar dingin penyegar dahaga klasik pelengkap makan siangmu.",
        img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80"
    }
];

let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    renderMenu(menuData);
    setupEventListeners();
});

function renderMenu(items) {
    const menuGrid = document.getElementById('menu-grid');
    menuGrid.innerHTML = '';

    if (items.length === 0) {
        menuGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--light-text);">Tidak ada menu yang sesuai dengan pilihan ini.</p>`;
        return;
    }

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
            <div class="menu-img-wrapper">
                <img src="${item.img}" alt="${item.name}" class="menu-img">
                <span class="item-badge">${item.badge}</span>
            </div>
            <div class="menu-details">
                <h3 class="menu-title">${item.name}</h3>
                <p class="menu-desc">${item.desc}</p>
                <div class="menu-bottom">
                    <span class="menu-price">Rp ${item.price.toLocaleString('id-ID')}</span>
                    <button class="add-btn" onclick="addToCart(${item.id})">
                        <i class="fa-solid fa-plus"></i> Tambah
                    </button>
                </div>
            </div>
        `;
        menuGrid.appendChild(card);
    });
}

function setupEventListeners() {
    const categoryBtns = document.querySelectorAll('.tab-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            const category = e.target.dataset.category;
            if (category === 'all') {
                renderMenu(menuData);
            } else {
                const filtered = menuData.filter(item => item.category === category);
                renderMenu(filtered);
            }
        });
    });

    const moodBtns = document.querySelectorAll('.mood-btn');
    moodBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            moodBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            const mood = e.target.dataset.mood;
            if (mood === 'all') {
                renderMenu(menuData);
            } else {
                const filtered = menuData.filter(item => item.mood.includes(mood));
                renderMenu(filtered);
            }
        });
    });
}

function addToCart(itemId) {
    const item = menuData.find(m => m.id === itemId);
    const cartKey = `item_${itemId}`;
    const existing = cart.find(c => c.cartKey === cartKey);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ 
            cartKey: cartKey,
            id: item.id,
            name: item.name,
            originalPrice: item.price,
            price: item.price,
            isCombo: false,
            qty: 1 
        });
    }

    updateCartUI();
}

function addComboToCart() {
    const comboKey = "combo_bakmi_milktea";
    const existingCombo = cart.find(c => c.cartKey === comboKey);

    if (existingCombo) {
        existingCombo.qty += 1;
    } else {
        cart.push({
            cartKey: comboKey,
            id: 999,
            name: "Paket Combo (Bakmi Chili Oil + Milk Tea)",
            originalPrice: 27000, 
            price: 25000,      
            isCombo: true,
            qty: 1
        });
    }

    updateCartUI();
    alert("🎉 Paket Combo Hemat (Bakmi Chili Oil + Milk Tea) berhasil ditambahkan! Anda hemat Rp 2.000!");
}

function updateQty(cartKey, change) {
    const itemIndex = cart.findIndex(c => c.cartKey === cartKey);
    if (itemIndex > -1) {
        cart[itemIndex].qty += change;
        if (cart[itemIndex].qty <= 0) {
            cart.splice(itemIndex, 1);
        }
    }
    updateCartUI();
}

function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    document.getElementById('cart-count').innerText = totalCount;
    document.getElementById('cart-total').innerText = `Rp ${totalPrice.toLocaleString('id-ID')}`;
    document.getElementById('modal-cart-total').innerText = `Rp ${totalPrice.toLocaleString('id-ID')}`;

    const cartList = document.getElementById('cart-items-list');
    cartList.innerHTML = '';

    if (cart.length === 0) {
        cartList.innerHTML = `<p style="text-align: center; color: var(--light-text); padding: 20px;">Keranjang belanja kamu masih kosong.</p>`;
        return;
    }

    cart.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';

        let priceDisplay = `Rp ${item.price.toLocaleString('id-ID')}`;
        let badgeTag = '';

        if (item.isCombo) {
            priceDisplay = `<span style="text-decoration: line-through; color: #888; font-size: 0.8em; margin-right: 4px;">Rp ${item.originalPrice.toLocaleString('id-ID')}</span> <b style="color: var(--primary);">Rp ${item.price.toLocaleString('id-ID')}</b>`;
            badgeTag = `<span style="background: var(--primary); color: #fff; font-size: 0.7rem; padding: 2px 6px; border-radius: 4px; margin-left: 6px;">Hemat Rp ${(item.originalPrice - item.price).toLocaleString('id-ID')}</span>`;
        }

        itemEl.innerHTML = `
            <div>
                <strong>${item.name}</strong> ${badgeTag}<br>
                <small>${priceDisplay}</small>
            </div>
            <div class="cart-item-qty">
                <button class="qty-btn" onclick="updateQty('${item.cartKey}', -1)">-</button>
                <span>${item.qty}</span>
                <button class="qty-btn" onclick="updateQty('${item.cartKey}', 1)">+</button>
            </div>
        `;
        cartList.appendChild(itemEl);
    });
}

function toggleCartModal() {
    const modal = document.getElementById('cart-modal');
    modal.classList.toggle('active');
}

function sendToWhatsApp() {
    if (cart.length === 0) {
        alert("Pilih minimal satu menu terlebih dahulu!");
        return;
    }

    const phoneNumber = "6281234567890";
    let message = "Halo Elevenz, saya ingin memesan:\n\n";
    let totalSavings = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        message += `${index + 1}. ${item.name} (${item.qty}x) = Rp ${itemTotal.toLocaleString('id-ID')}\n`;
        if (item.isCombo) {
            totalSavings += (item.originalPrice - item.price) * item.qty;
        }
    });

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    
    if (totalSavings > 0) {
        message += `\n🎉 *Total Hemat Promo: Rp ${totalSavings.toLocaleString('id-ID')}*\n`;
    }

    message += `*Total Pembayaran: Rp ${totalPrice.toLocaleString('id-ID')}*\n\n`;
    message += "Mohon diproses ya, terima kasih!";

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}