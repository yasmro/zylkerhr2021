import React from 'react'

const NewsList = () => {
    return (
        <section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
                <div class="-my-8 divide-y-2 divide-gray-100">
                <div class="py-8 md:flex md:flex-wrap md:flex-nowrap">
                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span class="font-semibold title-font text-gray-700">2021年 9月 12日</span>
                    </div>
                    <div class="md:flex-grow">
                        <h2 class="text-md lg:text-xl font-medium text-gray-900 title-font mb-2">ウェビナー情報更新！</h2>
                    </div>
                </div>
                <div class="py-8 md:flex md:flex-wrap md:flex-nowrap">
                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span class="font-semibold title-font text-gray-700">2021年 8月 27日</span>
                    </div>
                    <div class="md:flex-grow">
                        <h2 class="text-md lg:text-xl font-medium text-gray-900 title-font mb-2">メディア出演のお知らせ</h2>
                    </div>
                </div>
                <div class="py-8 md:flex md:flex-wrap md:flex-nowrap">
                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span class="font-semibold title-font text-gray-700">2021年 8月 12日</span>
                    </div>
                    <div class="md:flex-grow">
                        <h2 class="text-md lg:text-xl font-medium text-gray-900 title-font mb-2">事例情報を追加いたしました</h2>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default NewsList
