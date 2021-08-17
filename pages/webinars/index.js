import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useRouter } from "next/router";
import Link from 'next/link'
import WebinarCard from '../../components/WebinarCard';

const index = (props) => {
    const router = useRouter();

    return (
        <div>
            <SectionTitle title="ライブウェビナー" description="ジルカーHRを活用し、;あらゆる業務改善に努めるエキスパートたちがWebセミナーを提供します" />

            <div className="mx-auto py-12 px-4 sm:px-6 lg:px-24">
                
                <div class="py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    {
                        [1, 2,  ].map((el) => (
                            <WebinarCard el={`b2b-${el}`} business="BtoB" />
                        ))
                    }

                </div>
                
            </div>
        </div>
    )
}

export default index


