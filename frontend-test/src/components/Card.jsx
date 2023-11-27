/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
function Card({ data:{ name, body, img_url,tag_names} }) {
    console.log(tag_names)
  return (
    <div className="max-w-sm p-6 relative flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="flex" src={img_url} />
          <div className="content-around flex justify-center items-center">
              <p className="mb-3 inline-block px-4 py-2 -mt-12 font-normal bg-gray-800 text-gray-100 dark:text-gray-100">{name}</p>
          </div>
          <p className="text-center">
            {body}
          </p>
      <div className='mt-3'>
        {tag_names.map((tag) => <span key={tag.id} className='py-1 px-4 m-2 rounded-2xl bg-lime-500 inline-block text-gray-50'>{tag.name}</span>)}  
      </div>
        </div>
  )
}


export default Card