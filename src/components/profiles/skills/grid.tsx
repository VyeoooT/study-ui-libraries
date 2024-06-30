interface Props {
    label: string
    imgSrc: string
}

function Grid({ label, imgSrc }: Props) {
    return (
        // grid component layout
        <div className="group flex flex-col items-center justify-center rounded-xl hover:cursor-pointer">
            {/* img */}
            <div className="w-24 h-24 flex justify-center items-center mb-2">
                <img className="object-cover group-hover:scale-110 duration-200" src={imgSrc} alt={label} loading="lazy" />
            </div>

            {/* label */}
            <span className="text-lg text-primary">{label}</span>
        </div>
    )
}

export default Grid
