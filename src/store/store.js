import axios from "axios";
import { reactive } from "vue";

const categories = reactive({ categories: [] })

const getCategories = () =>
{
    axios({ method: 'GET', url: 'categories?include=subcategory', headers: { 'Authorization': 'Bearer ' + getToken() } })
        .then( response => { return createCategories( response.data.data ) } )
        .catch( error => { error.response })
}

const createCategories = ( catsData ) =>
{
    for ( let i = 0; i < catsData.length; i++ )
    {
        categories.categories.push({
            type: "Category", category_id: catsData[i].id, name: catsData[i].attributes.name
        });
    }
    return categories.categories
}

const getToken = () =>
{
    return localStorage.getItem('token' )
}

export default { categories, getCategories }