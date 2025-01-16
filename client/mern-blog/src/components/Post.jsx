export default function Post() {
    return (
      <div className="post ">
        <div className="image">
        <img src="https://images.unsplash.com/photo-1517676109075-9a94d44145d1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyfGVufDB8fDB8fHww" alt="grass" />
        </div>
        <div className="texts"> 
          <h2>Full-house battery backup coming later this year</h2>
          <p className="info">
            <a className='auhtor'>Vinay Pandey</a>
            <time>2025</time>
          </p>
          <p className='summary'>An electric grass cutter, commonly known as an electric lawn mower, is a modern tool designed for efficiently trimming grass in gardens, yards, and lawns. Powered by electricity, these machines are an eco-friendly alternative to traditional gas-powered mowers, offering convenience, reduced maintenance, and quieter operation.</p>
        </div>
      </div>
    )
}