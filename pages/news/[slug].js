import React from 'react'
import CaseTitle from '../../components/CaseTitle'

const caseDetail = (props) => {
    return (
        <div>
            <CaseTitle />
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
    const slug = {params}
    const caseData = "";

    return { 
        props: {
            slug,
            caseData,
        },
    };
};

export default caseDetail
