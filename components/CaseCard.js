import React from 'react'
import Link from 'next/link'

const CaseCard = ({el="0", title="人事労務作業のムダを解消！データの一元化で効率化を実現", company="ジルカーテクノロジー株式会社", name="松本氏", business="BtoB", industries=["建設"]}) => {
    return (
        <Link href={`/cases/${el}`}>
            <div class="cursor-pointer rounded overflow-hidden shadow-lg border-2 hover:border-green-500">
                <img class="w-full" src="https://placehold.jp/600x400.png" alt="Mountain" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{title}</div>
                    <p class="text-gray-700 text-base mr-1">{company}</p>
                    <p class="text-gray-700 text-base">{name}</p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{business}</span>
                    {
                        industries.map((industry) => (
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{industry}</span>
                        ))
                    }
                </div>
            </div>
        </Link>
    )
}


export default CaseCard
