export default function CustomForm(props:any) {
    const { children, ...other } = props;

    return (
        <form {...other}>
            {children}
        </form>
    )
}