import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Dialog from '@radix-ui/react-dialog';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.png';

export default function Header() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NavigationMenu.Root className="relative flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src={logo}
                  alt="Logo"
                  width={40}
                  height={40}
                  className="w-auto h-10 object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <NavigationMenu.List className="hidden md:flex space-x-8">
                <NavigationMenu.Item>
                    <NavigationMenu.Link asChild>
                        <Link href="/" className="text-sm font-medium hover:text-gray-600">
                            Ana Sayfa
                        </Link>
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link asChild>
                  <Link href="/about" className="text-sm font-medium hover:text-gray-600">
                    Hakkımızda
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link asChild>
                  <Link href="/products" className="text-sm font-medium hover:text-gray-600">
                    Ürünler
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link asChild>
                  <Link href="/contact" className="text-sm font-medium hover:text-gray-600">
                    İletişim
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link asChild>
                  <Link href="/blog" className="text-sm font-medium hover:text-gray-600">
                    Blog
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            </NavigationMenu.List>

            {/* Mobile Navigation */}
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button className="md:hidden p-2 rounded-md hover:bg-gray-100">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                <Dialog.Content className="fixed inset-y-0 right-0 w-[80%] max-w-sm bg-white p-6 shadow-lg">
                  <div className="flex justify-between items-center mb-8">
                    <Dialog.Title className="text-lg font-medium">
                    </Dialog.Title>
                    <Dialog.Close className="p-2 hover:bg-gray-100 rounded-md">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </Dialog.Close>
                  </div>
                  <Dialog.Description className="sr-only">
                    Main navigation menu for mobile devices
                  </Dialog.Description>
                  <nav className="flex flex-col space-y-4">
                    <Link href="/" className="text-lg hover:text-gray-600">
                      Ana Sayfa
                    </Link>
                    <Link href="/about" className="text-lg hover:text-gray-600">
                      Hakkımızda
                    </Link>
                    <Link href="/products" className="text-lg hover:text-gray-600">
                      Ürünler
                    </Link>
                    <Link href="/contact" className="text-lg hover:text-gray-600">
                      İletişim
                    </Link>
                    <Link href="/blog" className="text-lg hover:text-gray-600">
                      Blog
                    </Link>
                  </nav>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </NavigationMenu.Root>
        </div>
      </header>
      {/* Spacer div to prevent content from hiding behind fixed header */}
      <div className="h-16"></div>
    </>
  );
} 