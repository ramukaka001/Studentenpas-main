import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import axios from 'axios';

interface PricingPlanProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  onSelectPlan: (price: string) => void;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ title, price, features, isPopular = false, onSelectPlan }) => {
  return (
    <div className={`rounded-xl overflow-hidden ${isPopular
        ? 'bg-gradient-to-b from-blue-500 to-blue-900 border-0 transform scale-105 shadow-xl'
        : 'bg-gray-800 border border-gray-700'
      }`}>
      <div className="p-8">
        <h3 className={`text-2xl font-bold italic text-center mb-4 ${isPopular ? 'text-white' : 'text-blue-400'}`}>
          {title}
        </h3>
        <div className={`text-3xl font-bold text-center mb-8 ${isPopular ? 'text-white' : 'text-white'}`}>
          ₹{price}
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check size={16} className={`mr-2 ${isPopular ? 'text-white' : 'text-green-400'}`} />
              <span className={isPopular ? 'text-blue-100' : 'text-gray-300'}>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <button
            className={`w-full py-3 rounded-md font-medium transition ${isPopular
                ? 'bg-white text-blue-600 hover:bg-gray-100'
                : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            onClick={() => onSelectPlan(price)} // On click, set selected price
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

const PricingSection: React.FC = () => {
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: ''
  });
  const [sdkReady, setSdkReady] = useState(false); 

  // Load Razorpay SDK on component mount
  const loadScript = (src: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    // Load Razorpay SDK on component mount
    loadScript("https://checkout.razorpay.com/v1/checkout.js").then((loaded) => {
      setSdkReady(loaded);
      if (!loaded) {
        console.error("Razorpay SDK failed to load.");
      }
    });
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const cleanedPrice = selectedPrice?.replace(/,/g, '');
    
    const packageMap: { [key: string]: string } = {
      "999": "starter",
      "4999": "silver",
      "9999": "gold",
    };
    
    const packageType = packageMap[cleanedPrice!]; 
  
    try {
      const { data } = await axios.post('http://localhost:3000/api/payment/paymentForm', {
        name: formData.name,
        email: formData.email,
        phoneNo: formData.phone,
        whatsappNo: formData.whatsapp,
        packageType,
      });
  
      // Log the order amount to debug
      console.log("Order Amount from Backend:", data.order.amount);
  
      if (!sdkReady) {
        alert("Please wait, payment SDK is still loading...");
        return;
      }
  
      const amountInPaise = data.order.amount * 100; // Multiply by 100 to convert INR to Paise
  
      const options = {
        key: 'rzp_test_BLFX3LFqsUlSeD',
        amount: amountInPaise,  // Amount in paise
        currency: "INR",
        name: "Career Packages",
        description: "Payment for " + packageType + " package",
        order_id: data.order.id,
        handler: async function (response: any) {
          const verifyRes = await axios.post('http://localhost:3000/api/payment/verifyPayment', {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });
  
          if (verifyRes.data.success) {
            alert("Payment successful!");
          } else {
            alert("Payment verification failed.");
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#3399cc",
        },
      };
  
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
  
    } catch (error) {
      console.error("Payment initiation failed:", error);
      alert("Payment failed to initiate.");
    }
  };
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSelectPlan = (price: string) => {
    const formattedPrice = price.replace(/,/g, ''); 
    setSelectedPrice(formattedPrice); 
    setFormVisible(true);
  };
  

  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center italic mb-16">
          Our Packages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingPlan
            title="Starter Package"
            price="999"
            features={[
              'Basic Career Assessment',
              'Basic Career Assessment',
              'Email Support',
              'Email Support',
              'Career Report',
              'Career Report',
            ]}
            onSelectPlan={handleSelectPlan}
          />
          
          <PricingPlan
            title="Silver Package"
            price="4,999"
            features={[
              'Advanced Career Assessment',
              'Advanced Career Assessment',
              'Email & Phone Support',
              'Email & Phone Support',
              'Detailed Career Report',
              'Detailed Career Report',
            ]}
            isPopular={true}
            onSelectPlan={handleSelectPlan}
          />
          
          <PricingPlan
            title="Gold Package"
            price="9,999"
            features={[
              'Comprehensive Career Assessment',
              'Comprehensive Career Assessment',
              'Dedicated Support',
              'Dedicated Support',
              'In-depth Career Report',
              'In-depth Career Report',
            ]}
            onSelectPlan={handleSelectPlan}
          />
        </div>

        {formVisible && (
          <div className="mt-16 p-8 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-6">Enter Your Details</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-lg font-medium">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="whatsapp" className="block text-lg font-medium">WhatsApp Number</label>
                <input
                  type="text"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <p className="text-lg font-medium">Price: ₹{selectedPrice}</p>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-green-500 text-white rounded-md"
              >
                Pay Now
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingSection;
