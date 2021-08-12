import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';

export default function Home({exploreData, cardsData}) {
  return (
    <div className="">
      <Head>
        <title>Air</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Banner/>

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          {/* Pull data from a server - API endpoints */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard 
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {cardsData?.map(({img, title}) => (
              <MediumCard 
                key={img}
                img={img}
                title={title}
              />
            ))}
          </div>
        </section>

        <LargeCard 
          img='https://images.unsplash.com/photo-1504643039591-52948e3ddb47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ2fHxjYWJpbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
          title='The Greatest Outdoors'
          description='Wishlists curated by Air'
          buttonText='Get Inspired'
        />
      </main>

    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp')
    .then((res) => res.json())
    .catch(err => console.log(`Error: ${err}`))

  const cardsData = await fetch('https://links.papareact.com/zp1')
    .then((res) => res.json())
    .catch(err => console.log(`Error: ${err}`))


  return {
    props: {
      exploreData,
      cardsData
    }
  }
}