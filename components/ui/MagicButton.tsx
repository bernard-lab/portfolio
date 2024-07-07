const MagicButton = ({
  title, 
  icon, 
  position, 
  handleClick, 
  otherClasses
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  // Optional props
  handleClick?: () => void; //doesn't return anything
  otherClasses?: string;
}) => {
  
  return (
    <button className="relative inline-flex h-12 overflow-hidden w-full rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10 hover:animate-bounce" onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" 
      />
      <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black-200 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-3
        ${otherClasses}`}
      >
        {position === 'left' && icon} {/** Add icon here*/}
        {title}
        {position === 'right' && icon} {/** Add icon here*/}
      </span>
    </button>
  )
}

export default MagicButton