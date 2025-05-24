import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import axios from 'axios';
import { API_URL, RAZORPAY_KEY, SITE } from '../constants';

interface PricingPlanProps {
  title: string;
  price: string;
  features: string[];
  description?: string;
  isPopular?: boolean;
  onSelectPlan: (price: string) => void;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ title, price, features, description, isPopular = false, onSelectPlan }) => {
  return (
    <div className={`rounded-xl overflow-hidden ${isPopular
      ? 'bg-gradient-to-b from-blue-500 to-blue-900 border-0 transform scale-105 shadow-xl'
      : 'bg-gray-800 border border-gray-700'
      }`}>
      <div className="p-8">
        <div className='mb-4'>
          <h3 className={`text-2xl font-bold italic text-center  ${isPopular ? 'text-white' : 'text-blue-400'}`}>
            {title}
          </h3>
          {description && <span className="text-white/70 text-sm">{description}</span>}
        </div>
        <div className={`text-3xl font-bold text-center mb-8 ${isPopular ? 'text-white' : 'text-white'}`}>
          ₹{price}
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-start">
              <Check size={16} className={`mr-2 min-w-4 ${isPopular ? 'text-white' : 'text-green-400'}`} />
              <span className={isPopular ? 'text-blue-100' : 'text-gray-300'}><strong>{feature.split(' – ')[0]}</strong> {' – '} {feature.split(' – ')[1]}</span>
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

const PRICING_OPTIONS = {
  "999": "starter",
  "4999": "silver",
  "9999": "gold",
};

const PricingSection: React.FC = () => {
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const [formVisible, setFormVisible] = useState(false);
  const [sdkReady, setSdkReady] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
  });
  const [loading, setLoading] = useState(false);

  // Razorpay SDK loader
  useEffect(() => {
    const loadScript = (src: string): Promise<boolean> => {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });
    };

    loadScript("https://checkout.razorpay.com/v1/checkout.js").then((loaded) => {
      setSdkReady(loaded);
      if (!loaded) console.error("Failed to load Razorpay SDK");
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectPlan = (price: string) => {
    const cleanedPrice = price.replace(/,/g, "");
    setSelectedPrice(cleanedPrice);
    setFormVisible(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!selectedPrice || !sdkReady) {
      alert("Please wait, Razorpay is loading...");
      return;
    }

    const packageType = PRICING_OPTIONS[selectedPrice as keyof typeof PRICING_OPTIONS];
    if (!packageType) {
      alert("Invalid package selection.");
      return;
    }

    try {
      const { data } = await axios.post(`${API_URL}/payment/paymentForm`, {

        name: formData.name,
        email: formData.email,
        phoneNo: formData.phone,
        whatsappNo: formData.whatsapp,
        packageType,
      });

      const amountInPaise = data.order.amount * 100;

      const rzp = new (window as any).Razorpay({
        key: RAZORPAY_KEY,
        amount: amountInPaise,
        currency: "INR",
        name: `${SITE.name} ${SITE.sub}`,
        description: `Payment for ${packageType} package`,
        order_id: data.order.id,
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#16a34a",
        },
        handler: async function (response: any) {
          const verifyRes = await axios.post(`${API_URL}/payment/verifyPayment`, {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });

          if (verifyRes.data.success) {
            alert("Payment successful!");
            setFormVisible(false);
          } else {
            alert("Payment verification failed.");
          }
        },
      });

      rzp.open();
      setLoading(false); // Stop loading when Razorpay opens
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Payment could not be initiated. Try again.");
      setLoading(false); // Stop loading on error
    }

  };

  return (
    <section id="pricing" className="relative bg-gray-950 py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold mb-16 italic">Our Packages</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingPlan
            title="Starter Package"
            price="999"
            description="Get Ready to Launch Your Career!"
            features={[
              "Virtual Counselling Support – Access expert advice anytime, anywhere",
              "Document Verification – We double-check your docs, so you don’t have to stress",
              "Government College Insights – Unlock the best-kept secrets of top colleges",
              "Custom Admission Plan – A roadmap that’s as unique as you are",
              "Winning Strategy – Tailored steps to put you ahead of the pack!",
            ]}
            onSelectPlan={handleSelectPlan}
          />
          <PricingPlan
            title="Silver Package"
            price="4,999"
            description="Elevate Your Game – Go Beyond the Basics!"
            isPopular
            onSelectPlan={handleSelectPlan}
            features={[
              "Government College Seat Allotment – Secure your spot in a top-tier government college",
              "Application Form Filling – We take the paperwork headache off your plate",
              "Cutoff Hacks & Strategy – Know the numbers, make the right moves",
              "Offline College Meeting – Face-to-face with college officials – get the inside scoop",
              "100% Money-Back Guarantee – We don’t just promise success, we deliver it – or your money back!",
            ]}
          />
          <PricingPlan
            title="Golden Package"
            price="9,999"
            description="The VIP Experience – Guaranteed College Placement!"
            onSelectPlan={handleSelectPlan}
            features={[
              "100% Government College Seat Guaranteed – Your dream college, locked in!",
              "Full-Team Expert Counselling – We’ll be by your side every step of the way",
              "Top Government College Options – Only the best, no compromises",
              "Power Meetings with Colleges – Deep dive planning and direct college interaction",
              "100% Money-Back Guarantee – Zero risk, all reward!",
              "Flawless Application Form Filling – We make sure every detail is perfect",
            ]}
          />
        </div>

        {formVisible && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
            <div className="bg-white text-black rounded-xl shadow-2xl p-8 w-full max-w-lg relative animate-fadeIn">
              <button disabled={loading}
                className="absolute top-4 right-4 text-gray-700 hover:text-black transition"
                onClick={() => setFormVisible(false)}
              >
                ✕
              </button>
              <h3 className="text-2xl font-semibold mb-6 text-center">Enter Your Details</h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                {["name", "email", "phone", "whatsapp"].map((field) => ( // Make input disabled when loading
                  <div key={field}>
                    <label htmlFor={field} className="block text-sm font-medium mb-1 capitalize text-start">
                      {field === "whatsapp" ? "WhatsApp Number" : field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      id={field}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                ))}
                <div className="font-semibold text-lg">
                  Price: ₹{Number(selectedPrice).toLocaleString()}
                </div>
                <button
                  type="submit" disabled={loading}
                  className={`w-full py-3 mt-2 text-white rounded-md transition font-semibold ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
                >
                  {loading && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.907l2-2.616zm10-5.291a7.962 7.962 0 01-2 5.291l2 2.616A7.962 7.962 0 0120 12h-4z"></path></svg>}
                  Pay Now
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingSection;