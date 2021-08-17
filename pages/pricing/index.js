import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'

const index = () => {
    const [isMonthly, setIsMonthly] = useState(false)

    const editions = [
        {
            name: "無料プラン",
            monthly: 0,
            yearly: 0,
            isRemark: false,
            remarkComment:""
        },
        {
            name: "スタンダードプラン",
            monthly: 1400,
            yearly: 16800,
            isRemark: false,
            remarkComment: ""
        },
        {
            name: "プロフェッショナルプラン",
            monthly: 2000,
            yearly: 24000,
            isRemark: true,
            remarkComment:"おすすめ！"
        },
        {
            name: "エンタープライズプラン",
            monthly: 3600,
            yearly: 50200,
            isRemark: false,
            remarkComment: ""
        }
    ]
    
    return (
        <div>
            <SectionTitle title="料金プラン" description="ジルカーHRは初期費用・オプション料金なし！;1ユーザから利用可能です" />

            <div className="mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-24">
                <section class="text-gray-600 body-font overflow-hidden">
                <div class="container mx-auto">
                    <div class="flex flex-col text-center w-full mb-12">
                        <h2 class="sm:text-4xl text-3xl font-extrabold title-font mb-2 text-gray-900">選べる4つのプラン</h2>
                        <div class="flex mx-auto border-2 border-green-500 rounded overflow-hidden mt-6">
                            <button class={`py-1 px-4 focus:outline-none ${ isMonthly ? "bg-green-500 text-white" : ""}`} onClick={e => setIsMonthly(true)}>月額</button>
                            <button class={`py-1 px-4 focus:outline-none ${ !isMonthly ? "bg-green-500 text-white" : ""}` } onClick={e => setIsMonthly(false)}>年額</button>
                        </div>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        {
                            editions.map((edition) => (
                                <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                                    <div class={`h-full p-6 rounded-lg border-2 flex flex-col relative overflow-hidden ${edition.isRemark && "border-green-500"}`}>
                                    {edition.isRemark && 
                                        <span class="bg-green-500 text-white px-3 py-1 font-bold tracking-widest text-xs absolute right-0 top-0 rounded-bl">{edition.remarkComment}</span>
                                    }
                                    
                                    <h2 class="text-sm tracking-widest title-font mb-3 font-medium">{edition.name}</h2>
                                    <h1 class="text-4xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                        <span>{isMonthly ? edition.monthly.toLocaleString() : edition.yearly.toLocaleString()}</span>
                                        <span class="text-lg ml-2 -mt-4 font-normal text-gray-500">円/{isMonthly ? "月": "年"}</span>
                                    </h1>
                                    <p class="flex items-center text-gray-600 mb-2">
                                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                        </span>Vexillologist pitchfork
                                    </p>
                                    <p class="flex items-center text-gray-600 mb-2">
                                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                        </span>Tumeric plaid portland
                                    </p>
                                    <p class="flex items-center text-gray-600 mb-2">
                                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                        </span>Hexagon neutra unicorn
                                    </p>
                                    <p class="flex items-center text-gray-600 mb-6">
                                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                        </span>Mixtape chillwave tumeric
                                    </p>
                                    <button class={`flex items-center mt-auto text-white border-0 py-2 px-4 w-full focus:outline-none rounded ${edition.isRemark ? "bg-green-500 hover:bg-green-600" : "bg-gray-500 hover:bg-gray-600"}`}>
                                        アクセス
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                    <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
                </section>
            </div>
        </div>
    )
}

export default index
