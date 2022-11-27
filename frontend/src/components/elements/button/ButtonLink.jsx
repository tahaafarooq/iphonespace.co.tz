import Link from "next/link";

const ButtonLink = ({children,className="btn btn-link",onClick,href="#"}) => {
    return (
    <Link href={href} prefetch={false}>
        <a className={className} onClick={onClick}>{children}</a>
    </Link>
    );
}

export default ButtonLink;