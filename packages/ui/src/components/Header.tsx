// interface HeaderProps extends HTMLElement {
//   size?: 'SM' | 'MD' | 'LG';
// }

export function Header({ title }: { title: string }) {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
}
