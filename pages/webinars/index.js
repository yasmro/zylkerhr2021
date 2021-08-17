import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useRouter } from "next/router";
import Link from 'next/link'
import WebinarCard from '../../components/WebinarCard';

const index = (props) => {
    const router = useRouter();

    return (
        <div>
            <SectionTitle title="ライブウェビナー" enTitle="webinars" description="ジルカーHRを活用し、;あらゆる業務改善に努めるエキスパートたちがWebセミナーを提供します" />

            <div className="mx-auto py-12 px-4 sm:px-6 lg:px-24">
                
                <div class="py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    {
                        ["management-solution-20211023", "efficient-something-20211029",  ].map((el) => (
                            <WebinarCard el={`${el}`} />
                        ))
                    }

                </div>
                
            </div>
        </div>
    )
}

export default index


