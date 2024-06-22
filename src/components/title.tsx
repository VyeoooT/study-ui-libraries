interface Props {
    title: string
    description: string
}

function Title({ title, description }: Props) {
    return (
        <div className="flex flex-col gap-4 mb-10">
            <h3 className="text-sm uppercase font-normal text-primary tracking-wide">{title}</h3>

            <h1 className="md:text-5xl text-4xl dark:text-gray-200 font-bold capitalize">{description}</h1>
        </div>
    )
}

export default Title
