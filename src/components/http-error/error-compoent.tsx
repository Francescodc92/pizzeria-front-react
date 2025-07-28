interface ErrorHttpComponentProps {
    message: string
}

export const ErrorHttpComponent = ({ message }: ErrorHttpComponentProps) => {
    return (
        <div className="min-h-[400px] flex items-center justify-center">
            <h1 className="text-3xl font-bold text-zinc-800">
                <span className="text-primary">{message}</span>
            </h1>
        </div>
    )
}