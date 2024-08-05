document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const closeMenu = document.getElementById("closeMenu");
    const sideMenu = document.getElementById("sideMenu");
    const cartButton = document.getElementById("cartButton");
    const cartCount = document.getElementById("cartCount");
    
    
    
    const contactButton = document.getElementById("contactButton"); 
    const contactCard = document.getElementById("contactCard");
    const closeContactCard = document.getElementById("closeContactCard");


    let cart = [];

    menuToggle.addEventListener("click", () => {
        sideMenu.classList.toggle("show");
        sideMenu.classList.toggle("hidden");
    });

    closeMenu.addEventListener("click", () => {
        sideMenu.classList.add("hidden");
        sideMenu.classList.remove("show");
    });

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const productId = button.getAttribute("data-product-id");
            const productName = button.previousElementSibling.previousElementSibling.textContent;
            const productPrice = parseFloat(button.previousElementSibling.textContent.replace('Price: $', ''));
            
            // Agregar producto al carrito
            cart.push({ id: productId, name: productName, price: productPrice });
            cartCount.textContent = cart.length;

            alert(`${productName} agregado al carrito!`);
        });
    });

    cartButton.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Tu carrito está vacío.");
            return;
        }

        let total = cart.reduce((sum, product) => sum + product.price, 0);
        let productList = cart.map(product => `${product.name} - $${product.price.toFixed(2)}`).join('%0A');

        if (confirm(`Tienes ${cart.length} productos en tu carrito. Total: $${total.toFixed(2)} + Envio. ¿Quieres continuar a WhatsApp para completar la compra?`)) {
            let whatsappURL = `https://wa.me/5492645250735?text=Hola!%20Me%20gustaría%20comprar%20los%20siguientes%20productos:%0A${productList}%0ATotal:%20$${total.toFixed(2)} mas envio `;
            window.location.href = whatsappURL;
        }
    });


    contactButton.addEventListener("click", () => {
        contactCard.style.display = "block";
    });

    closeContactCard.addEventListener("click", () => {
        contactCard.style.display = "none";
    });
});

