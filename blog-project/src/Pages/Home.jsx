const Home = (props) => {
   const { data } = props;
  return (
    <div>
       <div className="flex flex-wrap gap-5 w-full p-6">
      {data.map((post) => (
        <div
          key={post.id}
          className="bg-white h-99 w-90 rounded-2xl shadow-[0_5px_5px_rgba(0,0,0,0.25)]"
        >
          <div className="flex flex-col p-5">
            <div>
              <img
                className="w-79 h-47 rounded-2xl object-cover"
                src={post.featured_image}
              />
            </div>
            <div className="flex flex-row justify-between items-center  mt-2">
              <div className="text-2xl font-bold uppercase">{post.title}</div>
              <div className="text-sm text-gray-500">{post.categories}</div>
            </div>
            <div className="text-sm mt-3">
              {post.excerpt}
              <span className="ml-3 text-red-500 underline">
                <a href="">Read More</a>
              </span>
            </div>
            <div className="text-sm font-bold mt-4">{post.date}</div>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Home
