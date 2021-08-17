import React from 'react'
import CommonMeta from '../../components/CommonMeta'
import SectionTitle from '../../components/SectionTitle'

const index = () => {
    return (
        <div>
            <CommonMeta title="はじめに" description="ジルカーHRを導入するメリット" />
            <SectionTitle title="はじめに" enTitle="introduction" description="ジルカーHRを導入するメリット" />
            <div className="mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-24">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 lg:text-4xl mb-4 lg:mb-8">
                    <span className="block">人事労務が抱える課題</span>
                </h2>
                <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                
            </div>

            <div className="mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-24">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 lg:text-4xl mb-4 lg:mb-8">
                    <span className="block">HRツールとは</span>
                </h2>
                <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                
            </div>

            <div className="mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-24">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 lg:text-4xl mb-4 lg:mb-8">
                    <span className="block">ジルカーHRを導入するまで</span>
                </h2>
                <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                
            </div>
        </div>
    )
}

export default index
