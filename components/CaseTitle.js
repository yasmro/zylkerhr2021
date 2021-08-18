import React from 'react'

const CaseTitle = ({title="人事労務作業のムダを解消！データの一元化で効率化を実現", companyName="ジルカーテクノロジー", contactName="松本氏", industries=["建設"], business="BtoB"}) => {
    return (
        <>
            <div className="bg-gradient-to-r from-primary-600 to-primary-800  mx-auto py-16 px-6 lg:py-16 lg:px-36" >
                <h2 className="text-2xl font-extrabold tracking-tight text-white lg:text-4xl">
                    <span className="block">{title}</span>
                </h2>
                <p class="mt-3 mb-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl lg:mx-0">
                    {companyName}
                    {contactName}
                </p>
                <span class="inline-block border-2 border-secondary-400 bg-secondary-400 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">{business}</span>
                {
                    industries.map(industry => (
                        <span class="inline-block border-2 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{industry}</span>
                    ))
                }
                
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12 py-12 px-4 lg:px-36 ">
                
                <table className="table-fixed">
                    <h3 className="text-xl font-extrabold tracking-tight mb-4">
                        <span className="block">{companyName}</span>
                    </h3>
                    <tbody>
                        <tr class="border-t border-b">
                            <td class="px-4 py-2">事業内容</td>
                            <td class="px-4 py-2">XXXXXX</td>
                        </tr>
                        <tr class="border-t border-b">
                            <td class="px-4 py-2">設立</td>
                            <td class="px-4 py-2">1982年9月</td>
                        </tr>
                        <tr class="border-t border-b">
                            <td class="px-4 py-2">ビジネス</td>
                            <td class="px-4 py-2">{business}</td>
                        </tr>
                        <tr class="border-t border-b">
                            <td class="px-4 py-2">従業員数</td>
                            <td class="px-4 py-2">500</td>
                        </tr>
                        <tr class="border-t border-b">
                            <td class="px-4 py-2">従業員数</td>
                            <td class="px-4 py-2">500</td>
                        </tr>
                    </tbody>
                </table>
                <img class="w-full" src="https://placehold.jp/600x400.png" alt="Mountain" />
            </div>
            <div className="px-4 lg:px-36  ">
                <p class="text-gray-900 sm:mt-5 md:mt-5 lg:mx-0 mb-5 bg-primary-50 p-6">
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
                
            </div>
            
        </>
    )
}

export default CaseTitle
