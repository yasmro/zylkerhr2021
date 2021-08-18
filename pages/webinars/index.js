import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useRouter } from "next/router";
import Link from 'next/link'
import WebinarCard from '../../components/WebinarCard';
import CommonMeta from '../../components/CommonMeta';

import { sampleWebinars } from '../../data/contents';

const index = (props) => {
    const router = useRouter();

    return (
        <div>
            <CommonMeta  title="ライブウェビナー"  description="ジルカーHRを活用し、あらゆる業務改善に努めるエキスパートたちがWebセミナーを提供します" />
            <SectionTitle title="ライブウェビナー" enTitle="webinars" description="ジルカーHRを活用し、;あらゆる業務改善に努めるエキスパートたちがWebセミナーを提供します" />

            <div className="mx-auto py-12 px-4 sm:px-6 lg:px-24">
                
                <div class="py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    {
                        sampleWebinars.map((webinar) => (
                            <WebinarCard 
                                el={webinar.slug}
                                title={webinar.title}
                                company={webinar.company}
                                role={webinar.role}
                                name={webinar.name}
                                category={webinar.category}
                                startdt={webinar.startdt}
                                enddt={webinar.enddt}
                                description={webinar.description}
                                />
                        ))
                    }

                </div>
                
            </div>
        </div>
    )
}

export default index


