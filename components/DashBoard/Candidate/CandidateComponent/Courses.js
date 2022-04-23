import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

const Courses = ({title, time, description}) => {

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
        <>
              <div className="bg-white m-4 rounded-md shadow-xl">
                <p className="font-semibold text-xl py-4 ml-3">{title}</p>
                <p className="py-4 m-3 font-light">{description}
                </p>
                <div className="flex justify-between my-4">
                  <h1 className="font-bold ml-2">Time: {time}</h1>
                  <button className="text-white py-2 px-2 mr-4  rounded-md" style={{backgroundColor:"#14A800"}} onClick={() => {
                    console.log('clicked')
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}>Join Classroom</button>
                </div>
              </div>
        </> 
    )
}

export default Courses;