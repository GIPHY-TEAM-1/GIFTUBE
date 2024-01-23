import { categories } from '../common/constants.js';

export const toCategoriesView = async () => {
    const response = await fetch(categories);
    const json = await response.json();
    const typeOfCategories = json.data;
    // console.log(typeOfCategories)

    const categoryNames = typeOfCategories.map(name => (name.name[0].toUpperCase() + name.name.slice(1)));
    const subcategories = typeOfCategories.map(sub => sub.subcategories);
    console.log(subcategories);
    return `
    <div class="categories-view" data-page="categories">
    ${categoryNames.map(c => showCategories(c)).join('\n')}
    </div>
    `;
};

export const showCategories = (category) => {
    return `
    <div class="category-name">
       <h3>${category}</h3>
    </div>
    `;
};