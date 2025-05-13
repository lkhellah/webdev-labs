const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  fetch(url)
    .then((res) => res.json())
    .then((books) => {
      // Remove the loading gif
      const loader = document.querySelector("#loading");
      if (loader) loader.remove();

      // Loop through each book
      books.forEach((book) => {
        const bookDiv = document.createElement("div");

        // Set inner text with book details
        bookDiv.innerHTML = `
          <h3>${book.name}</h3>
          <p><strong>Author:</strong> ${book.authors.join(", ")}</p>
          <p><strong>Published:</strong> ${new Date(
            book.released
          ).getFullYear()}</p>
          <p><strong>Pages:</strong> ${book.numberOfPages}</p>
        `;

        // Apply styles
        bookDiv.style.border = "1px solid #ccc";
        bookDiv.style.borderRadius = "10px";
        bookDiv.style.padding = "15px";
        bookDiv.style.margin = "15px auto";
        bookDiv.style.width = "80%";
        bookDiv.style.backgroundColor = "#f9f9f9";
        bookDiv.style.textAlign = "center";

        // Append to DOM
        app.appendChild(bookDiv);
      });
    })
    .catch((err) => {
      app.innerHTML = `<p class="text-danger">Failed to load books. Please try again later.</p>`;
      console.error("Error fetching data:", err);
    });
};

// Call the function
fetchData(url);
