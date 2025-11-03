// Selecting necessary DOM elements
const songInput = document.getElementById("songInput");
const urlInput = document.getElementById("urlInput");
const songList = document.getElementById("songList");
const searchButton = document.getElementById('searchButton');
const cartList = document.getElementById("cartList");
const clearCartBtn = document.getElementById("clearCartBtn");
const checkoutBtn = document.getElementById('checkoutBtn');



// Start of adding song to list and cart function
searchButton.addEventListener("click", function () {
    const songName = songInput.value;
    const songURL = urlInput.value;
    if (!songName || !songURL) {
        alert("Please enter Song and URL.");
        return;
    }


    const li = document.createElement("li");
    li.className = "song-item";

    const songText = document.createTextNode(`${songName}`);
    li.appendChild(songText);

    // Create clickable link for URL
    const link = document.createElement("a");
    link.href = songURL;
    link.textContent = songURL;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    li.appendChild(link);


    const actions = document.createElement("div");
    actions.className = "item-actions"

    // Add to cart button
    const addToCartBtn = document.createElement("button");
    addToCartBtn.textContent = "Add to Cart";
    addToCartBtn.className = "add-to-cart-btn";


    // Adding to cart functionality

    addToCartBtn.addEventListener("click", function () {
        const cartItem = document.createElement("li");
        cartItem.className = "cart-item";

        const cartSongText = document.createTextNode(`${songName}`);
        cartItem.appendChild(cartSongText);

        // Create clickable link for URL in cart
        const cartLink = document.createElement("a");
        cartLink.href = songURL;
        cartLink.textContent = songURL;
        cartLink.target = "_blank";
        cartLink.rel = "noopener noreferrer";
        cartItem.appendChild(cartLink);

        cartList.appendChild(cartItem);

        // Delete button for cart item
        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.className = "delete-btn";
        delBtn.style.backgroundColor = "#FF6B6B";


        delBtn.addEventListener("click", function () {
            cartList.removeChild(cartItem);
            updateCartCount(); 
        });
        cartItem.appendChild(delBtn);


        updateCartCount(); 
    });


    actions.appendChild(addToCartBtn);


    // Delete button functionality
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "delete-btn";
    delBtn.addEventListener("click", function () {
        songList.removeChild(li);
    });


    actions.appendChild(delBtn);
    li.appendChild(actions);



    songList.appendChild(li);
    songInput.value = "";
    urlInput.value = "";
});



// Checkout and Clear Cart functionality
checkoutBtn.addEventListener('click', function() { 
    if (cartList.children.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Thank you for your purchase!');
        cartList.innerHTML = '';
        updateCartCount(); 
    }
});


clearCartBtn.addEventListener('click', function () {
    if (cartList.children.length === 0) {
        alert('Your cart is already empty!');
        return;
    }
    cartList.innerHTML = '';
    updateCartCount();
});


// Function to update cart item count
function updateCartCount() {
    const count = cartList.children.length;
    document.querySelector('#totalItemCount span').textContent = count;
}


//dark mode toggle
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
    darkmode = 'active';
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', 'inactive');
    darkmode = 'inactive';
}

// ✅ Fix: make sure only "active" enables dark mode
if (darkmode === 'active') {
    enableDarkmode();
} else {
    disableDarkmode();
}

themeSwitch.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});
