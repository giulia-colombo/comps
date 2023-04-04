import { useState} from "react";
// these below are react components!
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({items}) => {
    const [expandedIndex, setExpandedIndex] = useState(0)

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        const icon = <span className="text-2xl">
            {/* if isExpanded is true, we get DOWN, otherwise we get FALSE */}
            {isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}
        </span>

        return (
            //outermost element after the return needs to have a unique key
            <div key={item.id}>
            {/* we are creating multiple event handlers with the mappin fn */}
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => setExpandedIndex(index)}>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        );
    });

    return (
        <div className="border-x border-t rounded">
            {renderedItems}
        </div>
    );
}
 
export default Accordion;