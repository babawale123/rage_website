import React,{ useState } from 'react'
import Navbar from '../component/Navbar'
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";


const Donation = () => {
    const [amount, setAmount] = useState(0);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const config = {
        public_key: "FLWPUBK_TEST-7a26269bfe1acb05035bda1a3c912190-X",
        tx_ref: Date.now(),
        amount: amount,
        currency: "NGN",
        payment_options: "card",
        customer: {
          email: email,
          phone_number: phone,
          name: name,
        },
        customizations: {
          title: "Donation RAGE NGO",
          description: "Donation",
          logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
        },
      };
    
      const handleFlutterPayment = useFlutterwave(config);


  return (
    <div>
       <Navbar />
       <div className='w-full py-16 px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col item-center'>
            <div>
                <h1 className='text-3xl font-bold uppercase tracking-wide'>Donation</h1>
                <p className='pt-2 text-gray-400 text-justify text-md mr-6 font-semibold'>
                    <span>To make Donation please follow the steps</span>
                    <span className='block text-bold text-black'>Step one</span>
                    <span className='block'>You can send your donations through transfer to any of the account below</span>

                    <span className='block text-bold'>Account name : Rights and Aid Group for Education</span>
                    <span className='block text-bold'>Account Number : 0404553344</span>
                    <span className='block text-bold'>Bank : Access bank</span>

                    <span className='block text-bold text-black'>Step two</span>
                    <span className='block text-bold'>Click on the link below to make a Donation</span>
                    <a  href="https://sandbox-flw-web-v3.herokuapp.com/donate/enwydxgwnpxq" className='block text-bold'>https://sandbox-flw-web-v3.herokuapp.com/donate/enwydxgwnpxq</a>

                    <span className='block text-bold text-black'>Step three</span>
                    <span className='block text-bold'>You can fill the form by the right side of the screen to make a donatio and click on the donata button</span>
                   

                    

                    
                </p>
            </div>                
        </div>

        <div className='text-gray-600 mt-10'>

        <div className="flex flex-col space-y-4 items-center">
        <input
            type="number"
            required
            placeholder="Amount"
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            onChange={(e) => setAmount(e.target.value)}
        />
        <input
            type="email"
            required
            placeholder="Email"
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            onChange={(e) => setEmail(e.target.value)}
        />
        <input
            type="text"
            required
            placeholder="Name"
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            onChange={(e) => setName(e.target.value)}
        />
        <input
            type="tel"
            placeholder="Phone"
            required
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            onChange={(e) => setPhone(e.target.value)}
        />
    
        <button
            onClick={() =>
                handleFlutterPayment({
                    callback: (response) => {
                        console.log(response);
                        closePaymentModal();
                    },
                    onClose: () => {},
                })
            }
            className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'
        >
            Donate
        </button>
    </div>
    
            
        </div>
        </div>
       </div>
    </div>
  )
}

export default Donation