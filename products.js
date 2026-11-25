
/*
==================================================
GS STEEL FURNITURE - PRODUCT MANAGEMENT SYSTEM
==================================================

Products are managed through Pages CMS.

Product information is loaded from:
data/products.json

Categories:
steel, parlour, school, office
*/


// ================================================
// LOAD PRODUCTS FROM JSON
// ================================================

async function getAllProducts() {

    try {

        const response = await fetch("./data/products.json", {
            cache: "no-store"
        });

        if (!response.ok) {
            throw new Error("Unable to load product data.");
        }

        const products = await response.json();

        if (!Array.isArray(products)) {
            throw new Error("Product data must be an array.");
        }

        return products;

    } catch (error) {

        console.error("Product loading error:", error);

        return [];
    }
}


// ================================================
// GET PRODUCTS BY CATEGORY
// ================================================

async function getProductsByCategory(category) {

    const allProducts = await getAllProducts();

    return allProducts.filter(product =>
        product.category === category
    );
}


// ================================================
// IMAGE PATH HANDLING
// ================================================

function getProductImagePath(imagePath) {

    if (!imagePath) {
        return "";
    }

    // Keep external image URLs unchanged
    if (/^https?:\/\//i.test(imagePath)) {
        return imagePath;
    }

    // Handle image paths saved by Pages CMS
    const cleanPath = imagePath.replace(/^\/+/, "");

    return `./${cleanPath}`;
}


// ================================================
// CREATE PRODUCT DETAIL ROW
// ================================================

function createDetailRow(category, label, value) {

    const row = document.createElement("div");

    row.className = `${category}-detail-row`;

    const labelElement = document.createElement("span");

    labelElement.className = `${category}-detail-label`;

    labelElement.textContent = label;

    const valueElement = document.createElement("span");

    valueElement.className = `${category}-detail-value`;

    valueElement.textContent = value || "Not specified";

    row.appendChild(labelElement);

    row.appendChild(valueElement);

    return row;
}


// ================================================
// CREATE PRODUCT CARD
// ================================================

function createProductCard(product, category) {

    const card = document.createElement("article");

    card.className = `${category}-product-card`;


    // PRODUCT IMAGE

    const imageContainer = document.createElement("div");

    imageContainer.className = `${category}-product-image`;

    if (product.image) {

        const image = document.createElement("img");

        image.src = getProductImagePath(product.image);

        image.alt = product.name || "Furniture product";

        image.loading = "lazy";

        image.onerror = function () {
            imageContainer.textContent = "IMAGE UNAVAILABLE";
        };

        imageContainer.appendChild(image);

    } else {

        imageContainer.textContent = "PRODUCT IMAGE";
    }


    // PRODUCT INFORMATION

    const info = document.createElement("div");

    info.className = `${category}-product-info`;


    // PRODUCT NAME

    const heading = document.createElement("h3");

    heading.textContent = product.name || "Unnamed Product";


    // FEATURED LABEL

    if (product.featured) {

        const featuredLabel = document.createElement("span");

        featuredLabel.className = "product-featured-label";

        featuredLabel.textContent = "Featured";

        info.appendChild(featuredLabel);
    }


    // PRODUCT DETAILS

    const details = document.createElement("div");

    details.className = `${category}-product-details`;

    details.appendChild(
        createDetailRow(category, "Product Name", product.name)
    );

    details.appendChild(
        createDetailRow(category, "Product Code", product.code)
    );

    details.appendChild(
        createDetailRow(category, "Dimensions", product.dimensions)
    );

    details.appendChild(
        createDetailRow(category, "Type", product.type)
    );


    // ASSEMBLE CARD

    info.appendChild(heading);

    info.appendChild(details);

    card.appendChild(imageContainer);

    card.appendChild(info);

    return card;
}


// ================================================
// DISPLAY PRODUCTS ON CATEGORY PAGES
// ================================================

async function renderProducts(category, gridSelector) {

    const productGrid = document.querySelector(gridSelector);

    if (!productGrid) {

        console.error("Product grid not found:", gridSelector);

        return;
    }


    // Loading message

    productGrid.innerHTML = "<p>Loading products...</p>";


    // Retrieve products

    const categoryProducts = await getProductsByCategory(category);

    productGrid.innerHTML = "";


    // Empty category message

    if (categoryProducts.length === 0) {

        const emptyMessage = document.createElement("p");

        emptyMessage.className = "no-products-message";

        emptyMessage.textContent =
            "No products are currently available in this collection. Please contact us for enquiries.";

        productGrid.appendChild(emptyMessage);

        return;
    }


    // Display products

    categoryProducts.forEach(product => {

        const card = createProductCard(product, category);

        productGrid.appendChild(card);
    });

}


// ================================================
// GLOBAL ACCESS
// ================================================

window.GSProducts = {

    getAllProducts,

    getProductsByCategory,

    renderProducts

};
