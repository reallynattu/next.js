import Link from 'next/link'
import { LinkAccordion } from '../components/link-accordion'

export default function Page() {
  return (
    <main>
      <h1>Home</h1>
      <ul>
        <li>
          <LinkAccordion href="/posts/1">Post 1</LinkAccordion>
        </li>
        <li>
          <LinkAccordion href="/posts/2">Post 2</LinkAccordion>
        </li>
        <li>
          <Link href="/posts/124" prefetch={false}>
            Unprefetched post
          </Link>
        </li>
        <li>
          <Link href="/posts/125?foo=bar" prefetch={false}>
            Unprefetched post with search params
          </Link>
        </li>
      </ul>
    </main>
  )
}
