import React from 'react'
import Link from 'next/link'

const WebinarCard = ({el="0", title="たった3ステップ！ジルカーHRのカンタン初期設定", company="ジルカーHR株式会社", role="マーケティング事業部", name="山本 隼", category="課題解決", startdt='2021-10-22T12:30:00+09:00', enddt='2021-10-22T14:00:00+09:00', description=""}) => {
    const week = ["日", "月", "火", "水", "木", "金", "土"]
    
    const startDateTime = new Date(startdt)
    const endDateTime = new Date(enddt)

    const year = startDateTime.getFullYear()
    const month = startDateTime.getMonth() + 1
    const day = startDateTime.getDate()
    const startHour = `${startDateTime.getHours()}:${startDateTime.getMinutes() < 10 ? `0${startDateTime.getMinutes()}` : startDateTime.getMinutes()}`
    const endHour = `${endDateTime.getHours()}:${endDateTime.getMinutes() < 10 ? `0${endDateTime.getMinutes()}` : endDateTime.getMinutes()}`
    const dayOfWeek = week[startDateTime.getDay()]

    return (
        <Link href={`/webinars/${el}`}>
            <div class="cursor-pointer py-4 rounded overflow-hidden shadow-lg border-2 hover:border-primary-500">
                <div class="px-6 pt-4">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{category}</span>
                </div>
                <div class="px-6 py-2">
                    <div class="font-bold text-xl mb-2">{title}</div>
                    <p class="text-gray-700 text-base">{`${year}年 ${month}月 ${day}日（${dayOfWeek}） ${startHour}〜${endHour}`}</p>
                </div>
                <div class="px-6 py-2">
                    <p class="text-gray-700 text-base font-bold">{name}</p>
                    <p class="text-gray-700 text-base">{company}</p>
                    <p class="text-gray-700 text-base">{role}</p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <p class="text-gray-700 text-sm">{description}</p>
                </div>
            </div>
        </Link>
    )
}


export default WebinarCard
