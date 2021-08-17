import React from 'react'
import CaseTitle from '../../components/CaseTitle'
import CommonMeta from '../../components/CommonMeta'

const caseDetail = (props) => {
    return (

        <div>
            <CommonMeta title={props.slug} />
            <CaseTitle business={props.business}/>
        </div>
    )
}
export async function getStaticPaths({ locales }) {
    const paths = [
        "b2b-1","b2b-2","b2b-3",
        "b2c-1","b2c-2","b2c-3",
    ].map(r => ({
        params: {
            slug: r
        }
    }))

    // res?.map((r) => `/works/${r.fields.slug}`) ?? []
    return { paths: paths, fallback: false }
}

export async function getStaticProps ({ params })  {
    const slug = params.slug || ""
    const caseData = "";
    const business = slug.split('-')[0] === "b2b" ? "BtoB" : "BtoC"
    console.log(slug)
    return { 
        props: {
            slug,
            caseData,
            business
        },
    };
};

export default caseDetail
