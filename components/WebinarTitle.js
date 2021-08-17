import React from 'react'

const WebinarTitle = ({el="0", title="たった3ステップ！ジルカーHRのカンタン初期設定", company="ジルカーHR株式会社", role="マーケティング事業部", name="山本 隼", category="課題解決", startdt='2021-10-22T12:30:00+09:00', enddt='2021-10-22T14:00:00+09:00'}) => {
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
        <>
            <div className="bg-gradient-to-r from-primary-600 to-primary-800  mx-auto py-16 px-6 lg:py-24 lg:px-36" >
                <h2 className="text-2xl font-extrabold tracking-tight text-white lg:text-4xl">
                    <span className="block">{title}</span>
                </h2>
                
                <p class="mt-3 mb-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-2xl lg:mx-0">
                    {`${year}年 ${month}月 ${day}日（${dayOfWeek}） ${startHour}〜${endHour}`}
                </p>
                <span class="inline-block border-2 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{category}</span>
            </div>
        </>
    )
}

export default WebinarTitle
