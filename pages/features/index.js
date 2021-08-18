import React from 'react'
import Link from 'next/link'
import CommonMeta from '../../components/CommonMeta'
import SectionTitle from '../../components/SectionTitle'

import { sampleFeatures } from '../../data/contents'

const index = () => {
    return (
        <div>
            <CommonMeta title="ジルカーHRの機能" description="人事管理には多くの複雑な処理が発生します。;ジルカーHRでは、シンプルかつ柔軟性のある労務管理ができるため、本来の業務に集中できるようになります。ここではジルカーHRの主な機能について紹介します。" />
            <SectionTitle title="ジルカーHRの機能" enTitle="features" description="人事管理には多くの複雑な処理が発生します。;ジルカーHRでは、シンプルかつ柔軟性のある労務管理ができるため、本来の業務に集中できるようになります。ここではジルカーHRの主な機能について紹介します。" />
            <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <h1 class="sm:text-4xl text-2xl font-bold title-font mb-2 text-gray-900">ジルカーHRの主な6つの機能</h1>
                    </div>
                    <div class="flex flex-wrap -m-4 ">
                        {
                            sampleFeatures.map((feature) => (
                                <Link href={`/features/${feature.slug}`}>
                                    <div class="xl:w-1/3 md:w-1/2 p-4 self-stretch">
                                        <div class="border border-gray-200 p-6 rounded-lg">
                                            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mb-4">
                                                {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                                </svg> */}
                                                <span className="block text-2xl">{feature.id}</span>
                                            </div>
                                            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">{feature.title}</h2>
                                            <p class="leading-relaxed text-base">{feature.description}</p>
                                            <div class="mt-3 text-primary-500 inline-flex items-center">
                                                詳しくみる
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

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
