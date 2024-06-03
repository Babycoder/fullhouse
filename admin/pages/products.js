import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Products() {
  return( 
  <Layout>
    <Link className='bg-gray-200 p-2 rounded-lg' href="/products/new">Add New Product </Link>

  </Layout>);
}
