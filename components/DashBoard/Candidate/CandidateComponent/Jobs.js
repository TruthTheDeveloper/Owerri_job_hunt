import Image from 'next/image';
const Jobs = ({image}) => {

    return (
        <div className="flex bg-white m-4 shadow-xl">
            <div>
                <Image
                src={image}
                className="rounded-full"
                width={100}
                height={100}
                />
            </div>
            <div className="mt-4">
            <h2 className="text-lg font-semibold">Talent Manager</h2>
            <h3>Food n Eat</h3>
            <p>Apapa, lagos, Nigeria (Remote)</p>
            </div>
        </div>
    )
}

export default Jobs;