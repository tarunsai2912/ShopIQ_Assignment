import Layout from '@/components/layout/Layout';

function contact() {
  return (
    <Layout>
      <div className="flex items-center justify-center h-screen bg-gray-100">
      <a
        href="https://tarunsai-rayapureddi-portfolio.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="text-3xl font-semibold text-white bg-blue-700 py-2 px-6 rounded-lg shadow-lg hover:bg-blue-800 transition-all duration-300">
          Visit My Portfolio
        </p>
      </a>
    </div>
    </Layout>
  )
}

export default contact
