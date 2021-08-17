import Head from 'next/head'
import Image from 'next/image'
import CommonMeta from '../components/CommonMeta'
import NewsList from '../components/NewsList'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <CommonMeta title="Home" description="ジルカーHRのブランディングサイトです" />

      <main>
        <div className="bg-gray-50 text-center lg:text-left py-16 px-4 sm:px-6 lg:py-36 lg:px-24 lg:items-center lg:justify-between">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 lg:text-6xl">
            <span className="block">業務のムダを省き、</span>
            <span className="mt-6 block text-primary-600">生産性を上げる。</span>
          </h2>
          <div className="mt-8 lg:flex-shrink-0 text-gray-600">
            <p className="text-base lg:text-xl">ジルカーHRは人事業務で発生するムダを効率化し、業務効率化を支援するソフトウェアです。</p>
          </div>
          <div className="mt-8 flex items-center justify-center lg:justify-start lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-bold rounded-md text-white bg-primary-600 hover:bg-primary-700"
              >
                15日間 無料トライアル
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-bold rounded-md text-primary-600 bg-white hover:bg-primary-50"
              >
                資料ダウンロード
              </a>
            </div>
          </div>
        </div>
        <section class="mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-24 text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <h2 class="sm:text-4xl text-2xl font-bold title-font text-center text-gray-900 mb-20">
              <span className="block">ジルカーHRの3つのポイント</span>
            </h2>
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div class="p-4 md:w-1/3 flex">
                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary-100 text-primary-500 mb-4 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-6">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Shooting Stars</h2>
                  <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
                  <a class="mt-3 text-primary-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="p-4 md:w-1/3 flex">
                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary-100 text-primary-500 mb-4 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-6">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-2">The Catalyzer</h2>
                  <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
                  <a class="mt-3 text-primary-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="p-4 md:w-1/3 flex">
                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary-100 text-primary-500 mb-4 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex-grow pl-6">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Neptune</h2>
                  <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
                  <a class="mt-3 text-primary-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto py-24 px-4 sm:px-6 lg:py-24 lg:px-24 bg-primary-600 text-white">
          <h2 class="sm:text-4xl text-2xl font-bold title-font text-center ">
            <span className="block">ジルカーHRの導入効果</span>
          </h2>
          <section class="body-font">
            <div class="container px-5 py-12 mx-auto">
              <div class="flex -m-4 text-center">
                <div class="p-4 sm:w-1/3 w-1/2">
                  <h2 class="title-font font-medium sm:text-6xl text-5xl ">25%</h2>
                  <p class="leading-relaxed">総業務時間削減</p>
                </div>
                <div class="p-4 sm:w-1/3 w-1/2">
                  <h2 class="title-font font-medium sm:text-6xl text-5xl ">13%</h2>
                  <p class="leading-relaxed">年末調整工数削減</p>
                </div>
                <div class="p-4 sm:w-1/3 w-1/2">
                  <h2 class="title-font font-medium sm:text-6xl text-5xl ">9%</h2>
                  <p class="leading-relaxed">雑務系業務工数削減</p>
                </div>
              </div>
            </div>
          </section>
        </section>
        
        <section className="mx-auto py-24 px-4 sm:px-6 lg:py-24 lg:px-24">
          <h2 class="sm:text-4xl text-2xl font-bold title-font text-center text-gray-900">
            <span className="block">お知らせ</span>
          </h2>
          <NewsList />
        </section>
    </main>
    </div>
  )
}
