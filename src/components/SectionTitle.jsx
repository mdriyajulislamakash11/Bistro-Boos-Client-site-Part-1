

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-3/12 mx-auto my-8 text-center">
            <p className="text-yellow-600 mb-2">---{subHeading}---</p>
            <h2 className="text-4xl uppercase border-y-4 py-4 ">{heading}</h2>
        </div>
    );
};

export default SectionTitle;