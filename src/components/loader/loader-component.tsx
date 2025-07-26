
export const LoaderComponent = () => {
    return (
        <div className="h-[300px] flex items-center justify-center">
            <div
                className="inline-block h-20 w-20  animate-spin rounded-full border-6 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] text-primary"
                role="status">
                <span
                    className="!absolute  !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
            </div>
        </div>
    );
}