export default function PrimaryButton() {
    return (
        <div className="w-fit inline-flex gap-2 text-blue-700 font-medium text-xs lg:text-sm mt-4 bg-white px-4 pr-1.5 py-1 rounded-full group">
            <span className="block text-xs lg:text-sm">Lihat selengkapnya</span>
            <div className="h-[95%] aspect-square shrink-0 bg-blue-700 rounded-full text-white grid place-items-center scale-[0.25] group-hover:scale-100 transition-transform">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    X
                </span>
            </div>
        </div>
    );
}
