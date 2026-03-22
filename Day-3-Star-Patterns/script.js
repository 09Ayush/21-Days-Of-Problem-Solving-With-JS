function butterflyPattern(n) {
    // Upper Half
    for (let i = 1; i <= n; i++) {
        let str = "";
        
        // Left Wing (i stars)
        str += "*".repeat(i);
        
        // Center Spaces (2 * (n - i))
        // This is the "Even" gap logic: 6, 4, 2...
        str += " ".repeat(2 * (n - i));
        
        // Right Wing (i stars)
        str += "*".repeat(i);
        
        console.log(str);
    }

    // Lower Half (Reverse loop)
    for (let i = n; i >= 1; i--) {
        let str = "";
        
        // Left Wing
        str += "*".repeat(i);
        
        // Center Spaces
        str += " ".repeat(2 * (n - i));
        
        // Right Wing
        str += "*".repeat(i);
        
        console.log(str);
    }
}

// Test with n = 4
butterflyPattern(4);