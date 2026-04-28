import { useRouter } from "next/router";
import { Container } from "../container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import { RiHome3Line } from "react-icons/ri";
import Link from "next/link";
import clsx from "clsx";

// ...imports identiques
type BreadcrumbsProps = { lastLabel?: string };

export const Breadcrumbs = ({ lastLabel }: BreadcrumbsProps) => {
  const router = useRouter();
  const asPath = router.asPath.split("?")[0].split("#")[0];
  const parts = asPath.split("/").filter(Boolean); // ["boutique","<uid-ou-slug>"]
  const segments = ["accueil", ...parts];
  const lastIndex = segments.length - 1;

  return (
    <Container className="flex items-center py-2">
      {segments.map((seg, i) => {
        const isLast = i === lastIndex;
        const href = i === 0 ? "/" : `/${segments.slice(1, i + 1).join("/")}`;
        const defaultLabel =
          seg === "accueil" ? "" : decodeURIComponent(seg).replace(/-/g, " ");
        const label = isLast && lastLabel ? lastLabel : defaultLabel;

        const crumb = (
          <Typography
            variant="caption3"
            component="span"
            className={clsx(
              "capitalize",
              isLast ? "text-primary" : "text-primary-300 hover:text-secondary animate"
            )}
          >
            {seg === "accueil" ? <RiHome3Line className="inline -mt-1" /> : label}
          </Typography>
        );

        return (
          <div key={`${i}-${href}`} className="flex items-center">
            {isLast ? crumb : <Link href={href}>{crumb}</Link>}
            {!isLast && (
              <Typography variant="caption2" component="span" className="mx-2 text-primary-300">
                /
              </Typography>
            )}
          </div>
        );
      })}
    </Container>
  );
};
