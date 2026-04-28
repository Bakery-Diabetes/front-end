import clsx from "clsx";
import { Container } from "../container/container";
import Image from "next/image";

type Props = {
  src?: string;
  heightClass?: string;
  repeat?: "repeat" | "repeat-x" | "repeat-y" | "no-repeat";
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function Pattern({
  src = "/assets/svg/pattern.svg",
  heightClass,
  repeat = "repeat-x",
  className,
  imageSrc,
  imageAlt = "",
}: Props) {
  return (
    <Container noPadding={true} className="h-full">
        <div
          aria-hidden="true"
          className={clsx(
            "w-full bg-center flex items-center justify-center rounded",
            repeat === "repeat-x" && "bg-repeat-x",
            repeat === "repeat-y" && "bg-repeat-y",
            repeat === "repeat" && "bg-repeat",
            repeat === "no-repeat" && "bg-no-repeat",
            heightClass ?? "h-full",
            className
          )}
          style={{ backgroundImage: `url('${src}')` }}
        >
          {imageSrc && (
            <img
              src={imageSrc}
              alt={imageAlt}
              className="max-w-[80%] max-h-[80%] object-contain mx-auto"
            />
          )}
      </div>
    </Container>
  );
}
