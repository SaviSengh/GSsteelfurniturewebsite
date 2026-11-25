
/*
==================================================
GS STEEL FURNITURE - CENTRAL PRODUCT MANAGEMENT
==================================================

To add a product:
1. Add a new object inside the products array.
2. Select its category.
3. Enter the product details.
4. Add its image path.

Categories:
- steel
- parlour
- school
- office

Image folders:
- images/steel/
- images/parlour/
- images/school/
- images/office/
*/

// ================================================
// ALL PRODUCTS
// ================================================

const products = [

    // ============================================
    // STEEL FURNITURE
    // ============================================

    {
        category: "steel",
        name: "Product 1",
        code: "Code 1",
        dimensions: "Dimensions 1",
        type: "Type 1",
        image: "",
        description: "",
        featured: false
    },
    {
        category: "steel",
        name: "Product 2",
        code: "Code 2",
        dimensions: "Dimensions 2",
        type: "Type 2",
        image: "",
        description: "",
        featured: false
    },
    {
        category: "steel",
        name: "Product 3",
        code: "Code 3",
        dimensions: "Dimensions 3",
        type: "Type 3",
        image: "",
        description: "",
        featured: false
    },
    {
        category: "steel",
        name: "Product 4",
        code: "Code 4",
        dimensions: "Dimensions 4",
        type: "Type 4",
        image: "",
        description: "",
        featured: false
    },
    {
        category: "steel",
        name: "Product 5",
        code: "Code 5",
        dimensions: "Dimensions 5",
        type: "Type 5",
        image: "",
        description: "",
        featured: false
    },
    {
        category: "steel",
        name: "Product 6",
        code: "Code 6",
        dimensions: "Dimensions 6",
        type: "Type 6",
        image: "",
        description: "",
        featured: false
    },


    // ============================================
    // PARLOUR FURNITURE
    // ============================================

    {
        category: "parlour",
        name: "Product 1",
        code: "Code 1",
        dimensions: "Dimensions 1",
        type: "Type 1",
        image: "",
        description: "",
        featured: false
    },
    {
        category: "parlour",
        name: "Product 2",
        code: "Code 2",
        dimensions: "Dimensions 2",
        type: "Type 2",
        image: "",
        description: "",
        featured: false
    },
    {
        category: "parlour",
        name: "Product 3",
        code: "Code 3",
        dimensions: "Dimensions 3",
        type: "Type 3",
        image: "",
        description: "",
        featured: false
    },
    {
        category: "parlour",
        name: "Product 4",
        code: "Code 4",
        dimensions: "Dimensions 4",
        type: "Type 4",
        image: "",
        description: "",
        featured: false
    },
    {
        category: "parlour",
        name: "Product 5",
        code: "Code 5",
        dimensions: "Dimensions 5",
        type: "Type 5",
        image: "",
        description: "",
        featured: false
    },
    {
        category: "parlour",
        name: "Product 6",
        code: "Code 6",
        dimensions: "Dimensions 6",
        type: "Type 6",
        image: "",
        description: "",
        featured: false
    },


    // ============================================
    // SCHOOL FURNITURE
    // ============================================

    {
        category: "school",
        name: "Product 1",
        code: "Code 1",
        dimensions: "Dimensions 1",
        type: "Type 1",
        image: "",
        description: "",
        featured: false
    },
    {
        category: "school",
        name: "Product 2",
        code: "Code 2",
        dimensions: "Dimensions 2",
        type: "Type 2",
        image: "",
        description: "",
        featured: false
    },
    {
        category: "school",
        name: "Product 3",
        code: "Code 3",
        dimensions: "Dimensions 3",
        type: "Type 3",
        image: "",
        description: "",
        featured: false
    },
    {
        category: "school",
        name: "Product 4",
        code: "Code 4",
        dimensions: "Dimensions 4",
        type: "Type 4",
        image: "",
        description: "",
        featured: false
    },
    {
        category: "school",
        name: "Product 5",
        code: "Code 5",
        dimensions: "Dimensions 5",
        type: "Type 5",
        image: "",
        description: "",
        featured: false
    },
    {
        category: "school",
        name: "Product 6",
        code: "Code 6",
        dimensions: "Dimensions 6",
        type: "Type 6",
        image: "",
        description: "",
        featured: false
    },


    // ============================================
    // OFFICE FURNITURE
    // ============================================

    {
        category: "office",
        name: "Product 1",
        code: "Code 1",
        dimensions: "Dimensions 1",
        type: "Type 1",
        image: "",
        description: "",
        featured: false
    },
    {
        category: "office",
        name: "Product 2",
        code: "Code 2",
        dimensions: "Dimensions 2",
        type: "Type 2",
        image: "",
        description: "",
        featured: false
    },
    {
        category: "office",
        name: "Product 3",
        code: "Code 3",
        dimensions: "Dimensions 3",
        type: "Type 3",
        image: "",
        description: "",
        featured: false
    },
    {
        category: "office",
        name: "Product 4",
        code: "Code 4",
        dimensions: "Dimensions 4",
        type: "Type 4",
        image: "",
        description: "",
        featured: false
    },
    {
        category: "office",
        name: "Product 5",
        code: "Code 5",
        dimensions: "Dimensions 5",
        type: "Type 5",
        image: "",
        description: "",
        featured: false
    },
    {
        category: "office",
        name: "Product 6",
        code: "Code 6",
        dimensions: "Dimensions 6",
        type: "Type 6",
        image: "",
        description: "",
        featured: false
    }

];


// ================================================
// GET PRODUCTS BY CATEGORY
// ================================================

function getProductsByCategory(category) {
    return products.filter(product => product.category === category);
}


// ================================================
// DISPLAY PRODUCTS ON CATEGORY PAGES
// ================================================

function renderProducts(category, gridSelector) {

    const productGrid = document.querySelector(gridSelector);

    if (!productGrid) {
        console.error("Product grid not found:", gridSelector);
        return;
    }

    const categoryProducts = getProductsByCategory(category);

    productGrid.innerHTML = "";

    categoryProducts.forEach(product => {

        // Product card
        const card = document.createElement("article");
        card.className = `${category}-product-card`;

        // Product image
        const imageContainer = document.createElement("div");
        imageContainer.className = `${category}-product-image`;

        if (product.image) {
            const image = document.createElement("img");
            image.src = product.image;
            image.alt = product.name;
            image.loading = "lazy";

            imageContainer.appendChild(image);
        } else {
            imageContainer.textContent = "PRODUCT IMAGE";
        }

        // Product information
        const info = document.createElement("div");
        info.className = `${category}-product-info`;

        const heading = document.createElement("h3");
        heading.textContent = product.name;

        // Product details
        const details = document.createElement("div");
        details.className = `${category}-product-details`;

        const detailFields = [
            ["Product Name", product.name],
            ["Product Code", product.code],
            ["Dimensions", product.dimensions],
            ["Type", product.type]
        ];

        detailFields.forEach(([label, value]) => {

            const row = document.createElement("div");
            row.className = `${category}-detail-row`;

            const labelElement = document.createElement("span");
            labelElement.className = `${category}-detail-label`;
            labelElement.textContent = label;

            const valueElement = document.createElement("span");
            valueElement.className = `${category}-detail-value`;
            valueElement.textContent = value;

            row.appendChild(labelElement);
            row.appendChild(valueElement);

            details.appendChild(row);
        });

        // Assemble product card
        info.appendChild(heading);
        info.appendChild(details);

        card.appendChild(imageContainer);
        card.appendChild(info);

        productGrid.appendChild(card);
    });
}


// ================================================
// MAKE FUNCTIONS AVAILABLE TO CATEGORY PAGES
// ================================================

window.GSProducts = {
    products,
    getProductsByCategory,
    renderProducts
};

