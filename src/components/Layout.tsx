import Head from "next/head";

interface Props {
  children: React.ReactNode
  className?: string
}

export default function Layout({ children, className }: Props) {
  return (
    <div className={className}>
      <Head>
        <title>Todo List</title>
        <meta name="description" content="This is a todo list application." />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#317EFB"/>
      </Head>
      {children}
    </div>
  );
}
