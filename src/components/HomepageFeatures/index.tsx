import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Deflationary Advantage',
    Svg: require('@site/static/img/silvio-gesell.svg').default,
    description: (
      <>
        Bitgesell is designed to be deflationary in nature,
        burning 90% of all transaction fees and decreasing block size.
      </>
    ),
  },
  {
    title: '10x smaller',
    Svg: require('@site/static/img/10x.svg').default,
    description: (
      <>
        By design, BGL has a block weight of 400KB – ten times lower when
        compared to bitcoin’s ensuring a higher transaction throughput and less blocktime.
      </>
    ),
  },
  {
    title: '100% Segwit',
    Svg: require('@site/static/img/segwit.svg').default,
    description: <>All transactions are 100% segwit by design. This helps eliminate all the known issues with legacy type transactions.</>,
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
