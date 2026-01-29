// Google Analytics 4 Event Tracking Service
// Measurement ID: G-BQ0YX2LX5P

declare global {
    interface Window {
          gtag: (...args: any[]) => void;
          dataLayer: any[];
    }
}

// Track QR Code Scan Event
export const trackQRScan = (bottleId: string, location?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'qr_scan', {
                  bottle_id: bottleId,
                  scan_location: location || 'unknown',
                  event_category: 'engagement',
                  event_label: bottleId
          });
    }
};

// Track Wheel Spin Event
export const trackSpinWheel = (userId?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'spin_wheel', {
                  user_id: userId || 'anonymous',
                  event_category: 'game',
                  event_label: 'wheel_spin'
          });
    }
};

// Track Win Coins Event
export const trackWinCoins = (amount: number, bottleId?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'win_coins', {
                  coin_amount: amount,
                  bottle_id: bottleId || 'unknown',
                  event_category: 'game',
                  event_label: `won_${amount}_coins`
          });
    }
};

// Track User Registration
export const trackUserRegister = (method: 'google' | 'email') => {
    if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'sign_up', {
                  method: method,
                  event_category: 'user',
                  event_label: `register_${method}`
          });
    }
};

// Track User Login
export const trackUserLogin = (method: 'google' | 'email') => {
    if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'login', {
                  method: method,
                  event_category: 'user',
                  event_label: `login_${method}`
          });
    }
};

// Track Age Check Confirmation
export const trackAgeCheckConfirm = () => {
    if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'age_verified', {
                  event_category: 'user',
                  event_label: 'age_check_confirmed'
          });
    }
};

// Extract bottle ID from URL parameter
export const getBottleIdFromURL = (): string | null => {
    if (typeof window !== 'undefined') {
          const urlParams = new URLSearchParams(window.location.search);
          return urlParams.get('bottle') || urlParams.get('b') || urlParams.get('id');
    }
    return null;
};

// Initialize analytics on page load
export const initAnalytics = () => {
    const bottleId = getBottleIdFromURL();
    if (bottleId) {
          trackQRScan(bottleId);
    }
};
