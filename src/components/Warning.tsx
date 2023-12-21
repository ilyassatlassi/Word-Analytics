type WarningProps = {
    warningText: string
}
export default function Warning({ warningText }: WarningProps) {
    return <p className="absolute bottom-[15px] left-9 text-red-600 text-sm mt-1 ml-1">{warningText}</p>;
}