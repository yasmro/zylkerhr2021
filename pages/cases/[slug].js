import React from 'react'
import CaseTitle from '../../components/CaseTitle'
import CommonMeta from '../../components/CommonMeta'
import { sampleCases } from '../../data/contents'

const caseDetail = ({c}) => {
    return (

        <div>
            <CommonMeta title={`${c.title} | ${c.company} | 事例紹介`} />
            <CaseTitle title={c.title} companyName={c.company} contactName={c.contact} industries={c.industries} business={c.business}/>
        </div>
    )
}
export async function getStaticPaths({ locales }) {
    const paths = sampleCases.map(r => ({
        params: {
            slug: r.slug
        }
    }))

    // res?.map((r) => `/works/${r.fields.slug}`) ?? []
    return { paths: paths, fallback: false }
}

export async function getStaticProps ({ params })  {
    const slug = params.slug || ""
    const c = sampleCases.filter(caseData => caseData.slug === slug)[0];
    const business = slug.split('-')[0] === "b2b" ? "BtoB" : "BtoC"
    console.log(c)
    return { 
        props: {
            slug,
            c,
            business
        },
    };
};

export default caseDetail
