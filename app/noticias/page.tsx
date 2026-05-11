import Noticias from "@/app/_components/layout/Noticias";

export default function Page() {
    return (
        <div className = "flex flex-col justify-center items-center gap-4 p-8 pb-16">
        <Noticias variant='noticias' />
        </div>
    );
}