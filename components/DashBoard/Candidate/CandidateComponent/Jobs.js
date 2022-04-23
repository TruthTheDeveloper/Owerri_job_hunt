import Image from 'next/image';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
const Jobs = ({image, jobTitle, jobDescription, location}) => {

    const config = {
        public_key: 'FLWPUBK-d2542a2ff7622c1994ace0b074b9a6ea-X',
        tx_ref: Date.now(),
        amount: 10000,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: 'user@gmail.com',
          phonenumber: '07064586146',
          name: 'joel ugwumadu',
        },
        customizations: {
            title: 'Pay for course',
            description: 'Payment owerri jobhunt course',
          logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
      };
    
      const handleFlutterPayment = useFlutterwave(config);

    return (
        <div className="flex bg-white m-4 shadow-xl cursor-pointer">
            <div>
                <Image
                src={image}
                className="rounded-full"
                width={100}
                height={100}
                alt="logo"
                />
            </div>
            <div className="mt-4">
            <h2 className="text-lg font-semibold">{jobTitle}</h2>
            <h3>{jobDescription}</h3>
            <p>{location}</p>
            </div>
        </div>
    )
}

export default Jobs;