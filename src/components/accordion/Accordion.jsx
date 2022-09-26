import { Children } from "react";
import { AccordionItem } from "./AccordionItem";

export const Accordion = ({children}) => {
  return (
    children && (
      <div className="accordion">
        {
          Children.map(children, (item, i)=> {
            const {title, children} = item.props;
            return <AccordionItem title={title} children={children} key={i}/>
          })
        }
      </div>
    )
  )
}
