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
        "management-solution", "efficient-something"
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
    const webinarData = "";

    return { 
        props: {
            slug,
            webinarData,
        },
    };
};

export default caseDetail
