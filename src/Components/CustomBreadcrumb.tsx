import { RiArrowRightDoubleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

interface CustomBreadcrumbProps {
    middleRoute?: string;
    middleRoutePath? : string;
    endRoute?: string;
    endRoutePath?: string;
}

const CustomBreadcrumb = ({middleRoute, middleRoutePath, endRoute, endRoutePath}: CustomBreadcrumbProps) => {
  return (
    <div className="flex rounded-r-3xl shadow-md shadow-black/20 bg-[#F0F0F0]">
        <Link to={'/'} className="py-1 pl-8 rounded-r-3xl flex items-center gap-8 bg-[#F0F0F0] text-[#213555] pr-8 hover:text-[#4F709C]">
            <p>Home</p>
            <RiArrowRightDoubleFill/>
        </Link>
        {middleRoute? <Link to={middleRoutePath? middleRoutePath: "#"} className="py-1 rounded-r-3xl flex items-center gap-8 bg-[#F0F0F0] text-[#213555] pr-4 hover:text-[#4F709C]">
            <p>{middleRoute}</p>
            <RiArrowRightDoubleFill/>
        </Link>: null}
        {endRoute? <Link className="py-1 pl-4 pr-8 rounded-r-3xl bg-[#213555] text-[#F0F0F0] hover:text-[#4F709C]" to={endRoutePath? endRoutePath: "#"}>
        {endRoute}
        </Link> : null}
    </div>
  )
}

export default CustomBreadcrumb
