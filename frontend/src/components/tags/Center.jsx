export default function Center({ className, children,style}) {
    return (
        <div className={`center ${className}`} style={style} >
            {children}
        </div>
    );
}