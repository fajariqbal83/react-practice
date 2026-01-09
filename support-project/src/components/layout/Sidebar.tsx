const Sidebar = () => {
  return (
    <div className="text-white bg-black
        fixed lg:static
        bottom-0 left-0
        w-full lg:w-20
        h-auto lg:h-full
        flex flex-row lg:flex-col
        items-center
        justify-between lg:justify-between
        px-4 py-2 lg:p-4
        shadow-lg lg:shadow-none
        z-50">
      <div className="flex flex-row lg:flex-col justify-between items-center gap-4">
        <div className="bg-green-500 p-4 rounded-2xl hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          width="50"
          height="50"
        >
          <path
            fill="currentcolor"
            d="M6.525 20.275Q9.262 20.5 12 20.5c1.825 0 3.65-.075 5.475-.2 2.35-.2 4.2-2.25 4.375-4.85l.015-.208c.09-1.258.135-1.886.135-3.19V9.527l-3.25 2.825c-.023 1.198.027 1.512-.05 2.536l-.027.354c-.075.975-.675 1.775-1.4 1.825-3.5.3-6.998.282-10.498-.018-.725-.05-1.325-.85-1.4-1.825l-.022-.294c-.085-1.12-.128-1.706-.128-2.906v-.027c.025-1.291.05-2.607.15-3.923.075-.95.65-1.725 1.35-1.825h10.368l-4.94 4.338-2.125-1.953-2.427 2.13 4.523 4.157L22 6.25V3H6.525c-2.35.2-4.2 2.25-4.375 4.85-.1 1.4-.15 2.8-.15 4.175 0 1.315.046 1.97.137 3.224l.013.176c.175 2.6 2.025 4.65 4.375 4.85"
          ></path>
        </svg>
      </div>

        <div className="w-14 h-14 flex items-center justify-center rounded-2xl hover:bg-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="50" height="50"><path fill="currentcolor" fill-rule="evenodd" d="M14 4H5a3 3 0 0 0-3 3v3a1 1 0 0 0 1 1 1 1 0 0 1 0 2 1 1 0 0 0-1 1v3a3 3 0 0 0 3 3h9v-3a1 1 0 1 1 2 0v3h3a3 3 0 0 0 3-3v-3a1 1 0 0 0-1-1 1 1 0 0 1 0-2 1 1 0 0 0 1-1V7a3 3 0 0 0-3-3h-3v3a1 1 0 1 1-2 0zm2 7a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0z" clip-rule="evenodd"></path></svg>
      </div>
      <div className="w-14 h-14 flex items-center justify-center rounded-2xl hover:bg-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="50" height="50"><path stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2M16 3.13a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.85"></path></svg>
      </div>
      <div className="w-14 h-14 flex items-center justify-center rounded-2xl hover:bg-gray-900 hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="50" height="50"><path stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19V9a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v10m6 0a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1m6 0a1 1 0 0 0 1 1h4m-5-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1M9 19v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h4m1-1a1 1 0 0 1-1 1m12 0H8"></path></svg>
      </div>
      <div className="w-14 h-14 flex items-center justify-center rounded-2xl hover:bg-gray-900 hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="50" height="50"><path stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 3v7h6l-8 11v-7H5z"></path></svg>
      </div>
      <div className="w-14 h-14 flex items-center justify-center rounded-2xl hover:bg-gray-900 hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="50" height="50"><path stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 7h6m-3-3v6m-3 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm0 10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"></path></svg>
      </div>
      </div>
  
      
      <div className="flex flex-row lg:flex-col items-center gap-4">
        <div className="w-14 h-14 flex items-center justify-center rounded-2xl hover:bg-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="50" height="50"><path stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.675 3a1.8 1.8 0 0 1 1.8 1.8v1.407c.462.197.9.45 1.305.753l1.218-.703a1.8 1.8 0 0 1 2.459.658l.675 1.17a1.8 1.8 0 0 1-.66 2.458l-1.217.704a6.3 6.3 0 0 1 0 1.507l1.218.703a1.8 1.8 0 0 1 .659 2.458l-.675 1.17a1.8 1.8 0 0 1-2.46.658l-1.217-.703a6.3 6.3 0 0 1-1.305.754V19.2a1.8 1.8 0 0 1-1.8 1.8h-1.35a1.8 1.8 0 0 1-1.8-1.8v-1.406a6.3 6.3 0 0 1-1.305-.754l-1.218.703a1.8 1.8 0 0 1-2.46-.658l-.674-1.17a1.8 1.8 0 0 1 .659-2.458l1.218-.704a6.3 6.3 0 0 1 0-1.506l-1.218-.704a1.8 1.8 0 0 1-.66-2.458l.676-1.17a1.8 1.8 0 0 1 2.459-.658l1.218.703a6.3 6.3 0 0 1 1.305-.753V4.8a1.8 1.8 0 0 1 1.8-1.8z" clip-rule="evenodd"></path><path stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.696 12a2.696 2.696 0 1 1-5.392 0 2.696 2.696 0 0 1 5.392 0"></path></svg>
        </div>
        <div className="w-14 h-14 flex items-center justify-center rounded-2xl hover:bg-gray-900">
          <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="50" height="50"><path stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 5a2 2 0 1 1 4 0 7 7 0 0 1 4 6v3a4 4 0 0 0 2 3H4a4 4 0 0 0 2-3v-3a7 7 0 0 1 4-6M9 17v1a3 3 0 0 0 6 0v-1"></path></svg>
        </div>
        <div className="p-4 flex justify-center">
  <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-3xl font-bold text-white cursor-pointer hidden">
    M
  </div>
</div>
      </div>
    </div>
  )
}

export default Sidebar
