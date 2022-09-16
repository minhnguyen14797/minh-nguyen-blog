import BaseLayout from "../components/BaseLayout";
import Head from "next/head";
import styles from '../styles/comingSoonAnimation.module.css'

export default function comingSoon() {
  return (
    <BaseLayout>
        <Head>
            <title>Coming soon!!!</title>
        </Head>
        <div className="flex flex-row justify-center items-center h-[500px]"> 
          <div className={`border-2 text-primary font-bold tracking-[6px] p-4 rounded-lg ${styles.inAndOutAnimation}`}>
            <h1>Coming soon!</h1>
          </div>
          
        </div>
        
    </BaseLayout>
  )
}
