function injectSharedComponents() {
    // 1. Footer automatisch einfügen, wenn ein Container mit id="site-footer" da ist
    const footerPlaceholder = document.getElementById('site-footer');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
        <footer class="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-8 mt-auto text-xs text-slate-600 dark:text-slate-400">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div class="space-y-3">
                    <div class="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                        <i data-lucide="trophy" class="w-4 h-4 text-sky-500"></i>
                        <span>DQV Online-Liga Rechner</span>
                    </div>
                    <p class="text-slate-500 dark:text-slate-400 leading-relaxed">
                        Interaktive Tabellenrechner und Simulatoren für die DQV Online-Liga.
                    </p>
                </div>
                <div class="space-y-2">
                    <h4 class="font-semibold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">Seiten & Tools</h4>
                    <ul class="space-y-1.5">
                        <li><a href="Tabelle.html" class="hover:text-sky-600 dark:hover:text-sky-400 transition">Tabellen-Simulator (Hauptrunde)</a></li>
                        <li><a href="swissnewdesign.html" class="hover:text-sky-600 dark:hover:text-sky-400 transition">Schweizer System (Vorrunde)</a></li>
                    </ul>
                </div>
                <div class="space-y-2">
                    <h4 class="font-semibold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">Links</h4>
                    <ul class="space-y-1.5">
                        <li><a href="https://quizverband.de" target="_blank" rel="noopener noreferrer" class="hover:text-sky-600 dark:hover:text-sky-400 transition flex items-center gap-1">DQV Website <i data-lucide="external-link" class="w-3 h-3 text-slate-400"></i></a></li>
                        <li><a href="https://github.com/McNutty1/DQVOL2027Swiss" target="_blank" rel="noopener noreferrer" class="hover:text-sky-600 dark:hover:text-sky-400 transition flex items-center gap-1">GitHub Repository <i data-lucide="external-link" class="w-3 h-3 text-slate-400"></i></a></li>
                    </ul>
                </div>
                <div class="space-y-2">
                    <h4 class="font-semibold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">System</h4>
                    <div class="flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span class="text-slate-500 dark:text-slate-400">Status: Online</span>
                    </div>
                </div>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-400">
                <p>© 2027 DQV Online-Liga • Amnesiophobie</p>
            </div>
        </footer>`;
    }

    // Falls du auch das mobile Menü (Drawer) zentralisieren möchtest, 
    // kannst du hier analog einen Container befüllen.
    
    // Lucide Icons nach dem Injizieren neu laden
    if (window.lucide) {
        lucide.createIcons();
    }
}

// Automatisch beim Laden der Seite ausführen
window.addEventListener('DOMContentLoaded', injectSharedComponents);
