import Layout from '@/components/layout/Layout';
import { ShoppingBag, Truck, Headphones, Shield } from 'lucide-react';

const features = [
  {
    icon: ShoppingBag,
    title: 'Wide Selection',
    description: 'Browse through thousands of products across multiple categories'
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Get your orders delivered to your doorstep within 2-3 business days'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our customer service team is available round the clock to assist you'
  },
  {
    icon: Shield,
    title: 'Secure Shopping',
    description: 'Shop with confidence with our secure payment system'
  }
];

export default function AboutPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About ShopIQ</h1>
          <p className="text-lg text-muted-foreground">
            Your one-stop destination for all your shopping needs. We provide high-quality
            products at competitive prices with exceptional customer service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-card rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded with a vision to revolutionize online shopping, ShopNext has grown
              from a small startup to one of the leading e-commerce platforms. Our journey
              began with a simple idea: to provide customers with a seamless shopping
              experience and access to the best products from around the world.
            </p>
            <p className="text-muted-foreground">
              Today, we serve millions of customers and work with thousands of sellers
              to bring you an unparalleled shopping experience. Our commitment to
              quality, convenience, and customer satisfaction remains at the heart of
              everything we do.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070"
              alt="Team working"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}