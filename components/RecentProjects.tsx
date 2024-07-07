import { projects } from "./data"
import Project from "./ui/Project"

const RecentProjects = () => {
  return (
    <div className="mt-10 py-20" id="projects">
        <h1 className="heading">
          A small selection of  {' '}
          <span className="text-purple">recent projects</span>
        </h1>

        {/* Project Carts */}
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8">
          {/* destructure the projects props and use in map */}
          {projects.map(({id, title, des, img, iconLists, link}) => (
            // cart size, styles and contents
            <div key={id} className="sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
             <Project title={title} des={des} img={img} iconLists={iconLists} link={link}>

             </Project>
            </div>
            ))
          }
        </div>
    </div>
  )
}

export default RecentProjects