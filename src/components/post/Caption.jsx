import {useState} from 'react'

export default function Caption({post}) {
        const [isExpanded, setIsExpanded] = useState(false);
        const Truncate = post?.caption.length > 50;
        const text = isExpanded ? post?.caption : post?.caption.slice(0,10);

  return (
    <div className="px-3 mt-2">
      <p className="text-sm">
        <span className="font-semibold">Reactive Accelerator</span>
        <span className="">
           {"# "} {text}
            {!isExpanded && Truncate &&  '....' }
        </span>

       
       {
        Truncate && (
            <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-500 text-sm font-medium ml-1 hover:underline"
          >
             {isExpanded ? "Show less" : "More"}
          </button>
        )
       }

         
      </p>
    </div>
  );
}
