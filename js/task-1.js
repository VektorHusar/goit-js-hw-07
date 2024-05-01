const categoriesList = document.querySelector("#categories");

const items = categoriesList.querySelectorAll("li.item");

const categoriesCount = items.length;
console.log(`Number of categories: ${categoriesCount}`);

items.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    const categoryItemsCount = item.querySelectorAll('ul > li').length;
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryItemsCount}`);
});

