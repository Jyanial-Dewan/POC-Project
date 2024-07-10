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
    <div className="flex gap-8 pl-8 rounded-3xl shadow-md bg-[#F7F6F2]">
        <Link to={'/'} className="py-1 rounded-r-3xl flex items-center gap-8 bg-[#F7F6F2] text-[#4B6587] pr-8 hover:text-[#C8C6C6]">
            <p>Home</p>
            <RiArrowRightDoubleFill/>
        </Link>
        {middleRoute? <Link to={middleRoutePath? middleRoutePath: "#"} className="py-1 rounded-r-3xl flex items-center gap-8 bg-[#F7F6F2] text-[#4B6587] pr-4 hover:text-[#C8C6C6]">
            <p>{middleRoute}</p>
            <RiArrowRightDoubleFill/>
        </Link>: null}
        {endRoute? <Link className="py-1 pl-4 pr-8 rounded-r-3xl bg-[#4B6587] text-[#F7F6F2] hover:text-[#C8C6C6]" to={endRoutePath? endRoutePath: "#"}>
        {endRoute}
        </Link> : null}
    </div>
  )
}

export default CustomBreadcrumb
