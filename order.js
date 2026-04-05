document.getElementById("orderForm").addEventListener("submit", function(e){
    e.preventDefault();

    // Clear errors
    document.querySelectorAll(".error").forEach(e => e.innerText = "");

    let valid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const product = document.getElementById("product").value;
    const flavours = document.getElementById("flavours").value.trim();
    const quantity = document.getElementById("quantity").value;

    // Name validation
    if(name === ""){
        document.getElementById("nameError").innerText = "Name is required";
        valid = false;
    }

    // Email validation
    if(email === ""){
        document.getElementById("emailError").innerText = "Email is required";
        valid = false;
    } else if(!email.includes("@")){
        document.getElementById("emailError").innerText = "Invalid email format";
        valid = false;
    }

    // Product validation
    if(product === ""){
        document.getElementById("productError").innerText = "Please select a product";
        valid = false;
    }

    // Quantity validation
    if(quantity === "" || quantity <= 0){
        document.getElementById("quantityError").innerText = "Enter a valid quantity";
        valid = false;
    }

    // Flavours/Toppings (optional - no error needed)
    // You can still process it if needed later

    // If valid
    if(valid){
        document.getElementById("successMsg").style.display = "block";

        // Optional: show order summary (extra marks 👀)
        console.log("Order Details:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Product:", product);
        console.log("Flavours/Toppings:", flavours);
        console.log("Quantity:", quantity);

        // Reset form
        document.getElementById("orderForm").reset();
    }

});