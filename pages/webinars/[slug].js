import React from 'react'
import CommonMeta from '../../components/CommonMeta'
import WebinarTitle from '../../components/WebinarTitle'

const caseDetail = (props) => {
    return (
        <div>
            <CommonMeta title={props.slug} description="" />
            <WebinarTitle />
            <div className="mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-24">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 lg:text-4xl mb-4 lg:mb-8">
                    <span className="block">ウェビナー概要</span>
                </h2>
                <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                
            </div>
        </div>
    )
}
export async function getStaticPaths({ locales }) {
    const paths = [
        "management-solution-20211023", "efficient-something-20211029"
    ].map(r => ({
        params: {
            slug: r
        }
    }))

    // res?.map((r) => `/works/${r.fields.slug}`) ?? []
    return { paths: paths, fallback: false }
}

export async function getStaticProps ({ params })  {
    const slug = params.slug
    const webinarData = "";

    return { 
        props: {
            slug,
            webinarData,
        },
    };
};

export default caseDetail
