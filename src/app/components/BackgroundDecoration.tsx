import { Calculator, Book, Atom, Pi, Pencil, GraduationCap, Microscope, Globe } from 'lucide-react';
import { useMemo } from 'react';

export function BackgroundDecoration() {
    // Use useMemo to prevent regeneration of random values on re-renders,
    // although for this static list it changes rarely.
    const icons = useMemo(() => [
        { Icon: Calculator, top: '10%', left: '5%', delay: '0s', duration: '7s' },
        { Icon: Book, top: '25%', right: '8%', delay: '2s', duration: '8s' },
        { Icon: Atom, top: '45%', left: '12%', delay: '4s', duration: '9s' },
        { Icon: Pi, top: '60%', right: '15%', delay: '1s', duration: '7.5s' },
        { Icon: Pencil, bottom: '25%', left: '8%', delay: '3s', duration: '8.5s' },
        { Icon: GraduationCap, bottom: '15%', right: '5%', delay: '5s', duration: '9.5s' },
        { Icon: Microscope, top: '15%', left: '35%', delay: '2.5s', duration: '7.2s' },
        { Icon: Globe, bottom: '35%', right: '35%', delay: '1.5s', duration: '8.8s' },
    ], []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {icons.map((item, index) => (
                <div
                    key={index}
                    className="absolute text-purple-300/20 dark:text-purple-900/20 animate-blob"
                    style={{
                        top: item.top,
                        left: item.left,
                        right: item.right,
                        bottom: item.bottom,
                        animationDelay: item.delay,
                        animationDuration: item.duration,
                    }}
                >
                    <item.Icon className="w-16 h-16 md:w-24 md:h-24" />
                </div>
            ))}
        </div>
    );
}
