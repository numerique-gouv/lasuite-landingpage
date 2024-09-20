import { ContentSection } from './ContentSection'
import { useRouter } from 'next/router'
import { useState } from 'react'

export const QuickNav = () => {
    const router = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const links = [
        ['Accueil', '/'],
        ['Produits', '/products'],
        ['Agents', '/agent'],
        ['Administration', '/administration'],
        ['Éditeur', '/editeur'],
    ]

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <ContentSection verticalPadding={false}>
            <nav className="pb-6 w-full">
                <div className="md:hidden w-full">
                    <button
                        onClick={toggleMenu}
                        className="flex items-center justify-between w-full py-4"
                    >
                        <div className="flex items-center gap-3">
                            <div className="enable-dsfr">
                                <span className="fr-icon-menu-fill" aria-hidden="true"></span>
                            </div>
                            <span className="relative t-1">Navigation</span>
                        </div>
                        <div className="enable-dsfr">
                            <span
                                className={`fr-icon-arrow-${isMenuOpen ? 'up' : 'down'}-s-line`}
                                aria-hidden="true"
                            ></span>
                        </div>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute left-0 right-0 bg-white z-50 shadow-md">
                            {links.map(([label, url]) => (
                                <a
                                    key={url}
                                    href={url}
                                    className={`block py-2 px-4 text-sm font-medium ${url === router.pathname ? 'underline' : 'hover:underline'
                                        } transition-all duration-200`}
                                >
                                    {label}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
                <div className="hidden md:flex gap-6 flex-wrap justify-start">
                    {links.map(([label, url]) => (
                        <a
                            key={url}
                            href={url}
                            className={`text-lg font-medium pt-4 border-content border-t-4 ${url === router.pathname
                                ? 'text-blue-1 border-blue-1'
                                : 'text-blue-1 border-transparent hover:border-grey-4'
                                } transition-all duration-200`}
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </nav>
        </ContentSection>
    )
}
