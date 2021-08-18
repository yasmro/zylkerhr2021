import React from 'react'
import CommonMeta from '../../components/CommonMeta'
import WebinarTitle from '../../components/WebinarTitle'

import { sampleWebinars } from '../../data/contents'

const caseDetail = ({slug, webinar}) => {
    return (
        <div>
            <CommonMeta title={slug} description="" />
            <WebinarTitle title={webinar.title}
                company={webinar.company}
                role={webinar.role}
                name={webinar.name}
                category={webinar.category}
                startdt={webinar.startdt}
                enddt={webinar.enddt}
                description={webinar.description} 
            />
            <div className="mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-24">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 lg:text-4xl mb-4 lg:mb-8">
                    <span className="block">ウェビナー概要</span>
                </h2>
                <p>{webinar.description}</p>
                
            </div>
        </div>
    )
}
export async function getStaticPaths({ locales }) {
    const paths = sampleWebinars.map(r => ({
        params: {
            slug: r.slug
        }
    }))

    // res?.map((r) => `/works/${r.fields.slug}`) ?? []
    return { paths: paths, fallback: false }
}

export async function getStaticProps ({ params })  {
    const slug = params.slug
    const webinar = sampleWebinars.filter(webinar => webinar.slug === slug)[0];
    return { 
        props: {
            slug,
            webinar,
        },
    };
};

export default caseDetail
