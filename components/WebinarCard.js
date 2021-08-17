import React from 'react'
import Link from 'next/link'

const WebinarCard = ({el="0", title="たった3ステップ！ジルカーHRのカンタン初期設定", company="ジルカーHR株式会社", role="マーケティング事業部", name="山本 隼", business="BtoB", industries=["建設"]}) => {
    return (
        <Link href={`/cases/${el}`}>
            <div class="cursor-pointer py-4 rounded overflow-hidden shadow-lg border-2 hover:border-green-500">
                <div class="px-6 pt-4">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">機能解説</span>
                </div>
                <div class="px-6 py-2">
                    <div class="font-bold text-xl mb-2">{title}</div>
                    <p class="text-gray-700 text-base">2021年 10月 22日（木） 14:00〜14:30</p>
                </div>
                <div class="px-6 py-2">
                    <p class="text-gray-700 text-base font-bold">{name}</p>
                    <p class="text-gray-700 text-base">{company}</p>
                    <p class="text-gray-700 text-base">{role}</p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <p class="text-gray-700 text-base text-sm">このウェビナーではジルカーHRを利用いただくにあたって必要な前提知識と初期セットアップの手順について解説します。</p>
                </div>
            </div>
        </Link>
    )
}


export default WebinarCard
