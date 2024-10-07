import { ReactElement } from "react";
import Tag from "./Tag";

type Feature = {
  description: string;
  icon: ReactElement;
  tag?: string;
};

type Props = {
  items: Array<Feature>;
  className?: string;
};

function Features({ items, className }: Props) {
  return (
    <ul className={className}>
      {items.map((feature, index) => (
        <li
          className="list-none flex gap-2 items-center"
          key={`list-${feature.description}-${index}`}
        >
          <div className="bg-gradient-to-tr from-blue-500 to-blue-700 p-1 rounded-xl h-12 aspect-square flex items-center justify-center">
            {feature.icon}
          </div>
          {feature.description}
          {feature.tag && <Tag className="h-fit -mt-3">{feature.tag}</Tag>}
        </li>
      ))}
    </ul>
  );
}

export default Features;
