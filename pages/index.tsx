import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { groq } from 'next-sanity';
import React from 'react';
import { MainPage } from '../components/MainPage';
import { dehydrate, DehydratedState, QueryClient } from '@tanstack/react-query';
import { getSanity } from '../helpers/utils';
import { TProject, TSkill } from '../types';

const Home = ({
  projectData,
  skillData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Hao Portfolio</title>
        <meta
          name="description"
          content="Hao Nguyen - Front End Developer Personal Portfolio"
        />
        <meta
          property="og:image"
          content="https://cdn.sanity.io/images/lnyy2568/production/efd4bddda3c74c14824ca7da019521ec3ceefb30-3000x2000.png"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.haonguyen.tech" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPage projectData={projectData} skillData={skillData} />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<{
  dehydratedState: DehydratedState;
  projectData: TProject[] | false;
  skillData: TSkill[] | false;
}> = async () => {
  //Setup react-query to refetch data, also disable some default options.
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  await queryClient.prefetchQuery(['getProjects'], () =>
    getSanity(groq`*[_type == 'projects']`)
  );
  await queryClient.prefetchQuery(['getSkills'], () =>
    getSanity(groq`*[_type == 'skills'] | order(_createdAt asc)`)
  );
  // React query type ?
  //* Because this data can be undefined , if it is undefined, the getServerSideProps cannot serialized it into JSON and the app will break, so as a work around, we have to check if this data is undefined then we return the props.projectData as false
  //Then we handle logic to render when data is false in child component
  const projectData: TProject[] | undefined = queryClient.getQueryData([
    'getProjects',
  ]);

  const skillData: TSkill[] | undefined = queryClient.getQueryData([
    'getSkills',
  ]);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      projectData: projectData ? projectData : false,
      skillData: skillData ? skillData : false,
    },
  };
};
