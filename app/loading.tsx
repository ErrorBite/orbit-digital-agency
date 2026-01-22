export default function Loading() {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-white">
            <div className="flex flex-col items-center gap-4">
                <div className="relative h-16 w-16">
                    <div className="absolute h-full w-full animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600"></div>
                </div>
                <p className="animate-pulse text-sm font-medium text-slate-500">
                    Loading Orbit Digital...
                </p>
            </div>
        </div>
    );
}
