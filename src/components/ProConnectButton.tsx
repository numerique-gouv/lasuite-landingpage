import Link from 'next/link'
import React from 'react'
import classNames from 'classnames'
import { MouseEventHandler } from 'react'

export const ProConnectButton = () => {
  const { authenticated } = useAuth();

  if (!authenticated) {
    return (
      <div>
        <form action="#" method="post">
            <button className="proconnect-button">
                <span className="proconnect-sr-only">S'identifier avec ProConnect</span>
            </button>
        </form>
        <p>
            <a
                href="https://www.proconnect.gouv.fr/"
                target="_blank"
                rel="noopener noreferrer"
                title="Qu’est-ce que ProConnect ? - nouvelle fenêtre"
            >
                Qu’est-ce que ProConnect ?
            </a>
        </p>
      </div>
      )
  }
}
