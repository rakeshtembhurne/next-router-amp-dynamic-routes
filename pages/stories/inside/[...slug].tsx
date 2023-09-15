import { useRouter } from "next/router"

export const config = { amp: 'hybrid'}

export default function Home() {
    const router = useRouter();
    const { asPath, pathname, route, query } = router;

    return (<>
        <h1>Output</h1>
        <pre>{JSON.stringify({ asPath, pathname, route, query }, null, 2)}</pre>
    </>)
}
  