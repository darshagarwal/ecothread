import { useState } from 'react';
import { Grid, List, Star, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext.tsx';

const StorePage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const { addItem } = useCart();
  const [selectedSizes, setSelectedSizes] = useState<{ [key: number]: string }>({});
  const [selectedColors, setSelectedColors] = useState<{ [key: number]: string }>({});

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'tops', name: 'Tops' },
    { id: 'bottoms', name: 'Bottoms' },
    { id: 'outerwear', name: 'Outerwear' },
    { id: 'accessories', name: 'Accessories' },
  ];

  const products = [
    {
      id: 1,
      name: 'Organic Cotton T-Shirt',
      category: 'tops',
      price: 999,
      originalPrice: 60,
      rating: 4.8,
      reviews: 124,
      image: '/images/t-shirt.png',
      description: 'Soft, comfortable organic cotton t-shirt perfect for everyday wear.',
      colors: ['White', 'Black', 'Navy'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      isNew: true,
      isSale: false,
    },
    {
      id: 2,
      name: "Men's Cotton Kurta",
      category: 'tops',
      price: 1499,
      originalPrice: 60,
      rating: 4.8,
      reviews: 124,
      image: '/images/kurta-men.png',
      description: "Classic and breathable cotton kurta designed for all-day comfort. Ideal for festive occasions or casual outings.",
      colors: ['White', 'Black', 'Navy'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      isNew: true,
      isSale: false,
    },
    {
      id: 3,
      name: "Women's Printed Kurta",
      category: 'tops',
      price: 1499,
      originalPrice: 60,
      rating: 4.8,
      reviews: 124,
      image: '/images/kurta-women1.png',
      description: "Lightweight, vibrant printed kurta with a flattering fit—perfect for daily wear or a stylish day out.",
      colors: ['White', 'Black', 'Navy'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      isNew: true,
      isSale: false,
    },
    {
      id: 4,
      name: "Women's Embroidered Kurta",
      category: 'tops',
      price: 1699,
      originalPrice: 60,
      rating: 4.8,
      reviews: 124,
      image: '/images/kurta-women2.png',
      description: "Elegant and graceful, this soft cotton kurta features delicate embroidery—great for festive gatherings or evening events.",
      colors: ['White', 'Black', 'Navy'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      isNew: true,
      isSale: false,
    },
  ];

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  const handleAddToCart = (product: any) => {
    const size = selectedSizes[product.id] || product.sizes[0];
    const color = selectedColors[product.id] || product.colors[0];
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size,
      color,
    });
  };

  const handleSizeSelect = (productId: number, size: string) => {
    setSelectedSizes(prev => ({ ...prev, [productId]: size }));
  };

  const handleColorSelect = (productId: number, color: string) => {
    setSelectedColors(prev => ({ ...prev, [productId]: color }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Store</h1>
          <p className="text-lg text-gray-600">
            Discover our complete collection of sustainable fashion
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Price Range</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-sm text-gray-600">Under ₹500</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-sm text-gray-600">₹500 - ₹1000</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-sm text-gray-600">Over ₹1000</span>
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Size</h4>
                <div className="grid grid-cols-3 gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <button
                      key={size}
                      className="border border-gray-300 rounded-md py-1 px-2 text-sm text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-3">Color</h4>
                <div className="flex flex-wrap gap-2">
                  {['Black', 'White', 'Gray', 'Navy', 'Brown'].map((color) => (
                    <button
                      key={color}
                      className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-gray-400 transition-colors"
                      style={{ backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' : color.toLowerCase() }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">
                    Showing {filteredProducts.length} products
                  </span>
                </div>
                
                <div className="flex items-center gap-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="newest">Newest</option>
                  </select>
                  
                  <div className="flex border border-gray-300 rounded-md">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product) => (
                <div key={product.id} className={`bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow ${viewMode === 'list' ? 'flex' : ''    }`}>
                  <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                      <div className={`relative w-full ${viewMode === 'list' ? 'h-48' : 'h-64'} flex items-center justify-center bg-white`}>
                        {/* SALE and NEW tags */}
                        {(product.isNew || product.isSale) && (
                          <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
                              {product.isNew && (
                                <span className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded">
                                  NEW
                                </span>
                              )}
                              {product.isSale && (
                                <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
                                  SALE
                                </span>
                              )}
                          </div>
                        )}

                        {/* Product Image */}
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>


                      <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                        <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                      </button>
                  </div>
                  
                  <div className="p-6 flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                    
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                      </div>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-sm text-gray-600">{product.reviews} reviews</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
                        {product.isSale && product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                        )}
                      </div>
                    </div>

                    
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-gray-600">Colors:</span>
                        <div className="flex gap-2">
                          {product.colors.map((color, index) => (
                            <div
                              key={index}
                              className={`w-6 h-6 rounded-full border-2 cursor-pointer transition-all ${
                                selectedColors[product.id] === color || (!selectedColors[product.id] && index === 0)
                                  ? 'border-blue-500 ring-2 ring-blue-200'
                                  : 'border-gray-300 hover:border-gray-400'
                              }`}
                              style={{ backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' : color.toLowerCase() }}
                              title={color}
                              onClick={() => handleColorSelect(product.id, color)}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Sizes:</span>
                        <div className="flex gap-1">
                          {product.sizes.map((size) => (
                            <button
                              key={size}
                              onClick={() => handleSizeSelect(product.id, size)}
                              className={`px-2 py-1 text-xs border rounded transition-colors ${
                                selectedSizes[product.id] === size || (!selectedSizes[product.id] && size === product.sizes[0])
                                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                                  : 'border-gray-300 text-gray-600 hover:border-gray-400'
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default StorePage;