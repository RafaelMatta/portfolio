import { captalize } from "@/app/lib/text-formatting";
import { PropsWithChildren } from "react";

interface TopicProps {
  label: string;
}

export default function Topic(props: PropsWithChildren<TopicProps>) {
  return (
    <>
      <p className="flex-auto">
        <span className="font-bold">
          {`${captalize(props.label)}:`}
          &nbsp;
        </span>
        {props.children}
      </p>
    </>
  );
}
