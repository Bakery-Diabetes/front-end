import clsx from "clsx";
import { Container } from "../container/container";

type Props = {
  src?: string;
  heightClass?: string;
  repeat?: "repeat" | "repeat-x" | "repeat-y" | "no-repeat";
  className?: string;
};

export function Pattern({
  src = "/assets/svg/pattern.svg",
  heightClass = "h-32 md:h-28",
  repeat = "repeat-x",
  className,
}: Props) {
  return (
    <Container noPadding={true}>
        <div
        aria-hidden="true"
        className={clsx(
            "w-full rounded-2xl bg-center",
            "bg-[length:auto_100%]",
            repeat === "repeat-x" && "bg-repeat-x",
            repeat === "repeat-y" && "bg-repeat-y",
            repeat === "repeat" && "bg-repeat",
            repeat === "no-repeat" && "bg-no-repeat",
            heightClass,
            className
        )}
        style={{ backgroundImage: `url('${src}')` }}
        />
    </Container>
  );
}
