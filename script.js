const form = document.getElementById('productForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;

    // Basic validation for empty fields
    if (!name || !price || !description) {
        alert('All fields are required!');
        return;
    }

    // Validate price to ensure it is a positive number
    if (isNaN(price) || price <= 0) {
        alert('Price must be a positive number.');
        return;
    }

    const productData = {
        name,
        price,
        description
    };

    try {
        const response = await fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData),
        });

        
        if (response.ok) {
            const result = await response.json();
            console.log('Product added:', result);

            
            form.reset();

            
            alert('Product added successfully!');
        } else {
            const errorResult = await response.json();
            alert('Failed to add product: ' + errorResult.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong. Please try again.');
    }
});



