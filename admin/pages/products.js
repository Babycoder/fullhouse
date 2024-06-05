import Layout from '@/components/Layout';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('/api/products').then((response) => setProducts(response.data));
  }, []);

  return (
    <Layout>
      <Link className="bg-gray-200 p-2 rounded-lg" href="/products/new">
        Add New Product
      </Link>
      <table className='basic mt-4'>
        <thead>
          <tr>
            <td>Product name</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td>{product.title}</td>
              <td>button</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}
