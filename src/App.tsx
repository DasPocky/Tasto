import { BrowserRouter, Link, NavLink, Outlet, Route, Routes } from 'react-router'

import { Page } from '@/components/page'
import { cn } from '@/lib/utils'
import { BestenlistePage } from '@/pages/bestenliste'
import { ErgebnisPage } from '@/pages/ergebnis'
import { StartPage } from '@/pages/start'
import { TippTestPage } from '@/pages/tipp-test'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<StartPage />} />
          <Route path="tipp-test" element={<TippTestPage />} />
          <Route path="ergebnis/:id" element={<ErgebnisPage />} />
          <Route path="bestenliste" element={<BestenlistePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="endlab-head pt-[env(safe-area-inset-top)] pr-[env(safe-area-inset-right)] pl-[env(safe-area-inset-left)]">
        <span className="endlab-bubble" style={{ width: 160, height: 160, right: -40, top: -70 }} />
        <span className="endlab-bubble" style={{ width: 44, height: 44, left: "42%", top: -14 }} />
        <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-5 sm:px-8">
          <Wordmark />
          <nav className="flex h-full items-stretch gap-6">
            <NavItem to="/tipp-test">Tipp-Test</NavItem>
            <NavItem to="/bestenliste">Bestenliste</NavItem>
            <span className="hidden items-center text-sm text-white/40 sm:flex">Training</span>
          </nav>
        </div>
      </header>
      <div className="flex-1">
        <Outlet />
      </div>
      <footer className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-3 px-5 pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-xs text-muted-foreground sm:px-8">
        <span>tasto – Tipptrainer für das 10-Finger-System</span>
        <span className="endlab-footer">
          <span className="endlab-logo" aria-hidden />
          <span>
            Powered by <b>EndLab</b>
          </span>
        </span>
      </footer>
    </div>
  )
}

function Wordmark() {
  return (
    <Link to="/" className="flex items-center font-mono text-lg font-medium tracking-tight">
      tasto
      <span className="ml-0.5 inline-block h-5 w-[3px] animate-pulse bg-ice" aria-hidden />
    </Link>
  )
}

function NavItem({ to, children }: { to: string; children: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          'flex items-center border-b-2 border-transparent text-sm text-white/70 transition-colors hover:text-white',
          isActive && 'border-ice text-white',
        )
      }
    >
      {children}
    </NavLink>
  )
}

function NotFound() {
  return (
    <Page className="text-center">
      <h1 className="text-2xl font-semibold">Seite nicht gefunden</h1>
      <p className="mt-2 text-muted-foreground">
        Zurück zur{' '}
        <Link to="/" className="font-semibold text-foreground underline underline-offset-4">
          Startseite
        </Link>
      </p>
    </Page>
  )
}
