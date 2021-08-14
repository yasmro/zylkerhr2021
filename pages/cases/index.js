import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useRouter } from "next/router";
import Link from 'next/link'

const index = (props) => {
    const router = useRouter();
    const categories = [ "BtoB", "BtoC"];
    const industries = [ "建築", "通信", "教育", "インターネット"]


    const [searchWord, setSearchWord] = useState({
        categories: (router.query.categories?.split(",") || []),
        industries: (router.query.industries?.split(",") || [])
    })

    console.log(router.query.categories, searchWord)

    const handleChange = e => {
        //checkedItemsのstateをセット
        if(e.target.checked){
            setSearchWord({
                ...searchWord,
                [e.target.name]:[
                    ...searchWord[e.target.name],
                    e.target.value
                ]
            })
        }else{
            setSearchWord({
                ...searchWord,
                [e.target.name]: searchWord[e.target.name].filter((name) => name !== e.target.value)
            })
        }
    }

    return (
        <div>
            <SectionTitle title="導入事例" description="" />

            <div className="mx-auto py-12 px-4 sm:px-6 lg:px-24">
                <div className="mx-0 lg:mx-24 p-6 rounded overflow-hidden shadow-lg">

                    <div className="flex gap-5">
                        <h2 className="pr-6 border-r text-md font-extrabold tracking-tight text-gray-900 lg:text-xl mb-4 lg:mb-8">
                            <span className="block">カテゴリー検索</span>
                        </h2>               
                        <div class="block mb-6">
                            <span class="text-gray-700 font-bold">ビジネス形態</span>
                            <div class="mt-2">
                                {
                                    categories.map((el) => (
                                        <div>
                                            <label class="inline-flex items-center">
                                                <input type="checkbox" name="categories" class="form-checkbox" value={el} onChange={(e) => handleChange(e)} />
                                                <span class="ml-2">{el}</span>
                                            </label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div class="block">
                            <span class="text-gray-700 font-bold">業界</span>
                            <div class="mt-2">
                                {
                                    industries.map((el) => (
                                        <div>
                                            <label class="inline-flex items-center">
                                                <input type="checkbox" name="industries" class="form-checkbox" value={el} onChange={(e) => handleChange(e)} />
                                                <span class="ml-2">{el}</span>
                                            </label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>


                <div class="py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    {
                        [1, 2, 3, 4, 5, 6].map((el) => (
                            <Link href="/cases/title">
                                <div class="rounded overflow-hidden shadow-lg">
                                    <img class="w-full" src="https://placehold.jp/600x400.png" alt="Mountain" />
                                    <div class="px-6 py-4">
                                        <div class="font-bold text-xl mb-2">人事労務作業のムダを解消！データの一元化で効率化を実現</div>
                                        <p class="text-gray-700 text-base">ジルカーテクノロジー株式会社</p>
                                        <p class="text-gray-700 text-base">松本氏</p>
                                    </div>
                                    <div class="px-6 pt-4 pb-2">
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">B2B</span>
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">建設</span>
                                    </div>
                                </div>
                            </Link>

                        ))
                    }

                </div>
                
            </div>
        </div>
    )
}

export default index


