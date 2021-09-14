import Link from "next/link";

export default function TpLink({ href, children }) {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
}
