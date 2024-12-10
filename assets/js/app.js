document.addEventListener("DOMContentLoaded", () => {
    // Property data
    const propertyData = [
        {
            wantTo: "buy",
            type: "houses",
            location: "Expo Living Terra Heights",
            title: "EX Terra Heights Building 4-1-105",
            priceAED: "AED 1,496,888",
            priceUSD: "$406,418.67",
            size: "734 SQ.FT / 68.19 SQ.M",
            beds: 1,
            link: "property.html#terra-heights"
        },
        {
            wantTo: "buy",
            type: "houses",
            location: "Dubai Hills Estates - Club Place",
            title: "DE Club Place B-P-P06",
            priceAED: "AED 1,562,888",
            priceUSD: "$424,842.67",
            size: "748 SQ.FT / 69.49 SQ.M",
            beds: 1,
            link: "property.html#club-place"
        },
        {
            wantTo: "buy",
            type: "apartments",
            location: "Dubai Harbour, Dubai",
            title: "Damac Bay 2 | Apartment",
            priceAED: "AED 7,342,000",
            priceUSD: "$1,998,757.60",
            size: "163.96 sq. mt.",
            beds: 3,
            link: "property.html#damac-bay"
        },
        {
            wantTo: "buy",
            type: "villas",
            location: "DAMAC Lagoons, Dubai",
            title: "Malta | Villa",
            priceAED: "Starting At AED 2,929,000",
            priceUSD: "$797,932.70",
            size: "211.24 sq. mt.",
            beds: 4,
            link: "property.html#malta-villa"
        },
        {
            wantTo: "buy",
            type: "villas",
            location: "DAMAC Lagoons, Dubai",
            title: "Marbella | Villa",
            priceAED: "Starting At AED 3,114,000",
            priceUSD: "$847,072.20",
            size: "212.42 sq. mt.",
            beds: 4,
            link: "property.html#marbella-villa"
        },
        {
            wantTo: "buy",
            type: "villas",
            location: "DAMAC Lagoons, Dubai",
            title: "Mykyonos | Villa",
            priceAED: "Starting At AED 3,066,000",
            priceUSD: "$835,651.80",
            size: "212.08 sq. mt.",
            beds: 4,
            link: "property.html#mykonos-villa"
        }
    ];

    const searchForm = document.getElementById("searchForm");
    const searchResults = document.getElementById("searchResults");

    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        performSearch();
    });

    function performSearch() {
        const wantTo = document.getElementById("wantTo").value.toLowerCase();
        const propertyType = document.getElementById("propertyType").value.toLowerCase();
        const location = document.getElementById("location").value.toLowerCase();

        searchResults.innerHTML = ""; // Clear previous results

        const filteredProperties = propertyData.filter((property) => {
            return (
                (wantTo === "any" || property.wantTo === wantTo) &&
                (propertyType === "any" || property.type === propertyType) &&
                (location === "" || property.location.toLowerCase().includes(location))
            );
        });

        if (filteredProperties.length > 0) {
            filteredProperties.forEach((property) => {
                const li = document.createElement("li");
                li.innerHTML = `
                    <a href="${property.link}">
                        <h3>${property.title}</h3>
                        <p>${property.location}</p>
                        <p>${property.priceAED} (${property.priceUSD})</p>
                        <p>${property.size} - ${property.beds} Beds</p>
                    </a>`;
                searchResults.appendChild(li);
            });
        } else {
            searchResults.innerHTML = "<li>No matching properties found.</li>";
        }
    }
});



//dropdown js

$('.dropdown-toggle').on('click', function() {
    $(this).next('.dropdown-menu').slideToggle();
  });
