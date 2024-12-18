import Link from 'next/link';
import { MENU_ITEMS } from '@/lib/constants';

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {MENU_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}