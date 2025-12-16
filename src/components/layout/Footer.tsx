export function Footer() {
    return (
        <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5">
            <p>&copy; {new Date().getFullYear()} FutureWave Technologies SRL. All rights reserved.</p>
            <p className="mt-1 text-xs text-gray-600">Based in EU</p>
        </footer>
    );
}
