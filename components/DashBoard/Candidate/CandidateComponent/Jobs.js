import Image from 'next/image';
const Jobs = ({image, jobTitle, jobDescription, location}) => {

    return (
        <div className="flex bg-white m-4 shadow-xl cursor-pointer">
            <div>
                <Image
                src={image}
                className="rounded-full"
                width={100}
                height={100}
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