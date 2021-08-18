import React from 'react'
import FeatureTitle from '../../components/FeatureTitle'
import { sampleFeatures } from '../../data/contents'

const featureDetail = ({ feature }) => {
    return (
        <div>
            <FeatureTitle title={feature.title} enTitle={`Feature #${feature.id}`} />
            <div className="mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-24">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 lg:text-4xl mb-4 lg:mb-8">
                    <span className="block">機能概要</span>
                </h2>
                <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                
            </div>
        </div>
    )
}

export async function getStaticPaths({ locales }) {
    const paths = sampleFeatures.map(r => ({
        params: {
            slug: r.slug
        }
    }))

    // res?.map((r) => `/works/${r.fields.slug}`) ?? []
    return { paths: paths, fallback: false }
}

export async function getStaticProps ({ params })  {
    const slug = params.slug || ""
    const feature = sampleFeatures.filter(feature => feature.slug === slug)[0]

    return { 
        props: {
            slug,
            feature
        },
    };
};

export default featureDetail
