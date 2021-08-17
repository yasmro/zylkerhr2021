import React from 'react'

const SectionTitle = ({title="タイトル", enTitle="Webinars", description="セクションの概要がここに入りますセクションの概要がここに入りますセクションの概要がここに入りますセクションの概要がここに入ります"}) => {
    return (
        <div className="bg-primary-50 mx-auto py-16 px-4 sm:px-6 lg:py-32 lg:px-24 text-center lg:text-left">
            <h2 className="ml-4 lg:ml-1 text-sm text-primary-600 lg:text-lg mb-6" style={{"letterSpacing": "1rem"}}>
                <span className="block">{enTitle.toUpperCase()}</span>
            </h2>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 lg:text-5xl">
                <span className="block">{title}</span>
            </h2>
            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                {description.split(";").map((sentence) => (
                    <span className="inline-block">{sentence}</span>
                ))}
            </p>
        </div>
    )
}

export default SectionTitle
