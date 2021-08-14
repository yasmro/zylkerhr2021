import React from 'react'

const SectionTitle = ({title="タイトル", description="セクションの概要がここに入りますセクションの概要がここに入りますセクションの概要がここに入りますセクションの概要がここに入ります"}) => {
    return (
        <div className="bg-green-50  mx-auto py-16 px-4 sm:px-6 lg:py-32 lg:px-24">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 lg:text-4xl">
                <span className="block">{title}</span>
            </h2>
            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl lg:mx-0">
                {description}
            </p>
        </div>
    )
}

export default SectionTitle
