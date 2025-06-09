import React from 'react';
import PageLayout from '../components/PageLayout';

const GREEN = '#03855c';
const ORANGE = '#d69229';

const shopItems = [
  { id: 1, name: 'Atzen T-Shirt', price: 25 },
  { id: 2, name: 'Atzen Cap', price: 20 },
  { id: 3, name: 'Atzen Hoodie', price: 45 },
  { id: 4, name: 'Atzen Sticker Pack', price: 10 },
];

export default function Shop() {
  return (
    <PageLayout title="SHOP">
      <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
        {shopItems.map((item) => (
          <div
            key={item.id}
            style={{
              border: `2px solid ${GREEN}`,
              borderRadius: 8,
              padding: 16,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <div style={{ 
              width: 120, 
              height: 120, 
              background: 'rgba(255,255,255,0.1)', 
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              🛍️
            </div>
            <div style={{ 
              color: ORANGE, 
              fontWeight: 'bold', 
              fontSize: 18,
              textAlign: 'center'
            }}>
              {item.name}
            </div>
            <div style={{ 
              color: GREEN, 
              fontWeight: 'bold', 
              fontSize: 16 
            }}>
              {item.price} €
            </div>
            <button
              style={{
                background: GREEN,
                color: ORANGE,
                fontWeight: 'bold',
                fontSize: 16,
                borderRadius: 6,
                padding: '8px 24px',
                border: 'none',
                width: '100%',
                cursor: 'pointer'
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </PageLayout>
  );
} 