export default function Hero() {
    return (
        <section
            id="home"
            className="w-full relative h-[95vh] flex flex-col rounded-xl bg-gradient-to-br from-blue-200 via-red-200 to-yellow-200 border text-blue-800 gap-28 z-0 px-10 lg:px-40"
        >
            <div className="w-full p-4 h-14"></div>
            <div className="text-4xl font-semibold text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam rem minima ut dolore corrupti ipsum perspiciatis
                labore?
            </div>
            {/* Shape */}
            <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-48 aspect-square bg-blue-600"></div>
            {/* End Shape */}
        </section>
    );
}
