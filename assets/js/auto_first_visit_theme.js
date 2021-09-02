(function() {
    if (window.matchMedia) {
        var prevOsTheme = localStorage.getItem('os-theme');
        var osTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        if (!prevOsTheme || prevOsTheme !== osTheme) {
            localStorage.setItem('os-theme', osTheme);
            localStorage.setItem('theme', osTheme);
        }
    }
})();
