import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'

import Catalogo from '../components/catalogo';

const SearchPage = ({ }) => {
    let { searchTerm } = useParams();

    const [products, setProductos] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/search/q/' + searchTerm)
            .then(res => {
                setProductos(res.data.results);
            });
    }, []);

    return (
        <Catalogo
            products={products}
            category={['Fitness']}
        />
    );
}

export default SearchPage;