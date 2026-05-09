import Link from 'next/link';
import { motion } from 'framer-motion';

const links = [
    {
        id: 1,
        name: "Conheça",
        href: ""
    },
    {
        id: 2,
        name: "Notícias",
        href: ""

    },
    {
        id: 3,
        name: "Publicações",
        href: ""

    },
    {
        id: 4,
        name: "Eventos",
        href: ""

    },
    {
        id: 5,
        name: "Arquivo",
        href: ""

    },
    {
        id: 6,
        name: "Associe-se",
        href: ""

    },
    {
        id: 7,
        name: "Contato",
        href: ""

    }
]

export default function NavList() {
    return (
        <motion.div className="absolute bg-[var(--navy-blue-transparent)] w-screen p-4 z-50"
            initial={{ opacity: 0, y: -10 }} // Start invisible and 10px up
            animate={{ opacity: 1, y: 0 }}   // Animate to visible and original position
            transition={{ duration: 0.2, ease: "easeOut" }}>
            <nav className="flex flex-col gap-4 items-end">
                {links.map((link) => (
                    <div key={link.id} className="text-[var(--faded-white)]">
                        <Link
                            key={link.id}
                            href={link.href}
                        >
                            {link.name}
                        </Link>
                    </div>
                ))}
            </nav>
        </motion.div>
    );
}