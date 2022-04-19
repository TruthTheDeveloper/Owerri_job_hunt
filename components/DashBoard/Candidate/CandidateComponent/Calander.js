
const Calender = ({week}) => {

    return (
        <div className="h-72 w-80 shadow-xl my-8 mx-auto  border rounded-xl  cursor-pointer bg-green-600 text-white" >
              <h1 className="text-center text-xl my-3">{week}</h1>
              <div className="flex justify-center">
                <div className="flex flex-col mx-auto font-semibold">
                  <h2>Sun</h2>
                  <h2>7</h2> 
                </div>
                <div className="flex flex-col mx-auto font-semibold">
                  <h2>Mon</h2>
                  <h2>1</h2> 
                </div>
                <div className="flex flex-col mx-auto font-semibold">
                  <h2>Tue</h2>
                  <h2>2</h2>
                </div>
                <div className="flex flex-col mx-auto font-semibold">
                  <h2>Wed</h2>
                  <h2>3</h2>
                </div>
                <div className="flex flex-col mx-auto font-semibold">
                  <h2>Thur</h2>
                  <h2>4</h2>
                </div>
                <div className="flex flex-col mx-auto font-semibold">
                  <h2>Fri</h2>
                  <h2>5</h2>
                </div>
              </div>
              <div className="flex justify-center ">
                <div className="flex flex-col mx-auto font-semibold">
                  <h2>Sat</h2>
                  <h2>6</h2>
                </div>
                <div className="flex flex-col mx-auto font-semibold">
                  <h2>Mon</h2>
                  <h2>1</h2> 
                </div>
                <div className="flex flex-col mx-auto font-semibold">
                  <h2>Tue</h2>
                  <h2>2</h2>
                </div>
                <div className="flex flex-col mx-auto font-semibold">
                  <h2>Wed</h2>
                  <h2>3</h2>
                </div>
                <div className="flex flex-col mx-auto font-semibold">
                  <h2>Thur</h2>
                  <h2>4</h2>
                </div>
                <div className="flex flex-col mx-auto font-semibold">
                  <h2>Fri</h2>
                  <h2>5</h2>
                </div>
              </div>
            </div>
    )
}

export default Calender;