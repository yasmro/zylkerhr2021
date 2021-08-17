import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useRouter } from "next/router";
import Link from 'next/link'
import CaseCard from '../../components/CaseCard';
import NewsList from '../../components/NewsList';

const index = (props) => {
    const router = useRouter();
    const categories = [ "BtoB", "BtoC"];
    const industries = [ "建築", "通信", "教育", "インターネット"]


    return (
        <div>
            <SectionTitle title="お知らせ" enTitle="news" description="" />

            <NewsList />
        </div>
    )
}

export default index


