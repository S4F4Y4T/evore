'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type WishlistContextType = {
    wishlist: string[]; // Store product IDs
    addToWishlist: (id: string) => void;
    removeFromWishlist: (id: string) => void;
    toggleWishlist: (id: string) => void;
    isInWishlist: (id: string) => boolean;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
    const [wishlist, setWishlist] = useState<string[]>([]);

    // Load from local storage
    useEffect(() => {
        const saved = localStorage.getItem('evore_wishlist');
        if (saved) {
            setWishlist(JSON.parse(saved));
        }
    }, []);

    // Save to local storage
    useEffect(() => {
        localStorage.setItem('evore_wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (id: string) => {
        setWishlist((prev) => (prev.includes(id) ? prev : [...prev, id]));
    };

    const removeFromWishlist = (id: string) => {
        setWishlist((prev) => prev.filter((item) => item !== id));
    };

    const toggleWishlist = (id: string) => {
        if (wishlist.includes(id)) {
            removeFromWishlist(id);
        } else {
            addToWishlist(id);
        }
    };

    const isInWishlist = (id: string) => wishlist.includes(id);

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, toggleWishlist, isInWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    const context = useContext(WishlistContext);
    if (context === undefined) {
        throw new Error('useWishlist must be used within a WishlistProvider');
    }
    return context;
}
