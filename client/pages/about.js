import Layout from '@/components/layout'

const about = () => {
  return (
    <Layout meta={{ name: 'About' }}>
      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="my-4 text-clip text-3xl font-bold md:text-5xl">About</h1>
        <p className="text-md">About the project!</p>
      </div>
    </Layout>
  )
}

export default about
